import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Navigation from "./navigation";
import { toKebabCase } from "../helpers";

import style from "../styles/postPreviews.module.css";

import PostPreview from "../components/postPreview";

type Props = {
  posts: { [key: string]: any }[];
};

const PostPreviews = ({ posts }: Props) => {
  return (
    <div className={style.postPreviews}>
      {posts.map(({ node }) => {
        const {
          id,
          frontmatter: { title, date, path, coverImage },
        } = node;

        return (
          <PostPreview
            key={id}
            title={title}
            date={date}
            path={path}
            coverImage={coverImage}
          />
        );
      })}
    </div>
  );
};

export default PostPreviews;
