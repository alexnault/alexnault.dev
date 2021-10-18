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
    likeArticle: async () => {
      throw new Error("Not implemented");
    },
  };
}
