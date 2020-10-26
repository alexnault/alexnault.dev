import React from "react";

import { ThemeProvider } from "../../src/components/themeContext";

type Props = {
  children: React.ReactNode;
};

// Inspired by https://github.com/mui-org/material-ui/tree/master/examples/gatsby

export default function TopLayout({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
