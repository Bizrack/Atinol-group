"use client";

import { useState, useRef, useEffect } from "react";
import { SITE } from "@/lib/site-config";
import { sendFormEmail, isEmailJsConfigured } from "@/lib/emailjs";
import toast from "react-hot-toast";

type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
  status?: "sending" | "sent";
};

type Step = "welcome" | "name" | "phone" | "email" | "message" | "more" | "confirm" | "done";

const CHAT_EMAIL_PLACEHOLDER = "chat@theatinolgroup.com";
const BOT_REPLY_DELAY_MS = 1400;

export function ChatWidget() {
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
  const inputRef = useRef<HTMLInputElement>(null);

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
    };
  }, []);

  function addBotMessage(text: string) {
    setMessages((prev) => [
      ...prev,
      { id: `bot-${Date.now()}`, role: "bot", text },
    ]);
  }

  function addUserMessage(text: string, status: "sending" | "sent" = "sent") {
    const id = `user-${Date.now()}`;
    setMessages((prev) => [...prev, { id, role: "user", text, status }]);
    return id;
  }

  function scheduleBotReply(botText: string, nextStep: Step) {
    setIsThinking(true);
    if (thinkingTimeoutRef.current) clearTimeout(thinkingTimeoutRef.current);
    thinkingTimeoutRef.current = setTimeout(() => {
      addBotMessage(botText);
      setStep(nextStep);
      setIsThinking(false);
      thinkingTimeoutRef.current = null;
    }, BOT_REPLY_DELAY_MS);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = input.trim();
    if (!value || isThinking) return;

    setInput("");

    if (step === "name") {
      setName(value);
      addUserMessage(value);
      scheduleBotReply("Thanks! What's your phone number?", "phone");
      return;
    }

    if (step === "phone") {
      setPhone(value);
      addUserMessage(value);
      scheduleBotReply("What's your email address?", "email");
      return;
    }

    if (step === "email") {
      setEmail(value);
      addUserMessage(value);
      scheduleBotReply("What's your message or question?", "message");
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

  return (
    <>
      {/* Floating message button */}
      <button
        type="button"
        onClick={() => {
          setOpen((o) => !o);
          if (!open) setMinimized(false);
        }}
        className="fixed z-50 h-14 w-14 rounded-full bg-atinol-teal text-white shadow-lg hover:bg-atinol-teal/90 hover:scale-110 active:scale-95 transition-all flex items-center justify-center bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-[calc(1.5rem+env(safe-area-inset-right))] animate-breathe"
        aria-label="Open chat"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
      </button>

      {/* Chat box */}
      {open && (
        <div
          className={`fixed z-50 w-[calc(100vw-3rem)] max-w-md rounded-2xl border border-white/20 bg-slate-900/95 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden transition-all bottom-[calc(5rem+env(safe-area-inset-bottom))] right-[calc(1.5rem+env(safe-area-inset-right))] ${
            minimized ? "h-12 opacity-90" : "h-[400px] sm:h-[460px]"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-slate-800/50">
            <span className="font-semibold text-white">Chat with {SITE.name}</span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setMinimized((m) => !m)}
                className="p-2 rounded-lg text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                aria-label={minimized ? "Expand chat" : "Minimize chat"}
              >
                {minimized ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {!minimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                        m.role === "user"
                          ? "bg-atinol-teal text-white rounded-br-md"
                          : "bg-white/10 text-slate-200 rounded-bl-md"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{m.text}</p>
                      {m.role === "user" && (
                        <span className="flex justify-end mt-1" aria-hidden>
                          {m.status === "sending" ? (
                            <span className="text-white/70 text-xs">Sending…</span>
                          ) : (
                            <svg className="w-4 h-4 text-white/90" viewBox="0 0 16 16" fill="currentColor">
                              <path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z" />
                            </svg>
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                {isThinking && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl rounded-bl-md px-4 py-3 bg-white/10 text-slate-200">
                      <span className="inline-flex gap-1.5" aria-label="Thinking">
                        <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0ms]" />
                        <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.15s]" />
                        <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.3s]" />
                      </span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input or Submit */}
              <div className="p-3 border-t border-white/10 bg-slate-800/30">
                {showSubmitButton && (
                  <div className="mb-3">
                    <button
                      type="button"
                      onClick={handleSubmitChat}
                      disabled={sending}
                      className="w-full py-3 rounded-xl bg-atinol-teal text-white font-semibold hover:bg-atinol-teal/90 disabled:opacity-50 transition-colors"
                    >
                      Submit chat
                    </button>
                  </div>
                )}
                {showInput && (
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={isThinking ? "..." : step === "more" ? "Type your message or No to continue..." : "Type here..."}
                      disabled={isThinking}
                      className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-atinol-teal disabled:opacity-60"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || isThinking}
                      className="rounded-xl bg-atinol-teal px-4 py-2.5 text-white font-medium hover:bg-atinol-teal/90 disabled:opacity-50 transition-colors min-h-[44px]"
                    >
                      Send
                    </button>
                  </form>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
