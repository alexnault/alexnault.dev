import { SupabaseClient } from "@supabase/supabase-js";

import { ArticleRepository } from "./ArticleRepository";
import { Article } from "./Article";

export function SupabaseArticleRepository(
  supabase: SupabaseClient
): ArticleRepository {
  return {
    getArticleLikeCount: async (slug: string) => {
      const { data } = await supabase
        .from<Article>("articles")
        .select("like_count")
        .match({ slug })
        .single();

      return data?.like_count;
    },
    likeArticle: async (slug: string) => {
      // TODO use transaction, switch to prisma?
      const { data } = await supabase
        .from<Article>("articles")
        .select("like_count")
        .match({ slug })
        .single();

      if (!data) {
        return;
      }

      await supabase
        .from<Article>("articles")
        .update({ like_count: data.like_count + 1 })
        .match({ slug });
    },
  };
}
