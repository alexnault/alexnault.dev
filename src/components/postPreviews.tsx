import React from "react";
import { Section } from "react-headings";

import PostPreview from "../components/postPreview";
import Heading from "../components/heading";

import style from "../styles/postPreviews.module.css";

type Props = {
  posts: { node: { [key: string]: any } }[];
};

const PostPreviews = ({ posts }: Props) => {
  return (
    <Section
      component={
        <Heading variant="h4" gutterBottom>
          Latest articles
        </Heading>
      }
    >
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
    </Section>
  );
};

export default PostPreviews;
