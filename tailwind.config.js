/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'mobile': "url('/images/bg-header-mobile.svg')",
        'desktop': "url('/images/bg-header-desktop.svg')",
      })
    },
  },
  plugins: [],
}