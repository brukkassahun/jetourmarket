import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Dark automotive palette
        asphalt: {
          DEFAULT: "#0B0F14",
          light: "#121821",
          card: "#161E2A",
          border: "#1E2937",
        },
        steel: {
          DEFAULT: "#334155",
          light: "#475569",
          muted: "#64748B",
        },
        silver: {
          DEFAULT: "#94A3B8",
          light: "#CBD5E1",
          bright: "#E2E8F0",
        },
        electric: {
          DEFAULT: "#3B82F6",
          strong: "#2563EB",
          dim: "#1E3A5F",
          glow: "#60A5FA",
        },
        signal: {
          DEFAULT: "#10B981",
          strong: "#059669",
          dim: "#064E3B",
        },
        flare: {
          DEFAULT: "#F59E0B",
          strong: "#D97706",
        },
        danger: "#EF4444",
        paper: "#F8FAFC",
        ink: "#0B0F14",
      },
      fontFamily: {
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.8s ease both",
        "slide-in": "slide-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-in": {
          from: { opacity: "0", transform: "translateX(-12px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
