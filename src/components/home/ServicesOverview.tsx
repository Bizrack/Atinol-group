"use client";

import { useState, useCallback } from "react";
import { Section } from "@/components/ui/Section";
import { Card, CardTitle, CardLink } from "@/components/ui/Card";
import { SERVICES } from "@/lib/site-config";

export function ServicesOverview() {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex(Math.max(0, Math.min(i, SERVICES.length - 1)));
  }, []);

  const goNext = useCallback(() => goTo(index + 1), [index, goTo]);
  const goPrev = useCallback(() => goTo(index - 1), [index, goTo]);

  const minSwipeDistance = 50;
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);
  const onTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);
  const onTouchEnd = useCallback(() => {
    if (touchStart == null || touchEnd == null) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) goNext();
    else if (distance < -minSwipeDistance) goPrev();
  }, [touchStart, touchEnd, goNext, goPrev]);

  return (
    <Section
      id="services"
      title="Services Overview"
      subtitle="Comprehensive cybersecurity and IT solutions tailored to your needs."
      variant="glass"
    >
      {/* Mobile: one-card carousel with swipe */}
      <div
        className="sm:hidden relative overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="w-full flex-shrink-0 px-1"
            >
              <Card as="article" variant="glass" className="p-6 h-full">
                <CardTitle as="h3">{service.name}</CardTitle>
                <p className="text-atinol-muted text-sm mb-6 leading-relaxed">
                  {service.shortDesc}
                </p>
                <CardLink href={`/services#${service.slug}`}>
                  Learn More
                </CardLink>
              </Card>
            </div>
          ))}
        </div>
        {/* Prev/Next buttons */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            type="button"
            onClick={goPrev}
            disabled={index === 0}
            aria-label="Previous service"
            className="h-10 w-10 rounded-full border-2 border-atinol-teal text-atinol-teal disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center touch-manipulation"
          >
            <span className="sr-only">Previous</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex gap-1.5" aria-hidden>
            {SERVICES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to service ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-200 ${
                  i === index ? "w-6 bg-atinol-teal" : "w-2 bg-atinol-muted/50"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goNext}
            disabled={index === SERVICES.length - 1}
            aria-label="Next service"
            className="h-10 w-10 rounded-full border-2 border-atinol-teal text-atinol-teal disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center touch-manipulation"
          >
            <span className="sr-only">Next</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop: grid */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SERVICES.map((service, i) => (
          <div
            key={service.id}
            className="animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-duration:0.5s]"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <Card as="article" variant="glass" className="p-6 sm:p-8 h-full">
              <CardTitle as="h3">{service.name}</CardTitle>
              <p className="text-atinol-muted text-sm sm:text-base mb-6 leading-relaxed">
                {service.shortDesc}
              </p>
              <CardLink href={`/services#${service.slug}`}>
                Learn More
              </CardLink>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
