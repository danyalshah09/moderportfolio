import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


/** @type {import('tailwindcss').Config} */
export default defineConfig({
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss(),
  ],
})