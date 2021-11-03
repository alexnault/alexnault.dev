export interface LikeRepository {
  getArticleLikeCount: (slug: string) => Promise<number | undefined>;
  likeArticle: (slug: string) => void;
}
