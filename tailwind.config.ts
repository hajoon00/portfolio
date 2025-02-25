import type { Config } from "tailwindcss";

export default {
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
        hajoon: 
        {
          200: `#9CB3C9`,
          500: '#264E73',
          700: `#0A2743`,
          900: '#001223',
        },
      },
      fontFamily: {
        freesentation: ['freesentation', 'sans-serif'], // Add your variable font here
      },
      maxHeight: {
        '25': '25%',
        '50': '50%',
        '90': '90%',
      }
    },
  },
  plugins: [],
} satisfies Config;
