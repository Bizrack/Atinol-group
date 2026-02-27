"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type ContactFormProps = {
  onSuccess?: () => void;
  className?: string;
};

export function ContactForm({ onSuccess, className = "" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone") || undefined,
          message: data.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setStatus("done");
        form.reset();
        onSuccess?.();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className={`rounded-xl border border-white/25 bg-white/70 backdrop-blur-md shadow-lg p-6 sm:p-8 ${className}`}
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
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-xl border border-slate-300 bg-white text-slate-900 shadow-sm px-4 py-3 focus:border-atinol-teal focus:ring-2 focus:ring-atinol-teal/30 outline-none transition-all placeholder:text-slate-500"
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
          className="w-full rounded-xl border border-slate-300 bg-white text-slate-900 shadow-sm px-4 py-3 focus:border-atinol-teal focus:ring-2 focus:ring-atinol-teal/30 outline-none transition-all placeholder:text-slate-500"
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
          className="w-full rounded-xl border border-slate-300 bg-white text-slate-900 shadow-sm px-4 py-3 focus:border-atinol-teal focus:ring-2 focus:ring-atinol-teal/30 outline-none transition-all placeholder:text-slate-500"
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
          className="w-full rounded-xl border border-slate-300 bg-white text-slate-900 shadow-sm px-4 py-3 focus:border-atinol-teal focus:ring-2 focus:ring-atinol-teal/30 outline-none resize-none transition-all placeholder:text-slate-500"
          placeholder="How can we help?"
        />
      </div>
      {status === "done" && (
        <p className="text-atinol-green text-sm">Message sent. We&apos;ll be in touch soon.</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again or email us directly.</p>
      )}
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send"}
      </Button>
    </form>
    </div>
  );
}
