import Link from "next/link";
import { SITE } from "@/lib/site-config";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
  variant?: "default" | "light" | "header";
};

export function Logo({
  className = "",
  showTagline = false,
  variant = "default",
}: LogoProps) {
  const isLight = variant === "light" || variant === "header";
  const gradient = isLight
    ? "from-slate-200 via-atinol-teal-light to-atinol-green-light"
    : "from-atinol-blue via-atinol-teal to-atinol-green";
  const groupGradient = isLight
    ? "from-atinol-teal-light to-atinol-green-light"
    : "from-atinol-teal to-atinol-green";

  return (
    <Link href="/" className={`inline-block ${className}`}>
      <span className="block text-xl md:text-2xl font-bold tracking-tight">
        <span
          className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
        >
          THE ATINOL
        </span>{" "}
        <span
          className={`bg-gradient-to-r ${groupGradient} bg-clip-text text-transparent`}
        >
          GROUP
        </span>
      </span>
      {showTagline && (
        <span className="block text-xs md:text-sm text-atinol-muted mt-0.5">
          {SITE.tagline}
        </span>
      )}
    </Link>
  );
}
