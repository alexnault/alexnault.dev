import React from "react";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Typography, Paper, Container } from "@material-ui/core";

import style from "../styles/postPreview.module.css";

type Props = {
  title: string;
  date: string;
  path: string;
  coverImage: any;
  excerpt: string;
};

const PostPreview = ({ title, date, path, coverImage, excerpt }: Props) => {
  const backgroundFluidImageStack = [coverImage.childImageSharp.fluid];

  return (
    <Paper component={Link} to={path} className={style.postPreview}>
      <BackgroundImage
        fluid={backgroundFluidImageStack}
        backgroundColor={`#040e18`}
        className={style.backgroundImage}
      />
      <Container className={style.content}>
        <Typography
          variant="h5"
          component="h3"
          color="textPrimary"
          gutterBottom
        >
          {title}
        </Typography>
        {/* <Typography variant="overline" gutterBottom>
          10 min read
        </Typography> */}
        <Typography variant="body2" color="textSecondary">
          {excerpt}
        </Typography>
      </Container>
    </Paper>
  );
};

export default PostPreview;
