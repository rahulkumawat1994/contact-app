/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ctBlack: {
          50: "#e5e8eb",
          100: "#8a939b",
          200: "#4c505c",
          300: "#353840",
          400: "#262B2F",
          500: "#22262c",
          600: "#232528",
          700: "#14171b",
          800: "#151b22",
          850: "#04111d",
          900: "#000000",
        },
        ctGray: {
          100: "#F7FFF7",
          150: "#E1E1E1",
          200: "#E6EBF6",
          300: "#DEDEDE",
          400: "#CACACA",
          500: "#B6BCCB",
          600: "#A5A5A5",
          700: "#81A0BD",
          800: "#314355",
        },
        ctBlue: {
          50: "#f5f9ff",
          100: "#EFF7FF",
          200: "#8699FF",
          250: "#4CBCFF",
          300: "#15b2e5",
          400: "#42a0ff",
          500: "#2081e2",
          600: "#1868b7",
          650: "#09223F",
          700: "#082649",
          800: "#02234E",
          850: "#02162e",
          900: "#011936",
        },
        ctGreen: {
          300: "#6EDCDA",
          400: "#90ct87",
          500: "#34c77b",
          550: "#5AB488",
          600: "#17AD6C",
          650: "#20ae53",
          700: "#379D2E",
          900: "#1C3A58",
        },
        ctRed: {
          200: "#DB8F8F",
          500: "#FF715B",
          600: "#FF5C40",
        },
        ctYellow: {
          500: "#f6c000",
          600: "#FctE31",
        },
        ctBrown: {
          500: "#FF8831",
          800: "#6E5462",
        },
        ctWhite: {
          300: "#FBFDFF",
          400: "#fafafa",
        },
      },
    },
  },
  plugins: [],
};
