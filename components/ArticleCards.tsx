import React from "react";

import ArticleCard, { ArticleCardProps } from "components/ArticleCard";

type Props = {
  articleCards: ArticleCardProps[];
};

export default function ArticleCards({ articleCards }: Props) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {articleCards.map((articleCard) => (
        <ArticleCard key={articleCard.slug} {...articleCard} />
      ))}
    </div>
  );
}
