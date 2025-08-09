import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          500: '#2563eb',
          600: '#1d4ed8',
        },
        'dark-bg': '#111827',
        'light-bg': '#1f2937',
        'card-bg': '#374151',
      },
    },
  },
  plugins: [],
};
export default config;