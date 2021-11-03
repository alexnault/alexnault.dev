export interface LikeRepo {
  getArticleLikeCount: (slug: string) => Promise<number | undefined>;
  likeArticle: (slug: string) => void;
}
