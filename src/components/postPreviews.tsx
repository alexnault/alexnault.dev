import React from "react";
import { Typography } from "@material-ui/core";
import { H, Level } from "react-headings";

import PostPreview from "../components/postPreview";

import style from "../styles/postPreviews.module.css";

type Props = {
  posts: { node: { [key: string]: any } }[];
};

const PostPreviews = ({ posts }: Props) => {
  return (
    <>
      <H>
        {(Component) => (
          <Typography variant="h4" component={Component} gutterBottom>
            Latest articles
          </Typography>
        )}
      </H>
      <Level>
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
      </Level>
    </>
  );
};

export default PostPreviews;
