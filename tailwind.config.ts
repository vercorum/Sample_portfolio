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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0000FF",
      },

      screens: {
        xxxs: "330px",
        xxs: "380px",
        xs: "480px",
        //   'sm': '640px',
        //   'md': '768px',
        //   'lg': '1024px',
        //   'xl': '1280px',
        //   '2xl': '1536px',**/
      },
    },
  },
  plugins: [],
};
export default config;
