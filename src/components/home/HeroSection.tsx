"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site-config";

const SLIDES = [
  {
    src: "/images/hero-1.jpg",
    alt: "Cybersecurity professional at work",
  },
  {
    src: "/images/hero-2.jpg",
    alt: "Secure network and cloud infrastructure",
  },
  {
    src: "/images/hero-3.jpg",
    alt: "Team collaboration on security strategy",
  },
];

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[420px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero z-10" />
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove(
                  "hidden"
                );
              }}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br from-atinol-blue/90 via-atinol-teal/70 to-atinol-dark hidden`}
              aria-hidden
            />
          </div>
        ))}
        {/* Fallback when images missing */}
        <div className="absolute inset-0 bg-gradient-to-br from-atinol-blue via-atinol-teal/80 to-atinol-dark" />
      </div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 max-w-3xl">
          {SITE.tagline}
        </h1>
        <p className="text-slate-200 text-lg md:text-xl mb-8 max-w-2xl">
          Top-notch expertise and customized solutions for your cybersecurity
          needs.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/book" variant="primary" className="!text-white border-0">
            Get Started
          </Button>
          <Button href="/#contact" variant="outline" className="!border-white !text-white hover:!bg-white/10">
            Contact Us
          </Button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
