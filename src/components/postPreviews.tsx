import React from "react";
import { Typography } from "@material-ui/core";

import PostPreview from "../components/postPreview";

import style from "../styles/postPreviews.module.css";

type Props = {
  posts: { node: { [key: string]: any } }[];
};

const PostPreviews = ({ posts }: Props) => {
  return (
    <>
      <Typography variant="h4" component="h2" gutterBottom>
        Latest articles
      </Typography>
      <div className={style.postPreviews}>
        {posts.map(({ node }) => {
          const {
            id,
            frontmatter: { title, date, path, coverImage, excerpt },
          } = node;

          return (
            <PostPreview
              key={id}
              title={title}
              date={date}
              excerpt={excerpt}
              path={path}
              coverImage={coverImage}
            />
          );
        })}
      </div>
    </>
  );
};

export default PostPreviews;
