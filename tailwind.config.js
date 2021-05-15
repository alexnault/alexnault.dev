const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "var(--color-black)",
      white: "var(--color-white)",
      gray: {
        50: "var(--color-gray-50)",
        100: "var(--color-gray-100)",
        200: "var(--color-gray-200)",
        300: "var(--color-gray-300)",
        400: "var(--color-gray-400)",
        500: "var(--color-gray-500)",
        600: "var(--color-gray-600)",
        700: "var(--color-gray-700)",
        800: "var(--color-gray-800)",
        900: "var(--color-gray-900)",
      },
      blue: colors.blue,
      cyan: colors.cyan,
      green: colors.green,
      pink: colors.pink,
      purple: colors.purple,
      yellow: colors.yellow,
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
      },
      boxShadow: {
        border: "0 0 0 1px var(--color-gray-200)",
        "border-black": "0 0 0 1px var(--color-black)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.blue.600"),
              "&:hover": {
                color: theme("colors.blue.700"),
              },
              code: { color: theme("colors.blue.600") },
            },
            code: { color: theme("colors.pink.600") },
            "blockquote p": { color: theme("colors.gray.500") },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
        dark: {
          css: {
            code: { color: theme("colors.pink.500") },
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: theme("colors.blue.600"),
              },
              code: { color: theme("colors.blue.500") },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
