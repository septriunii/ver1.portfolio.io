/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Add a custom list style type
      listStyleType: {
        square: "square",
      },
    },
  },
  plugins: [],
};
