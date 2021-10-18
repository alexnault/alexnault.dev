export interface ArticleRepository {
  getArticleLikeCount: (slug: string) => Promise<number | undefined>;
  likeArticle: (slug: string) => void;
}
