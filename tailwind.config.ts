import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        atinol: {
          blue: "#1e3a5f",
          "blue-light": "#2d5a87",
          teal: "#0d9488",
          "teal-light": "#14b8a6",
          green: "#059669",
          "green-light": "#10b981",
          dark: "#0f172a",
          "dark-muted": "#1e293b",
          warm: "#f59e0b",
          "warm-light": "#fbbf24",
          muted: "#64748b",
          "muted-light": "#94a3b8",
        },
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(90deg, #1e3a5f 0%, #0d9488 50%, #059669 100%)",
        "gradient-hero":
          "linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(30,58,95,0.85) 50%, rgba(13,148,136,0.6) 100%)",
        "gradient-hero-light":
          "linear-gradient(135deg, rgba(15,23,42,0.45) 0%, rgba(30,58,95,0.4) 50%, rgba(13,148,136,0.35) 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.02)", opacity: "0.98" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        breathe: "breathe 4s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
