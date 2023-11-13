/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        mobile: "url('/images/bg-header-mobile.svg')",
        desktop: "url('/images/bg-header-desktop.svg')",
      }),
      colors: {
        "aqua-haze": {
          50: "#eef6f6",
          100: "#daeded",
          200: "#b5d8da",
          300: "#88bcc0",
          400: "#5f9ba2",
          500: "#457f87",
          600: "#35646c",
          700: "#2e5157",
          800: "#284247",
          900: "#25383c",
          950: "#111e22",
        },
        "black-squeeze": {
          50: "#effafa",
          100: "#d3f3f4",
          200: "#a8e4e7",
          300: "#74cdd4",
          400: "#47aeba",
          500: "#2e909e",
          600: "#22727f",
          700: "#1f5c66",
          800: "#1d4a52",
          900: "#1c3f45",
          950: "#0b2128",
        },
        "breaker-bay": {
          50: "#f4f9f9",
          100: "#d9eeec",
          200: "#b3dcd9",
          300: "#86c2c1",
          400: "#5ba4a4",
          500: "#42898a",
          600: "#336c6e",
          700: "#2c5759",
          800: "#274648",
          900: "#243b3d",
          950: "#102223",
        },
      },
    },
  },
  plugins: [],
};
