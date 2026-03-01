"use client";

import { useState } from "react";
import { Loader } from "@/components/ui/Loader";

type CalendarEmbedProps = {
  calendarUrl: string;
  className?: string;
};

/**
 * Embeds Calendly or Cal.com when calendarUrl is set.
 * Set SITE.calendarUrl in site-config.ts to your Calendly link (e.g. https://calendly.com/yourname/30min)
 * or Cal.com booking link.
 */
export function CalendarEmbed({ calendarUrl, className = "" }: CalendarEmbedProps) {
  const [loading, setLoading] = useState(true);

  if (!calendarUrl || calendarUrl === "#") return null;

  const isCalendly = calendarUrl.includes("calendly.com");
  const embedDomain = typeof window !== "undefined" ? window.location.hostname : "theatinolgroup.com";
  const separator = calendarUrl.includes("?") ? "&" : "?";
  const embedUrl = isCalendly
    ? `${calendarUrl}${separator}embed_domain=${embedDomain}&embed_type=Inline`
    : calendarUrl;

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 z-10">
          <Loader size="lg" />
          <p className="text-atinol-muted text-sm">Loading calendar…</p>
        </div>
      )}
      <iframe
        title="Book a consultation"
        src={embedUrl}
        width="100%"
        height="700"
        className="rounded-xl border border-white/20 w-full min-h-[400px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[700px]"
        allowFullScreen
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
