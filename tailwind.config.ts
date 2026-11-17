import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#ffffff",
        ice: {
          DEFAULT: "#f4f7fb",
          50: "#fafcff",
          100: "#f4f7fb",
          200: "#e7eef7",
        },
        ink: {
          DEFAULT: "#0f172a",
          50: "#f1f5f9",
          100: "#e2e8f0",
          200: "#cbd5e1",
          300: "#94a3b8",
          400: "#64748b",
          500: "#475569",
          600: "#334155",
          700: "#1e293b",
          800: "#0f172a",
          900: "#0b1324",
        },
        navy: {
          DEFAULT: "#0b2545",
          50: "#e8eef7",
          100: "#c7d4e9",
          200: "#8ba3c9",
          300: "#4f6fa5",
          400: "#1f3f78",
          500: "#0b2545",
          600: "#081b34",
          700: "#061527",
        },
        royal: {
          DEFAULT: "#1e40af",
          300: "#60a5fa",
          400: "#3b82f6",
          500: "#1e40af",
          600: "#1e3a8a",
        },
        line: "#e2e8f0",
      },
      fontFamily: {
        // Eine Schriftart für die ganze Site: Inter.
        sans: [
          "var(--font-sans)",
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        serif: [
          "var(--font-sans)",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-sans)",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
      letterSpacing: {
        kicker: "0.18em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,37,69,0.04), 0 14px 36px -16px rgba(11,37,69,0.14)",
        glow: "0 30px 80px -30px rgba(30,64,175,0.35)",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translate3d(0,16px,0)" },
          to: { opacity: "1", transform: "translate3d(0,0,0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp .7s cubic-bezier(.22,1,.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
