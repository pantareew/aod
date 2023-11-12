/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-proj":
          "linear-gradient(180deg, #010D4C 0%, rgba(22, 32, 57, 0.00) 0.01%, #162039 100%)",
      },
      colors: {
        primary: "#f35162",
        secondary: "#f44730",
        gray: "#67687A",
        "gray-900": "#171717",
        "white-mkt": "#EDEDED",
        upToDate: "#242424",
        "gray-800": "#67687A",
        "gray-100": "#FCFAF3",
      },
      fontFamily: {
        kumbh: ["Kumbh-Sans", "sans-serif"],
        epilogue: ["Epilogue", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugin: [],
};
