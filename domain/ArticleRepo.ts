export type Article = {
  slug: string;
  content: string;
  title: string;
  date: Date; // TODO string?
  coverImage: string;
  blurDataURL: string;
  excerpt?: string;
};

export interface ArticleRepo {
  getAllSlugs: () => Promise<string[]>;
  getArticleBySlug: (slug: string) => Promise<Article>;
  // getArticleBySlug: (slug: string) => Promise<Article | undefined>;
  getAllArticles: () => Promise<Article[]>;
  getRelatedArticles: (slug: string) => Promise<Article[]>;
}
