"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site-config";

const HERO_IMAGES = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % Math.max(1, HERO_IMAGES.length)),
      5000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero z-10" />
      <div className="absolute inset-0 z-0 bg-atinol-dark bg-gradient-to-br from-atinol-blue/95 via-atinol-dark to-atinol-teal/70">
        {HERO_IMAGES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-700 bg-cover bg-center bg-no-repeat bg-atinol-dark"
            style={{
              opacity: i === index ? 1 : 0,
              backgroundImage: `url(${src})`,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 text-center px-4 py-20 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {SITE.tagline}
        </h1>
        <p className="text-slate-200 text-lg md:text-xl mb-8">
          Top-notch expertise and customized solutions for your cybersecurity
          and IT needs.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/book" variant="primary" className="text-lg px-8 py-3">
            Get Started
          </Button>
          <Button
            href="/#contact"
            variant="outline"
            className="text-lg px-8 py-3 border-white text-white hover:bg-white/10"
          >
            Contact Us
          </Button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === index ? "bg-atinol-teal-light" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
