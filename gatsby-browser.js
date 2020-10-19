const React = require("react");

const { ThemeProvider } = require("./src/components/themeContext");

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
