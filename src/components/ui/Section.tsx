import { type ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "dark" | "dark-blue" | "highlight" | "glass" | "glass-dark";
};

const variantStyles = {
  default:
    "bg-white/50 backdrop-blur-md text-atinol-dark border-y border-white/20",
  dark: "bg-slate-900/50 backdrop-blur-xl text-slate-100 border-y border-white/10",
  "dark-blue":
    "bg-atinol-blue/95 backdrop-blur-sm text-slate-100 border-y border-atinol-blue-light/30",
  highlight:
    "bg-white/45 backdrop-blur-md text-atinol-dark border-y border-white/25",
  glass:
    "bg-white/50 backdrop-blur-md text-atinol-dark border-y border-white/20",
  "glass-dark":
    "bg-slate-900/90 backdrop-blur-xl text-slate-100 border-y border-white/10",
};

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${variantStyles[variant]} ${className}`}
    >
      <div className="max-w-6xl mx-auto animate-fade-in-up [animation-duration:0.6s]">
        {(title || subtitle) && (
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            {title && (
              <h2
                className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 ${
                  variant === "dark-blue" || variant === "glass-dark"
                    ? "text-white"
                    : "text-gradient-brand"
                }`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto ${
                  variant === "dark-blue" || variant === "glass-dark"
                    ? "text-slate-300"
                    : "text-atinol-muted"
                }`}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
