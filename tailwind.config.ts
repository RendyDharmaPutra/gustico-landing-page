import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2A8B39",
        background: "#fff",
        primaryText: "#2A2A2A",
        secondaryText: "#4A4A4A",
        TertiaryText: "#7A7A7A ",
      },
      fontFamily: {
        sans: [
          "Nunito Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
