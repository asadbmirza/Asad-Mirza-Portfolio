import type { Config } from "tailwindcss";

export default {
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#101210",
        light: "#f1f3ec",
        muted: "#a8ada3",
        accent: "#b7e45a",
        "accent-dim": "#9fcb45",
        surface: "#171a17",
        "surface-light": "#1d211c",
      },
      fontFamily: {
        sans: ["Arial Nova", "Aptos", "Helvetica Neue", "Arial", "sans-serif"],
        heading: ["Arial Nova", "Aptos", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        "fluid-xl": "clamp(2.5rem, 5vw, 4.5rem)",
        "fluid-2xl": "clamp(3rem, 7vw, 6rem)",
        "fluid-3xl": "clamp(3.5rem, 9vw, 8rem)",
      },
    },
  },
  plugins: [],
} satisfies Config;
