/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        body: "#16252B",
        primary: "#0C181C",
        active: "#242728",
        red: "#FF5F57",
        yellow: "#FEBC2E",
        green: "#28C840"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-to-t": "linear-gradient(272deg, rgba(12, 24, 28, 0.00) 0%, #386F82 100%)",
        "gradient-to-b": "linear-gradient(247deg, #29345B 1.6%, #3E43C2 100.36%);"
      },
      height: {
        'dashboard': 'calc(100vh - 3.8125rem)'
      },
      fontSize: {
        "sm": "0.75rem", // 12px
        "ssm": "0.875rem" // 14px
      }
    },
  },
  plugins: [],
};
