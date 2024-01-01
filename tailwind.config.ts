import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1b0eff",
        dark: "#394149",
      },
      stroke: {
        primary: "#1b0eff",
        dark: "#394149",
      },
      backgroundColor: {
        primary: "#1b0eff",
        secondary: "#EEFEEC",
        dark: "#394149",
      },
    },
  },
  plugins: [],
};
export default config;
