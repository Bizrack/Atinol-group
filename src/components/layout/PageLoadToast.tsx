"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

const PAGE_NAMES: Record<string, string> = {
  "/about": "About",
  "/book": "Book Consultation",
  "/contact": "Contact",
  "/services": "Services",
  "/privacy": "Privacy",
};

function getPageName(pathname: string): string {
  return PAGE_NAMES[pathname] ?? (pathname.slice(1) || "Page");
}

const WELCOME_KEY = "tag-welcome-shown";

export function PageLoadToast() {
  const pathname = usePathname();

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const isHome = pathname === "/";
        if (isHome && typeof window !== "undefined") {
          try {
            if (window.sessionStorage.getItem(WELCOME_KEY)) return;
          } catch {
            // ignore
          }
        }
        const message = isHome
          ? "Welcome to TAG consulting. We're happy you're here."
          : `TAG: ${getPageName(pathname)}`;
        toast.success(message, { duration: 3500 });
        if (isHome && typeof window !== "undefined") {
          try {
            window.sessionStorage.setItem(WELCOME_KEY, "1");
          } catch {
            // ignore
          }
        }
      });
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
