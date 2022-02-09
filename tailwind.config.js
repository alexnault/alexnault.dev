const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

// https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo
function cssVariableOpacity(variable) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variable}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${variable}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(${variable}))`;
  };
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: cssVariableOpacity("--color-black"),
        white: cssVariableOpacity("--color-white"),
        gray: {
          50: cssVariableOpacity("--color-gray-50"),
          100: cssVariableOpacity("--color-gray-100"),
          200: cssVariableOpacity("--color-gray-200"),
          300: cssVariableOpacity("--color-gray-300"),
          400: cssVariableOpacity("--color-gray-400"),
          500: cssVariableOpacity("--color-gray-500"),
          600: cssVariableOpacity("--color-gray-600"),
          700: cssVariableOpacity("--color-gray-700"),
          800: cssVariableOpacity("--color-gray-800"),
          900: cssVariableOpacity("--color-gray-900"),
        },
      },
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
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
  plugins: [require("@tailwindcss/typography")],
};
