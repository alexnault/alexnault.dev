import React from "react";

const css = `
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/Inter-Regular.woff2") format("woff2");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url("/fonts/Inter-Bold.woff2") format("woff2");
  }`;

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="interRegular"
      rel="preload"
      as="font"
      type={`font/woff2`}
      crossOrigin="anonymous"
      href={"/fonts/Inter-Regular.woff2"}
    />,
    <link
      key="interBold"
      rel="preload"
      as="font"
      type={`font/woff2`}
      crossOrigin="anonymous"
      href={"/fonts/Inter-Bold.woff2"}
    />,
    <style key="css" dangerouslySetInnerHTML={{ __html: css }} />,
  ]);
};
