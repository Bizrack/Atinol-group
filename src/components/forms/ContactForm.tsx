"use client";

import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/Button";
import { sendFormEmail, isEmailJsConfigured, type FormType } from "@/lib/emailjs";

type ContactFormProps = {
  onSuccess?: () => void;
  className?: string;
  /** When true, focus the first input on mount (e.g. when user landed from a CTA). */
  autoFocus?: boolean;
  /** "booking" = Book Consultation form (template_2n20upv), "contact" = Contact Us form (template_se1t35o) */
  formType?: FormType;
};

export function ContactForm({ onSuccess, className = "", autoFocus = false, formType = "contact" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!autoFocus || !firstInputRef.current) return;
    const t = requestAnimationFrame(() => {
      firstInputRef.current?.focus();
    });
    return () => cancelAnimationFrame(t);
  }, [autoFocus]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: data.get("phone") ? String(data.get("phone")) : undefined,
      message: String(data.get("message") ?? ""),
    };

    const loadingToastId = toast.loading("Sending…");
    try {
      if (isEmailJsConfigured()) {
        await sendFormEmail(formType, payload);
      } else {
        const res = await fetch("/api/contact", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) throw new Error("API error");
      }
      toast.dismiss(loadingToastId);
      setStatus("done");
      form.reset();
      const message =
        formType === "booking"
          ? "Request sent. We'll be in touch soon to schedule."
          : "Message sent. We'll be in touch soon.";
      toast.success(message);
      onSuccess?.();
    } catch {
      toast.dismiss(loadingToastId);
      setStatus("error");
      toast.error("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <div
      className={`rounded-xl border border-white/25 bg-white/70 backdrop-blur-md shadow-lg p-4 sm:p-6 md:p-8 transition-all duration-300 ease-out hover:shadow-xl hover:border-atinol-teal/30 ${className}`}
    >
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-atinol-dark mb-1">
          Name *
        </label>
        <input
          ref={firstInputRef}
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-xl border border-slate-300 bg-white text-slate-900 shadow-sm px-4 py-3.5 min-h-[48px] text-base focus:border-atinol-teal focus:ring-2 focus:ring-atinol-teal/30 outline-none transition-all placeholder:text-slate-500"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-atinol-dark mb-1">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-slate-300 bg-white text-slate-900 shadow-sm px-4 py-3.5 min-h-[48px] text-base focus:border-atinol-teal focus:ring-2 focus:ring-atinol-teal/30 outline-none transition-all placeholder:text-slate-500"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-atinol-dark mb-1">
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full rounded-xl border border-slate-300 bg-white text-slate-900 shadow-sm px-4 py-3.5 min-h-[48px] text-base focus:border-atinol-teal focus:ring-2 focus:ring-atinol-teal/30 outline-none transition-all placeholder:text-slate-500"
          placeholder="+1 (555) 000-0000"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-atinol-dark mb-1">
          Short service request description *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full rounded-xl border border-slate-300 bg-white text-slate-900 shadow-sm px-4 py-3.5 min-h-[120px] text-base focus:border-atinol-teal focus:ring-2 focus:ring-atinol-teal/30 outline-none resize-none transition-all placeholder:text-slate-500"
          placeholder="How can we help?"
        />
      </div>
      <Button type="submit" disabled={status === "sending"} className="w-full">
        {status === "sending" ? "Sending…" : "Send"}
      </Button>
    </form>
    </div>
  );
}
