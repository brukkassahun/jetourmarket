import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Light palette — matches JetourKits.com aesthetic
        asphalt: {
          DEFAULT: "#FAF9F6",   // cream — main background
          light: "#F2F1ED",     // slightly darker cream for alternating sections
          card: "#FFFFFF",      // white card backgrounds
          border: "#E5E4E0",    // light border
        },
        steel: {
          DEFAULT: "#6B7280",   // gray-500 — mid-tone text
          light: "#4B5563",     // gray-600
          muted: "#9CA3AF",     // gray-400 — placeholder / muted
        },
        silver: {
          DEFAULT: "#4B5563",   // gray-600 — secondary text
          light: "#374151",     // gray-700
          bright: "#0A0A0A",    // ink — primary text
        },
        electric: {
          DEFAULT: "#0E7A3D",   // accent green — CTA / links
          strong: "#0A6630",    // darker green for hover
          dim: "#D1E7D8",       // light green tint backgrounds
          glow: "#16A34A",      // brighter green for badges
        },
        signal: {
          DEFAULT: "#16A34A",   // green for "available" status
          strong: "#15803D",
          dim: "#DCFCE7",
        },
        flare: {
          DEFAULT: "#F59E0B",   // amber for "reserved"
          strong: "#D97706",
        },
        danger: "#EF4444",
        paper: "#FAF9F6",
        ink: "#0A0A0A",
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
