import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-gray": "rgb(255,255,255)",
        "gradient": "linear-gradient(333deg, rgba(255,255,255,1) 23%, rgba(82,82,82,1) 81%);",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
export default config;
