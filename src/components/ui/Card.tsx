import Link from "next/link";
import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "blockquote";
};

export function Card({
  children,
  className = "",
  as: Component = "div",
}: CardProps) {
  return (
    <Component
      className={`rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}
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
      className="inline-flex items-center gap-1 text-atinol-teal font-medium hover:underline"
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
