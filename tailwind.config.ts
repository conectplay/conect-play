import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07080B",
          900: "#0B0D12",
          800: "#11141B",
          700: "#181C26",
          600: "#232838",
        },
        gold: {
          50: "#FBF4E2",
          100: "#F6E7C1",
          200: "#EFD188",
          300: "#E6BB55",
          400: "#D9A52E",
          500: "#C8911D",
          600: "#A8740F",
          glow: "#F3C969",
        },
        live: {
          DEFAULT: "#E8472E",
          dark: "#B7341F",
        },
        whats: {
          DEFAULT: "#22C55E",
          dark: "#179347",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(243,201,105,0.16), transparent 60%)",
        "grid-fade":
          "linear-gradient(to bottom, rgba(7,8,11,0) 0%, #07080B 92%)",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(217,165,46,0.35), 0 8px 30px -8px rgba(217,165,46,0.35)",
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -24px rgba(0,0,0,0.6)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-live": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.45" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fade-in 0.8s ease forwards",
        "pulse-live": "pulse-live 1.8s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
