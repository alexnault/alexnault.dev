import { PrismaClient } from "@prisma/client";

import { LikeRepo } from "domain/LikeRepo";

export function PrismaLikeRepo(prisma: PrismaClient): LikeRepo {
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
