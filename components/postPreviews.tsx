import React from "react";

import { Article } from "lib/cms";

import PostPreview from "components/postPreview";

import style from "styles/postPreviews.module.css";

type Props = {
  articles: Article[];
};

const PostPreviews = ({ articles }: Props) => {
  return (
    <div className={style.postPreviews}>
      {articles.map((article) => (
        <PostPreview key={article.slug} article={article} />
      ))}
    </div>
  );
};

export default PostPreviews;
