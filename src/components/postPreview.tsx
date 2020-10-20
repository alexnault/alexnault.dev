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
    <Paper className={style.postPreview}>
      <Link to={path}>
        <BackgroundImage
          fluid={backgroundFluidImageStack}
          backgroundColor={`#040e18`}
          className={style.backgroundImage}
        ></BackgroundImage>
        <Container className={style.content}>
          <Typography
            variant="h5"
            component="h3"
            color="textPrimary"
            gutterBottom
          >
            {title}
          </Typography>
          {/* <span className={style.date}>
            10 min read
          </span> */}
          <Typography variant="body2" color="textSecondary">
            {excerpt}
          </Typography>
        </Container>
      </Link>
    </Paper>
  );
};

export default PostPreview;
