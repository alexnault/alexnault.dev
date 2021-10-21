import { PrismaClient } from "@prisma/client";

import { ArticleRepository } from "./ArticleRepository";

export function PrismaArticleRepository(
  prisma: PrismaClient
): ArticleRepository {
  return {
    getArticleLikeCount: async (slug: string) => {
      const article = await prisma.articles.findUnique({ where: { slug } });

      return article?.like_count;
    },
    likeArticle: async (slug: string) => {
      await prisma.articles.update({
        where: { slug },
        data: {
          like_count: {
            increment: 1,
          },
        },
      });
    },
  };
}
