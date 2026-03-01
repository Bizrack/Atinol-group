import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site-config";

const LOGO_SRC = "/Assets/logotag.png";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
  variant?: "default" | "light" | "header";
};

/** TAG logo for The Atinol Group Corp – used in header and footer. */
export function Logo({
  className = "",
  showTagline = false,
  variant = "default",
}: LogoProps) {
  const isHeader = variant === "header";
  const isLight = variant === "light";
  const heightClass = isHeader ? "h-9" : "h-12";
  const widthClass = isHeader ? "w-[100px]" : "w-[140px]";
  const imageAlign = isLight ? "object-center" : "object-left";

  return (
    <Link
      href="/"
      className={`inline-flex flex-col ${isLight ? "items-center" : "items-start"} ${className}`}
      aria-label={`${SITE.name} – Home`}
    >
      <span
        className={`relative block shrink-0 ${heightClass} ${widthClass}`}
      >
        <Image
          src={LOGO_SRC}
          alt={SITE.name}
          fill
          className={`object-contain ${imageAlign}`}
          priority={isHeader}
          sizes={isHeader ? "100px" : "140px"}
        />
      </span>
      {showTagline && (
        <span className="block text-xs md:text-sm text-slate-400 mt-0.5 max-w-[220px]">
          {SITE.tagline}
        </span>
      )}
    </Link>
  );
}
