"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SITE, HERO_FOCUS_ITEMS } from "@/lib/site-config";

const HERO_SLIDES = [
  { src: "/assets/hero-1.jpg", alt: "Cybersecurity professional at work" },
  { src: "/assets/hero-2.jpg", alt: "Secure network and cloud infrastructure" },
  { src: "/assets/hero-3.jpg", alt: "Team collaboration on security strategy" },
  { src: "/assets/hero-4.jpg", alt: "Protecting your assets in a cyber world" },
];

function HeroSlide({
  src,
  alt,
  isActive,
  fallbackGradient,
}: {
  src: string;
  alt: string;
  isActive: boolean;
  fallbackGradient: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-700 ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
      style={{ background: failed ? fallbackGradient : undefined }}
    >
      {!failed && (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

const HERO_FALLBACK_GRADIENT =
  "linear-gradient(135deg, rgba(30,58,95,0.85) 0%, rgba(15,23,42,0.9) 50%, rgba(13,148,136,0.7) 100%)";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % HERO_SLIDES.length),
      5000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0 z-0 bg-atinol-dark bg-gradient-to-br from-atinol-blue/80 via-atinol-dark/90 to-atinol-teal/60">
        {HERO_SLIDES.map((slide, i) => (
          <HeroSlide
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            isActive={i === index}
            fallbackGradient={HERO_FALLBACK_GRADIENT}
          />
        ))}
      </div>
      {/* Lighter overlay so background image is visible */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-atinol-dark/50 via-atinol-dark/40 to-atinol-dark/55"
        aria-hidden
      />

      {/* Content: Blackoak-style two-column layout */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
        {/* Left: badge, headline, paragraph, CTAs */}
        <div className="flex-1 max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-atinol-teal/60 bg-black/30 backdrop-blur-sm px-4 py-1.5 text-sm text-white mb-6">
            Cybersecurity & IT Consulting • T.A.G. Corp
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            {SITE.tagline}
          </h1>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            Top-notch expertise and customized solutions for your cybersecurity
            and IT needs. We help you build secure, scalable systems.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Button
              href="/book"
              variant="primary"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl"
            >
              Get Started
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-white/60 text-white bg-white/5 backdrop-blur-sm hover:bg-white/15"
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Right: Focus Areas (glass cards) */}
        <div className="flex-shrink-0 w-full lg:max-w-md">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-atinol-teal/90 text-white font-bold text-lg shadow-lg">
              {HERO_FOCUS_ITEMS.length}
            </span>
            <div>
              <h2 className="text-xl font-semibold text-white">Our Focus Areas</h2>
              <p className="text-sm text-slate-300">Building secure digital infrastructure</p>
            </div>
          </div>
          <div className="space-y-3">
            {HERO_FOCUS_ITEMS.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-4 hover:bg-white/15 transition-colors"
              >
                <div className="flex gap-4 items-start">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-atinol-teal/30 text-lg">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-300">{item.short}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/services"
            className="mt-4 inline-flex items-center gap-2 text-atinol-teal-light font-medium hover:underline text-sm"
          >
            View all services
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
