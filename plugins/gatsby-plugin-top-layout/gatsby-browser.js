import React from "react";
import "fontsource-inter/400.css";
import "fontsource-inter/700.css";

import TopLayout from "./TopLayout";

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};
