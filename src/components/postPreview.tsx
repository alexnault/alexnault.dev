import React from "react";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import typography from "../styles/typography.module.css";
import style from "../styles/postPreview.module.css";

type Props = {
  title: string;
  date: string;
  path: string;
  coverImage: any;
};

const PostPreview = ({ title, date, path, coverImage }: Props) => {
  const backgroundFluidImageStack = [
    "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.8) 100%)",
    coverImage.childImageSharp.fluid,
  ];

  return (
    <Link to={path} className={style.postPreview}>
      <BackgroundImage
        fluid={backgroundFluidImageStack}
        backgroundColor={`#040e18`}
        className={style.backgroundImage}
      >
        <span className={style.date}>{date}</span>
        <h3 className={`${typography.h4} ${style.title}`}>{title}</h3>
      </BackgroundImage>
    </Link>
  );
};

export default PostPreview;
