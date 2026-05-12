import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1B2E4B",
        emerald: "#2E8B57",
        "light-emerald": "#3AAD6E",
        teal: "#5BA8A0",
        "light-grey-bg": "#F7F9FC",
        "soft-border": "#E2E8F0"
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #1B2E4B 0%, #214E5C 55%, #2E8B57 100%)"
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(15, 23, 42, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
