import { readFile, readdir } from "fs/promises";
import { join } from "path";
import matter from "gray-matter";
import { getPlaiceholder } from "plaiceholder";

export type Article = {
  slug: string;
  content: string;
  title: string;
  date: Date; // TODO string?
  coverImage: string;
  blurDataURL: string;
  excerpt?: string;
};

const articlesDirectory = join(process.cwd(), "posts");

export async function getAllSlugs() {
  return (await readdir(articlesDirectory)).map((fileName) =>
    fileName.replace(/\.md$/, "")
  );
}

export async function getArticleBySlug(slug: string) {
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
}

export async function getAllArticles() {
  const slugs = await getAllSlugs();

  return (
    await Promise.all(
      slugs.map(async (slug) => {
        return getArticleBySlug(slug);
      })
    )
  ).sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getRelatedArticles(slug) {
  const slugs = await getAllSlugs();

  return (
    await Promise.all(
      slugs
        .filter((s) => s !== slug) // TODO use labels
        .slice(0, 3)
        .map(async (slug) => {
          return getArticleBySlug(slug);
        })
    )
  ).sort((a, b) => (a.date > b.date ? -1 : 1));
}
