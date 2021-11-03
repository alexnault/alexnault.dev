import { readFile, readdir } from "fs/promises";
import { join } from "path";
import matter from "gray-matter";
import { getPlaiceholder } from "plaiceholder";

import { ArticleRepository, Article } from "domain/ArticleRepository";

export function MDArticleRepository(): ArticleRepository {
  const articlesDirectory = join(process.cwd(), "posts");

  return {
    getAllSlugs: async () => {
      return (await readdir(articlesDirectory)).map((fileName) =>
        fileName.replace(/\.md$/, "")
      );
    },
    getArticleBySlug: async function (slug: string) {
      const fullPath = join(articlesDirectory, `${slug}.md`);
      const fileContents = await readFile(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      const { base64 } = await getPlaiceholder(data.coverImage);

      const article: Article = {
        slug,
        content,
        title: data.title,
        date: data.date,
        coverImage: data.coverImage,
        blurDataURL: base64,
        excerpt: data.excerpt,
      };

      return article;
    },
    getAllArticles: async function () {
      const slugs = await this.getAllSlugs();

      return (
        await Promise.all(
          slugs.map(async (slug) => {
            return this.getArticleBySlug(slug);
          })
        )
      ).sort((a, b) => (a.date > b.date ? -1 : 1));
    },
    getRelatedArticles: async function (slug) {
      const slugs = await this.getAllSlugs();

      return (
        await Promise.all(
          slugs
            .filter((s) => s !== slug) // TODO use labels
            .slice(0, 3)
            .map(async (slug) => {
              return this.getArticleBySlug(slug);
            })
        )
      ).sort((a, b) => (a.date > b.date ? -1 : 1));
    },
  };
}
