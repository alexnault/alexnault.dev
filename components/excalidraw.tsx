import React from "react";
import { makeStyles } from "@material-ui/core";

type Props = {
  svg: React.ReactNode;
};

const useStyle = makeStyles((theme) => ({
  svgWrapper: {
    "& path": {
      stroke: theme.palette.text.primary,
    },
  },
}));

const About = ({ svg }: Props) => {
  const classes = useStyle();

  return <div className={classes.svgWrapper}>{svg}</div>;
};

export default About;
