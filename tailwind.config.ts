import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070B14",
          900: "#090D18",
          800: "#0B1020",
        },
        accent: {
          blue: "#2563EB",
          cyan: "#06B6D4",
        },
        ink: "#F8FAFC",
        muted: "#94A3B8",
        line: "rgba(148,163,184,0.14)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        eyebrow: "0.28em",
      },
      animation: {
        "pulse-node": "pulseNode 6s ease-in-out infinite",
        "scroll-hint": "scrollHint 2.2s ease-in-out infinite",
      },
      keyframes: {
        pulseNode: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.25)" },
        },
        scrollHint: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
