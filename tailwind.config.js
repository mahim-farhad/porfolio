import { fontFamily } from "tailwindcss/defaultTheme";

import {
  white, gray, black, blue,
  green, amber, red
} from "tailwindcss/colors";

const config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./styles/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      sm: "40rem",
      md: "48rem",
      lg: "64rem",
      xl: "80rem",
      "2xl": "97.5rem"
    },
    fontFamily: {
      sans: ["var(--font-poppins)", ...fontFamily.sans],
      serif: ["var(--font-montserrat)", ...fontFamily.serif],
      mono: ["var(--font-firaCode)", ...fontFamily.mono]
    },
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      white: white,
      black: black,
      gray: gray,
      foreground: {
        light: "var(--smoky-black)",
        dark: "#F9FAFB",
      },
      surface: {
        light: "#FFFFFF",
        dark: "#1e1e1f",
      },
      background: {
        light: "#F9FAFB",
        dark: "var(--smoky-black)",
      },
      primary: "var(--orange-yellow-crayola)",
      secondary: {
        DEFAULT: gray[900],
      },
      info: {
        DEFAULT: blue[400],
      },
      success: {
        DEFAULT: green[400],
      },
      warning: {
        DEFAULT: amber[400],
      },
      danger: {
        DEFAULT: red[600],
      },
      google: "#3c7ff1",
      facebook: "#0165e1",
      whatsapp: "#25D366",
      twitter: "#000000",
      instagram: "#125688",
      pinterest: "#cc2127",
      dribbble: "#ea4c89",
      behance: "#1769ff",
      fiverr: "#1dbf73",
    },
    extend: {
      minHeight: {
        screen: ["100dvh"],
      },
      keyframes: {
        "gradient": {
          to: { backgroundPosition: "200% center" }
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
      },
      animation: {
        "gradient": "gradient 2s linear infinite",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "accordion-up": "accordion-up 0.2s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
