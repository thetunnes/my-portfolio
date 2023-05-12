/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      keyframes: {
        shine: {
          "0%": {
            backgroundPosition: 0,
          },
          "60%": {
            backgroundPosition: "180px",
          },
          "100%": {
            backgroundPosition: "240px",
          },
        },
        pipe: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1
          }
        }
      },
      animation: {
        textColor: "shine 1.5s linear",
        pipeAnimate: "pipe 0.5s linear infinite"
      },
    },
  },
  plugins: [],
};
