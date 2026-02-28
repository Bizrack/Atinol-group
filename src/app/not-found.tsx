import Link from "next/link";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section variant="glass" className="min-h-[70vh] pt-24 flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient-brand mb-4">
          Page not found
        </h1>
        <p className="text-atinol-muted text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-gradient-to-r from-atinol-blue via-atinol-teal to-atinol-green text-white hover:opacity-95 transition-opacity"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold border-2 border-atinol-teal text-atinol-teal hover:bg-atinol-teal/10 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </Section>
  );
}
