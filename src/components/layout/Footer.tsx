import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SITE, NAV_LINKS } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-atinol-dark text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo variant="light" />
            <p className="mt-2 text-sm text-slate-400">{SITE.tagline}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-2 inline-block text-atinol-teal-light hover:underline"
            >
              {SITE.email}
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-atinol-teal-light transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-400 hover:text-atinol-teal-light transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Connect</h3>
            <a
              href={SITE.linkedInCompany}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-atinol-teal-light transition-colors inline-flex items-center gap-2"
            >
              LinkedIn
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-700 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
