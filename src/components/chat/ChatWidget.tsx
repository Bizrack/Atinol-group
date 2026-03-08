"use client";

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { SITE } from "@/lib/site-config";
import { sendFormEmail, isEmailJsConfigured } from "@/lib/emailjs";
import toast from "react-hot-toast";
import styles from "./ChatWidget.module.scss";

type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
  content?: React.ReactNode;
  status?: "sending" | "sent";
};

type Step = "welcome" | "name" | "phone" | "email" | "message" | "more" | "confirm" | "done";

const CHAT_EMAIL_PLACEHOLDER = "chat@theatinolgroup.com";
const BOT_REPLY_DELAY_MS = 1400;
const INACTIVITY_TIMEOUT_MS = 5 * 60 * 1000; // 5 minutes

function capitalizeName(name: string) {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function ChatWidget() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState<Step>("welcome");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [messageParts, setMessageParts] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const thinkingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inactivityTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open && step === "welcome" && messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "bot",
          text: "Welcome! How can we help you today? Please share your full name.",
        },
      ]);
      setStep("name");
    }
  }, [open, step, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open && !minimized) inputRef.current?.focus();
  }, [open, minimized, step]);

  useEffect(() => {
    return () => {
      if (thinkingTimeoutRef.current) clearTimeout(thinkingTimeoutRef.current);
      if (inactivityTimeoutRef.current) clearTimeout(inactivityTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (open && step !== "done") resetInactivityTimer();
    else if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
      inactivityTimeoutRef.current = null;
    }
  }, [open, step, messages]);

  function addBotMessage(textOrContent: string | React.ReactNode) {
    if (typeof textOrContent === "string") {
      setMessages((prev) => [
        ...prev,
        { id: `bot-${Date.now()}`, role: "bot", text: textOrContent },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        { id: `bot-${Date.now()}`, role: "bot", text: "", content: textOrContent },
      ]);
    }
  }

  function addUserMessage(text: string, status: "sending" | "sent" = "sent") {
    const id = `user-${Date.now()}`;
    setMessages((prev) => [...prev, { id, role: "user", text, status }]);
    return id;
  }

  function scheduleBotReply(botText: string | React.ReactNode, nextStep: Step) {
    setIsThinking(true);
    if (thinkingTimeoutRef.current) clearTimeout(thinkingTimeoutRef.current);
    thinkingTimeoutRef.current = setTimeout(() => {
      addBotMessage(botText);
      setStep(nextStep);
      setIsThinking(false);
      thinkingTimeoutRef.current = null;
    }, BOT_REPLY_DELAY_MS);
  }

  function resetInactivityTimer() {
    if (inactivityTimeoutRef.current) clearTimeout(inactivityTimeoutRef.current);
    if (!open || step === "done") return;
    inactivityTimeoutRef.current = setTimeout(() => {
      addBotMessage("Chat session ended due to inactivity.");
      inactivityTimeoutRef.current = null;
      setTimeout(() => {
        setOpen(false);
        setMinimized(false);
        setMessages([]);
        setStep("welcome");
        setName("");
        setPhone("");
        setEmail("");
        setMessageParts([]);
      }, 2000);
    }, INACTIVITY_TIMEOUT_MS);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = input.trim();
    if (!value || isThinking) return;

    setInput("");
    resetInactivityTimer();

    if (step === "name") {
      setName(value);
      addUserMessage(value);
      scheduleBotReply(
        <>Okay, great to have you <strong><em>{capitalizeName(value)}</em></strong>! What&apos;s your phone number?</>,
        "phone"
      );
      return;
    }

    if (step === "phone") {
      setPhone(value);
      addUserMessage(value);
      scheduleBotReply("What&apos;s your email address?", "email");
      return;
    }

    if (step === "email") {
      setEmail(value);
      addUserMessage(value);
      scheduleBotReply("What&apos;s your message or question?", "message");
      return;
    }

    if (step === "message") {
      setMessageParts((prev) => [...prev, value]);
      addUserMessage(value);
      scheduleBotReply("Got it. Do you have anything else to add? (Type your next message, or \"No\" to continue)", "more");
      return;
    }

    if (step === "more") {
      const lower = value.toLowerCase();
      if (lower === "no" || lower === "nope" || lower === "that's all" || lower === "that is all") {
        addUserMessage(value);
        scheduleBotReply("Ready to submit your chat? Click \"Submit chat\" below to send your message to our team.", "confirm");
      } else {
        setMessageParts((prev) => [...prev, value]);
        addUserMessage(value);
        scheduleBotReply("Anything else? (Type your message, or \"No\" to continue)", "more");
      }
      return;
    }
  }

  async function handleSubmitChat() {
    if (!name || !phone || !email || messageParts.length === 0) return;
    resetInactivityTimer();
    setSending(true);

    const transcript = messageParts.map((p, i) => `Message ${i + 1}: ${p}`).join("\n\n");
    const fullMessage = `Chat submission from website.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n--- Messages ---\n\n${transcript}`;

    addUserMessage("Submit chat");

    try {
      if (!isEmailJsConfigured()) {
        throw new Error("Email is not configured");
      }
      await sendFormEmail("contact", {
        name: `Chat: ${name}`,
        email,
        phone,
        message: fullMessage,
      });
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-done-${Date.now()}`,
          role: "bot",
          text: "Thank you! Your chat has been sent. We'll get back to you soon.",
        },
      ]);
      setStep("done");
      toast.success("Chat submitted. We'll be in touch soon.");
      // Close box and reset so next open starts a new chat
      setOpen(false);
      setMinimized(false);
      setMessages([]);
      setStep("welcome");
      setName("");
      setPhone("");
      setEmail("");
      setMessageParts([]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: `bot-err-${Date.now()}`, role: "bot", text: "Something went wrong. Please try again or email us directly." },
      ]);
      toast.error("Failed to send. Please try again or email us.");
    } finally {
      setSending(false);
    }
  }

  const showInput = open && !minimized && step !== "done" && step !== "confirm";
  const showSubmitButton = open && !minimized && step === "confirm" && !sending;

  const handleClose = () => {
    setOpen(false);
    setMinimized(false);
    setMessages([]);
    setStep("welcome");
    setName("");
    setPhone("");
    setEmail("");
    setMessageParts([]);
  };

  function renderWidget() {
    const showIcon = !open || minimized;
    const showChatBox = open && !minimized;

    return (
      <>
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            setMinimized(false);
          }}
          className="fixed z-50 h-12 px-3 sm:h-14 sm:px-4 rounded-full bg-atinol-teal text-white shadow-lg hover:bg-atinol-teal/90 active:scale-95 transition-all flex items-center justify-center gap-2 bottom-[max(1rem,env(safe-area-inset-bottom,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] animate-breathe"
          aria-label="Open chat"
          style={{ display: showIcon ? "flex" : "none" }}
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
          </svg>
          <span className="font-bold text-sm sm:text-base whitespace-nowrap">Chat us</span>
        </button>

        {/* Chat box - only show when open and not minimized (when minimized, icon replaces it) */}
        <div className={styles.chatBox} style={{ display: showChatBox ? "flex" : "none" }}>
          <div className={styles.header}>
            <span className={styles.headerTitle}>Chat with {SITE.name}</span>
            <div className={styles.headerActions}>
              <button
                type="button"
                onClick={() => setMinimized((m) => !m)}
                className={styles.headerBtn}
                aria-label={minimized ? "Expand chat" : "Minimize chat"}
              >
                {minimized ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              <button
                type="button"
                onClick={handleClose}
                className={styles.headerBtn}
                aria-label="Close chat"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {!minimized && (
            <>
              <div className={styles.messages}>
                {messages.map((m) => (
                  <div key={m.id} className={`${styles.messageRow} ${m.role === "user" ? styles.user : styles.bot}`}>
                    <div className={`${styles.bubble} ${m.role === "user" ? styles.user : styles.bot}`}>
                      <p className={styles.bubbleText}>{m.content ?? m.text}</p>
                      {m.role === "user" && (
                        <span className={styles.checkRow} aria-hidden>
                          {m.status === "sending" ? (
                            <span className={styles.checkSending}>Sending…</span>
                          ) : (
                            <svg className={styles.checkIcon} viewBox="0 0 16 16" fill="currentColor">
                              <path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z" />
                            </svg>
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                {isThinking && (
                  <div className={styles.thinking}>
                    <div className={`${styles.bubble} ${styles.bot}`}>
                      <span className={styles.thinkingDots} aria-label="Thinking">
                        <span />
                        <span />
                        <span />
                      </span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className={styles.footer}>
                {showSubmitButton && (
                  <div className={styles.submitBtnWrap}>
                    <button
                      type="button"
                      onClick={handleSubmitChat}
                      disabled={sending}
                      className={styles.submitBtn}
                    >
                      Submit chat
                    </button>
                  </div>
                )}
                {showInput && (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={isThinking ? "..." : step === "more" ? "Type message or No..." : "Type here..."}
                      disabled={isThinking}
                      className={styles.input}
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || isThinking}
                      className={styles.sendBtn}
                    >
                      Send
                    </button>
                  </form>
                )}
              </div>
            </>
          )}
        </div>
    </>
  );
  }

  if (!mounted) return null;

  const content = renderWidget();
  return typeof document !== "undefined" && document.body
    ? createPortal(content, document.body)
    : content;
}
