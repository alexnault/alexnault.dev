import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { toKebabCase } from "../helpers";

import style from "../styles/post.module.css";

type Props = {
  title: string;
  date: string;
  path: string;
  coverImage: any;
  author: string;
  excerpt: string;
  tags: string[];
};

const Post = ({
  title,
  date,
  path,
  coverImage,
  author,
  excerpt,
  tags,
}: Props) => {
  return (
    <div className={style.post}>
      <div className={style.postContent}>
        <h1 className={style.title}>
          <Link to={path}>{title}</Link>
        </h1>
        <div className={style.meta}>
          {date} {author && <>— Written by {author}</>}
          {tags ? (
            <div className={style.tags}>
              {tags.map((tag) => (
                <Link to={`/tag/${toKebabCase(tag)}/`} key={toKebabCase(tag)}>
                  <span className={style.tag}>#{tag}</span>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        {coverImage && (
          <Link to={path}>
            <Img
              fluid={coverImage.childImageSharp.fluid}
              className={style.coverImage}
            />
          </Link>
        )}
        <p>{excerpt}</p>
        <Link to={path} className={style.readMore}>
          Read more →
        </Link>
      </div>
    </div>
  );
};

export default Post;
