"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-900/25 backdrop-blur-xl pt-[env(safe-area-inset-top)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 min-h-[52px]">
          <Logo variant="header" />

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg px-3 py-2.5 min-h-[44px] inline-flex items-center text-slate-200 font-medium hover:bg-white/10 hover:text-white hover:scale-105 transition-all duration-300 ease-out"
              >
                {label}
              </Link>
            ))}
            <Button href="/book" variant="glass" className="ml-2 min-h-[44px] !bg-slate-800/80 hover:!bg-slate-700/90 !border-white/25">
              Book Consultation
            </Button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <Button href="/book" variant="glass" className="text-sm min-h-[44px] py-3 px-4 !bg-slate-800/80 hover:!bg-slate-700/90 !border-white/25">
              Book
            </Button>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="p-3 rounded-lg text-white hover:bg-white/10 active:bg-white/15 transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden py-3 pb-5 border-t border-white/10">
            <nav className="flex flex-col gap-0.5">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg py-3.5 px-4 min-h-[48px] flex items-center text-slate-200 font-medium hover:bg-white/10 active:bg-white/15 text-base touch-manipulation"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
