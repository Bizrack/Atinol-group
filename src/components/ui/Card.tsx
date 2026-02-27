import Link from "next/link";
import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "blockquote";
  variant?: "default" | "glass";
};

const cardVariants = {
  default:
    "rounded-xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-1 border-slate-200/80",
  glass:
    "rounded-xl border border-white/25 bg-white/70 backdrop-blur-md shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-white/80",
};

export function Card({
  children,
  className = "",
  as: Component = "div",
  variant = "default",
}: CardProps) {
  return (
    <Component
      className={`p-6 transition-all duration-300 ${cardVariants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
}

type CardTitleProps = {
  children: ReactNode;
  as?: "h2" | "h3";
};

export function CardTitle({ children, as: Tag = "h3" }: CardTitleProps) {
  return (
    <Tag className="text-lg font-semibold text-atinol-dark mb-2">
      {children}
    </Tag>
  );
}

type CardLinkProps = {
  href: string;
  children: ReactNode;
};

export function CardLink({ href, children }: CardLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 text-atinol-teal font-medium hover:underline hover:gap-2 rounded-lg px-2 py-1 -mx-2 -my-1 hover:bg-atinol-teal/10 transition-all duration-200"
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
