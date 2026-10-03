import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* ===== Reference design system ===== */
        /* `forest` token is the Lantern navy */
        forest: {
          DEFAULT: "#082137",
          50: "#EBEDEF",
          100: "#CED3D7",
          200: "#9CA6AF",
          300: "#6B7A87",
          400: "#394D5F",
          500: "#082137",
          600: "#061A2C",
          700: "#051421",
          800: "#030D16",
          900: "#02070B",
        },
        /* `bronze` token is the Lantern gold */
        bronze: {
          DEFAULT: "#CB9222",
          50: "#FBF6ED",
          100: "#F5E9D3",
          200: "#EAD3A7",
          300: "#E0BE7A",
          400: "#D5A84E",
          500: "#CB9222",
          600: "#A2751B",
          700: "#7A5814",
          800: "#513A0E",
          900: "#291D07",
        },
        sage: { DEFAULT: "#A8B7A1", light: "#C5D0C0" },
        /* Primary body text now uses the navy brand color for light sections */
        charcoal: "#082137",
        ivory: "#FBF7EE",
        stone: "#F3EDE0",
        mist: "#E8E2D3",
        /* ===== Legacy tokens (kept for About/Contact until redesigned) ===== */
        ink: {
          DEFAULT: "#0B0B0B",
          50: "#171717",
          100: "#1F1F1F",
          200: "#262626",
          300: "#2D2D2D",
          400: "#3F3F3F",
          500: "#525252",
        },
        /* `copper` legacy alias remapped to Lantern gold */
        copper: {
          DEFAULT: "#CB9222",
          50: "#FBF6ED",
          100: "#F5E9D3",
          200: "#EAD3A7",
          300: "#E0BE7A",
          400: "#D5A84E",
          500: "#CB9222",
          600: "#A2751B",
          700: "#7A5814",
          800: "#513A0E",
          900: "#291D07",
        },
        muted: "#B8B8B8",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 12px -2px rgba(34, 34, 34, 0.06), 0 8px 32px -8px rgba(34, 34, 34, 0.08)",
        "card-hover":
          "0 4px 16px -2px rgba(34, 34, 34, 0.08), 0 16px 48px -12px rgba(34, 34, 34, 0.14)",
        "glow-copper": "0 0 60px -10px rgba(203, 146, 34, 0.5)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
