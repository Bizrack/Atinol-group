"use client";

import { Toaster as HotToaster } from "react-hot-toast";

export function Toaster() {
  return (
    <HotToaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: {
          background: "rgba(30, 58, 95, 0.95)",
          color: "#f8fafc",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
        },
        success: {
          iconTheme: { primary: "#10b981", secondary: "#f8fafc" },
        },
        error: {
          iconTheme: { primary: "#ef4444", secondary: "#f8fafc" },
        },
        loading: {
          iconTheme: { primary: "#0d9488", secondary: "#f8fafc" },
        },
      }}
    />
  );
}
