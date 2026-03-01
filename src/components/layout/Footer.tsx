import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SITE, NAV_LINKS, getTelHref } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-slate-900/95 backdrop-blur-xl border-t border-white/10 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex justify-center w-full md:w-auto md:justify-start">
              <Logo variant="light" />
            </div>
            <p className="mt-3 text-sm sm:text-base text-slate-400">{SITE.tagline}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-3 inline-block text-atinol-teal-light hover:underline text-sm sm:text-base break-all py-2 touch-manipulation"
            >
              {SITE.email}
            </a>
            {SITE.phone ? (
              <a
                href={getTelHref(SITE.phone)}
                className="mt-2 inline-block text-atinol-teal-light hover:underline text-sm sm:text-base"
              >
                {SITE.phone}
              </a>
            ) : null}
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-white mb-4 text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-1">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-atinol-teal-light active:text-atinol-teal-light transition-colors duration-200 text-sm sm:text-base py-2.5 min-h-[44px] flex items-center justify-center md:justify-start touch-manipulation"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-400 hover:text-atinol-teal-light active:text-atinol-teal-light transition-colors duration-200 text-sm sm:text-base py-2.5 min-h-[44px] flex items-center justify-center md:justify-start touch-manipulation"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-white mb-4 text-base sm:text-lg">Connect</h3>
            <a
              href={SITE.linkedInCompany}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-atinol-teal-light transition-colors duration-200 inline-flex items-center gap-2 text-sm sm:text-base min-h-[44px] items-center touch-manipulation"
            >
              LinkedIn
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 md:mt-16 pt-6 sm:pt-8 border-t border-slate-700 text-center text-xs sm:text-sm text-slate-500 px-2">
          © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
