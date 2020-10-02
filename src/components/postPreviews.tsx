import React from "react";

import PostPreview from "../components/postPreview";

import typography from "../styles/typography.module.css";
import style from "../styles/postPreviews.module.css";

type Props = {
  posts: { node: { [key: string]: any } }[];
};

const PostPreviews = ({ posts }: Props) => {
  return (
    <>
      <h2 className={typography.h3}>Latest articles</h2>
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
    </>
  );
};

export default PostPreviews;
