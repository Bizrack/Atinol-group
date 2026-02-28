"use client";

type LoaderProps = {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "light";
  className?: string;
};

const sizeClasses = {
  sm: "w-6 h-6 border-2",
  md: "w-10 h-10 border-2",
  lg: "w-14 h-14 border-[3px]",
};

const variantClasses = {
  default: "border-atinol-teal border-t-transparent",
  light: "border-white/90 border-t-transparent",
};

export function Loader({ size = "md", variant = "default", className = "" }: LoaderProps) {
  return (
    <div
      className={`rounded-full animate-spin ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      role="status"
      aria-label="Loading"
    />
  );
}

export function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <Loader size="lg" />
      <p className="text-atinol-muted text-sm">Loading…</p>
    </div>
  );
}

export function SectionLoader() {
  return (
    <div className="py-16 flex justify-center">
      <Loader size="md" />
    </div>
  );
}
