/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aleg: `'DM Serif Display', serif`,
        roboto: `'Roboto', sans-serif`,
      },
    },
  },
  plugins: [],
};
