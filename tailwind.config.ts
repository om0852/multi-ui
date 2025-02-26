import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  extend: {
    keyframes: {
      'gradient-x': {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
      }
    },
    animation: {
      'gradient-x': 'gradient-x 3s linear infinite',
    },
    perspective: {
      '1000px': '1000px',
    },
    rotate: {
      'y-60': 'rotateY(60deg)',
    }
  },
} satisfies Config;
