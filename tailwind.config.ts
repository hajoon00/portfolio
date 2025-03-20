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
        hajoon: {
          100: `#C5D4E2`, // Higher brightness, lower saturation  
          200: `#9CB3C9`, // Existing  
          300: `#7A99B5`,  
          400: `#4E7894`,  
          500: `#264E73`, // Existing  
          600: `#183A5A`,  
          700: `#0A2743`, // Existing  
          800: `#051A2E`,  
          900: `#001223`, // Existing  
        },
        alt: {
          100: `#F5F5F5`,
          200: `#E0E0E0`,
          300: `#C0C0C0`,
          400: `#A0A0A0`,
          500: `#808080`,
          600: `#606060`,
          700: `#404040`,
          800: `#202020`,
          900: `#101010`,
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
