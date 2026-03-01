"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const EXPERTISE = [
  "Zero Trust & cloud security",
  "DevSecOps programs",
  "Cybersecurity strategy & secure networks",
  "Incident response & proactive monitoring",
];

const FIRST_PARAGRAPH =
  "At T.A.G. Corp., we pride ourselves on providing top-notch expertise and customized solutions to meet the unique needs of each of our clients. Our comprehensive suite of services includes IT consulting, secure architecturing, cybersecurity risk assessments, vulnerability assessments, incident response, and more.";

export function AboutSnapshot() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Section
      id="about"
      title="About T.A.G. Corp"
      subtitle="Experienced leadership. Practical guidance. Solutions designed to scale."
      variant="glass"
    >
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image: hidden on mobile, visible from md up */}
        <div className="hidden md:block relative aspect-[4/3] min-h-[320px] sm:min-h-[380px] md:aspect-[3/4] md:min-h-[420px] rounded-xl overflow-hidden bg-atinol-dark/5 order-2 md:order-1">
          <ImageWithFallback
            src="/Assets/abouttag.jpg"
            alt="T.A.G. Corp expertise in cybersecurity"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <p className="text-atinol-dark leading-relaxed text-base sm:text-lg">
            {FIRST_PARAGRAPH}
          </p>

          {/* Rest of content: on mobile show only when expanded; on desktop always show */}
          <div className={`space-y-6 ${expanded ? "block" : "hidden md:block"}`}>
            <p className="text-atinol-dark leading-relaxed text-base sm:text-lg">
              Founded by Ayo Asekun, an experienced cloud security professional
              with hands-on experience building Zero Trust, cloud security, and
              DevSecOps programs for growing and established organizations.
            </p>
            <p className="text-atinol-muted leading-relaxed text-base sm:text-lg">
              Clients work directly with experienced leadership, ensuring
              practical guidance, clear communication, and solutions designed to
              scale. When you partner with T.A.G. Corp, you are in capable hands.
            </p>
            <h3 className="font-semibold text-atinol-dark text-lg pt-2">
              Key expertise areas
            </h3>
            <ul className="space-y-3">
              {EXPERTISE.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-atinol-muted text-base sm:text-lg transition-colors hover:text-atinol-teal"
                >
                  <span className="w-2 h-2 rounded-full bg-atinol-teal shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8">
              <Button href="/book" className="min-h-[48px]">
                Book a Consultation
              </Button>
              <Button href="/about" variant="outline" className="min-h-[48px]">
                Full About page →
              </Button>
            </div>
          </div>

          {/* Read more / Read less: mobile only */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              className="text-atinol-teal font-semibold text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-atinol-teal/30 rounded px-1 py-2"
              aria-expanded={expanded}
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
