import React from "react";
import { useLevel } from "react-headings";
import { Typography, TypographyProps } from "@material-ui/core";

const Heading = (props: TypographyProps) => {
  const { Component } = useLevel();

  // @ts-ignore
  return <Typography {...props} component={Component} />;
};

export default Heading;
