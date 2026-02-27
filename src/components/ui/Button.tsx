import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "glass";

const variantStyles: Record<
  ButtonVariant,
  string
> = {
  primary:
    "bg-gradient-to-r from-atinol-blue via-atinol-teal to-atinol-green text-white hover:opacity-95 shadow-lg shadow-atinol-teal/25 hover:scale-105 active:scale-100",
  secondary:
    "bg-atinol-dark text-white hover:bg-atinol-dark-muted hover:scale-105 active:scale-100",
  outline:
    "border-2 border-atinol-teal text-atinol-teal hover:bg-atinol-teal/10 hover:scale-105 active:scale-100",
  ghost:
    "text-atinol-teal hover:bg-atinol-teal/10 hover:scale-105 active:scale-100",
  glass:
    "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 hover:scale-105 active:scale-100",
};

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-atinol-teal focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100 " +
    variantStyles[variant];

  if (href) {
    return (
      <Link href={href} className={`${base} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${className}`}
    >
      {children}
    </button>
  );
}
