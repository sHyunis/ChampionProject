import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        korean: ["var(--KoreanMain)"],
        english: ["var(--EnglishMain)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        borderColor: "var(--border)",
      },
    },
  },
  plugins: [],
};
export default config;
