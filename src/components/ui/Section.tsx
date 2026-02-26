import { type ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "dark" | "highlight";
};

const variantStyles = {
  default: "bg-slate-50 text-atinol-dark",
  dark: "bg-atinol-dark text-slate-100",
  highlight:
    "bg-gradient-to-br from-atinol-blue/10 via-atinol-teal/10 to-atinol-green/10 text-atinol-dark",
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
      className={`py-16 md:py-20 px-4 sm:px-6 lg:px-8 ${variantStyles[variant]} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold text-gradient-brand mb-2">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-atinol-muted text-lg max-w-2xl mx-auto">
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
