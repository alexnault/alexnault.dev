import React from "react";

import { Article } from "domain/ArticleRepo";

import PostPreview from "components/PostPreview";

type Props = {
  articles: Article[];
};

export default function PostPreviews({ articles }: Props) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {articles.map((article) => (
        <PostPreview key={article.slug} article={article} />
      ))}
    </div>
  );
}
