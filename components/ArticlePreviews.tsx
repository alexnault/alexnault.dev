import React from "react";

import { Article } from "domain/ArticleRepo";

import ArticlePreview from "components/ArticlePreview";

type Props = {
  articles: Article[];
};

export default function ArticlePreviews({ articles }: Props) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticlePreview key={article.slug} article={article} />
      ))}
    </div>
  );
}
