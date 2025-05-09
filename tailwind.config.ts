import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        md: "0.875rem"
      },
      screens: {
        md: "968px"

      },
      colors: {
        primary: {
          brightRed: 'hsl(12, 88%, 59%)',
          darkBlue: 'hsl(228, 39%, 23%)',
        },
        neutral: {
          darkGrayishBlue: 'hsl(227, 12%, 61%)',
          veryDarkBlue: 'hsl(233, 12%, 13%)',
          veryPaleRed: 'hsl(13, 100%, 96%)',
          veryLightGray: 'hsl(0, 0%, 98%)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
