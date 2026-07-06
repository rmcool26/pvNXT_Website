import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pvnxt: "#069fb1",
        "pvnxt-dark": "#047a88",
        "pvnxt-deep": "#113f4a",
        "pvnxt-tint": "#e6f7f9",
        "pvnxt-soft": "#baf0f5",
        ink: "#0f1720",
        muted: "#5b6b73",
        line: "#dbe8ea",
        white: "#ffffff",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
