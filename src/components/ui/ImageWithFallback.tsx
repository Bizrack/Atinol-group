"use client";

import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  fallbackClassName?: string;
};

export function ImageWithFallback({
  src,
  alt,
  fill,
  className = "",
  sizes,
  fallbackClassName = "bg-gradient-to-br from-atinol-blue/20 via-atinol-teal/15 to-atinol-green/20",
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`absolute inset-0 flex items-center justify-center ${fallbackClassName}`}
        aria-hidden
      >
        <span className="text-atinol-muted text-sm text-center px-4">
          Add <code className="text-xs bg-white/50 px-1 rounded">about.jpg</code> to{" "}
          <code className="text-xs bg-white/50 px-1 rounded">public/assets/</code>
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={fill ? "absolute inset-0 w-full h-full object-cover" : className}
      sizes={sizes}
      onError={() => setFailed(true)}
    />
  );
}
