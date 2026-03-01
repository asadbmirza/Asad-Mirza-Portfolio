import type { Config } from "tailwindcss";

export default {
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a",
        light: "#e5e5e5",
        muted: "#a3a3a3",
        accent: "#A78BFA",
        "accent-dim": "#8B5CF6",
        surface: "#141414",
        "surface-light": "#1a1a1a",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "system-ui", "sans-serif"],
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
