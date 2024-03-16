/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5358B6",
        secondary: "#1F2937",
        muted: "#4a4b4c",
      },
    },
  },
  plugins: [],
};
