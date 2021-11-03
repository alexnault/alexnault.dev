import { PrismaClient } from "@prisma/client";

import { LikeRepository } from "domain/LikeRepository";

export function PrismaLikeRepository(prisma: PrismaClient): LikeRepository {
  return {
    getArticleLikeCount: async (slug: string) => {
      const article = await prisma.articles.findUnique({
        select: { like_count: true },
        where: { slug },
      });

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
