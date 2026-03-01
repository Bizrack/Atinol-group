"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Loader } from "@/components/ui/Loader";
import { HERO_FOCUS_ITEMS } from "@/lib/site-config";

const HERO_SLIDES = [
  {
    src: "/Assets/hero-1.jpg",
    alt: "Cybersecurity professional at work",
    headline: "Safeguarding Your Assets in a Cyber World",
    description:
      "Top-notch expertise and customized solutions for your cybersecurity and IT needs. We help you build secure, scalable systems.",
  },
  {
    src: "/Assets/hero-2.jpg",
    alt: "Secure network and cloud infrastructure",
    headline: "Secure by Design",
    description:
      "From Zero Trust to cloud and hybrid architectures—we design and implement infrastructure that scales with your business.",
  },
  {
    src: "/Assets/hero-3.jpg",
    alt: "Team collaboration on security strategy",
    headline: "Strategy Meets Execution",
    description:
      "Work directly with experienced leadership. Practical guidance, clear communication, and solutions designed to scale.",
  },
  {
    src: "/Assets/hero-4.jpg",
    alt: "Protecting your assets in a cyber world",
    headline: "Protecting What Matters",
    description:
      "Identify risks, close vulnerabilities, and respond to incidents with a team that puts your security first.",
  },
  {
    src: "/Assets/hero-5.jpg",
    alt: "Building secure digital infrastructure",
    headline: "Proactive Monitoring & Management",
    description:
      "Stay ahead of threats with ongoing visibility and expert management. Security as a process, not a one-time project.",
  },
  {
    src: "/Assets/hero-6.jpg",
    alt: "Expert security and IT consulting",
    headline: "Expert IT & Cybersecurity Consulting",
    description:
      "Strategic guidance, risk assessments, incident response, and more. Tailored to your organization's needs.",
  },
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
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-700 ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
      style={{ background: failed ? fallbackGradient : undefined }}
    >
      {!failed && (
        <>
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-atinol-dark/80 z-[1]">
              <Loader size="lg" variant="light" />
            </div>
          )}
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
          />
        </>
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
    <section className="relative min-h-screen h-screen w-full flex max-md:items-start md:items-center justify-center overflow-hidden">
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

      {/* Content: mobile = changing text only; desktop = two columns (changing text + Focus Areas) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-24 md:pt-16 pb-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 sm:gap-10 lg:gap-16">
        {/* Left: badge, headline, description, CTA — shown on all screens */}
        <div className="flex flex-col flex-1 max-w-2xl min-w-0">
          <div
            className="inline-flex flex-wrap items-center rounded-full border border-atinol-teal/60 bg-black/30 backdrop-blur-sm px-3 py-1.5 text-xs sm:text-sm text-white mb-3 sm:mb-6 opacity-0 [animation-fill-mode:forwards]"
            style={{
              animation: "fade-in-up 0.6s ease-out forwards, breathe 4s ease-in-out 0.6s infinite",
            }}
          >
            Cybersecurity & IT Consulting • T.A.G. Corp
          </div>
          <div
            key={index}
            className="animate-fade-in [animation-duration:0.5s] [animation-fill-mode:both] min-w-0 mt-4 md:mt-0"
          >
            <h1 className="text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 sm:mb-5 break-words">
              {HERO_SLIDES[index].headline}
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mb-5 sm:mb-8 leading-relaxed break-words">
              {HERO_SLIDES[index].description}
            </p>
          </div>
          <div
            className="flex flex-wrap gap-3 sm:gap-4 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-duration:0.6s] mt-16 sm:mt-0"
            style={{ animationDelay: "280ms" }}
          >
            <Button
              href="/book"
              variant="outline"
              className="text-sm sm:text-base md:text-lg min-h-[48px] px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl border-2 border-white/60 text-white bg-white/5 backdrop-blur-sm hover:bg-white/15 w-full sm:w-auto"
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Focus Areas: hidden on mobile; right column on desktop */}
        <div className="hidden lg:block flex-shrink-0 w-full max-w-md min-w-0">
          <div
            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-duration:0.6s]"
            style={{ animationDelay: "200ms" }}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="flex h-8 w-8 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-atinol-teal/90 text-white font-bold text-sm sm:text-lg shadow-lg animate-breathe" aria-hidden>
                {HERO_FOCUS_ITEMS.length}
              </span>
              <h2 className="text-base sm:text-xl font-semibold text-white">Our Focus Areas</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 sm:ml-14">Building secure digital infrastructure</p>
          </div>
          <div className="space-y-2 sm:space-y-3">
            {HERO_FOCUS_ITEMS.map((item, i) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-3 sm:p-4 hover:bg-white/15 hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-duration:0.5s] active:scale-[0.99] touch-manipulation"
                style={{ animationDelay: `${360 + i * 70}ms` }}
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
            className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-atinol-teal-light font-medium hover:underline text-sm min-h-[44px] items-center touch-manipulation"
          >
            View all services
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      {/* Carousel dots - small on mobile, standard from sm up */}
      <div
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-duration:0.6s]"
        style={{ animationDelay: "500ms" }}
      >
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all duration-300 touch-manipulation flex items-center justify-center ${
              i === index
                ? "h-1.5 w-5 sm:h-2 sm:w-8 bg-white animate-breathe"
                : "h-1.5 w-1.5 sm:h-2 sm:w-2 bg-white/50 hover:bg-white/70 active:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
