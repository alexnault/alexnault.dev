import React from "react";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Typography from "@material-ui/core/Typography";

import typography from "../styles/typography.module.css";
import style from "../styles/postPreview.module.css";
import { Paper } from "@material-ui/core";

type Props = {
  title: string;
  date: string;
  path: string;
  coverImage: any;
  excerpt: string;
};

const PostPreview = ({ title, date, path, coverImage, excerpt }: Props) => {
  const backgroundFluidImageStack = [
    // "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.8) 100%)",
    coverImage.childImageSharp.fluid,
  ];

  return (
    // <Paper>
    <Link to={path} className={style.postPreview}>
      <BackgroundImage
        fluid={backgroundFluidImageStack}
        backgroundColor={`#040e18`}
        className={style.backgroundImage}
      >
        {/* <span className={style.date}>{date}</span> */}

        {/* <span className={style.date}>{excerpt}</span> */}
      </BackgroundImage>
      <div className={style.content}>
        <Typography variant="h5" component="h3" gutterBottom>
          {title}
        </Typography>
        {/* <h3 className={`${typography.h4} ${style.title}`}>{title}</h3> */}
        {/* <span className={style.date}>
          10 min read
        </span> */}
        {/* <Typography variant="body2" color="textSecondary">
          {excerpt}
        </Typography> */}
        <Typography variant="body1" color="textSecondary">
          {excerpt}
        </Typography>
        {/* <span className={style.date2}>{excerpt}</span> */}
      </div>
    </Link>
    // </Paper>
  );
};

export default PostPreview;
