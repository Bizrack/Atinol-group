import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
