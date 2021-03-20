import React from "react";
import { Section } from "react-headings";

import { Article } from "lib/cms";

import PostPreview from "components/postPreview";
import Heading from "components/heading";

import style from "styles/postPreviews.module.css";

type Props = {
  articles: Article[];
};

const PostPreviews = ({ articles }: Props) => {
  return (
    <Section
      component={
        <Heading variant="h4" gutterBottom>
          Latest articles
        </Heading>
      }
    >
      <div className={style.postPreviews}>
        {articles.map((article) => (
          <PostPreview key={article.slug} article={article} />
        ))}
      </div>
    </Section>
  );
};

export default PostPreviews;
