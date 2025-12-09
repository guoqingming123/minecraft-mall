/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#00AA00',
        accent: '#FFAA00',
      },
      fontFamily: {
        minecraft: ['Minecraft', 'sans-serif'],
      },
    },
  },
  plugins: [],
}