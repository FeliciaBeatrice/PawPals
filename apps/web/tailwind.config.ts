import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: {
          500: "#FCCEE8",
          700: "#FDA5D5",
          900: "#861043",
        },
        secondary: {
          500: "#BEDBFF",
          700: "#8EC5FF",
          900: "#1C398E",
        }, // TODO: delete the below colors after refactoring frontend pages
        pastelPink: '#FADADD',
        pastelPurple: '#E0BBE4',
        pastelBlue: '#C1C8E4',
        pastelPinkHover: '#F8BBD0',
        pastelBlueHover: '#B3CDE0',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        montserrat : ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
