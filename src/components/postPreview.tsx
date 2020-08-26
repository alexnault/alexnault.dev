import React from "react";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";

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
        <h6>{date}</h6>
        <h4>{title}</h4>
      </BackgroundImage>
    </Link>
  );
};

export default PostPreview;
