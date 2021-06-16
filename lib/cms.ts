import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export type Article = {
  slug: string;
  content: string;
  title: string;
  date: Date; // TODO string?
  coverImage: string;
  excerpt?: string;
};

const articlesDirectory = join(process.cwd(), "posts");

export function getAllSlugs() {
  return fs
    .readdirSync(articlesDirectory)
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

export function getArticleBySlug(slug: string) {
  const fullPath = join(articlesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const article: Article = {
    slug,
    content,
    title: data.title,
    date: data.date,
    coverImage: data.coverImage,
    excerpt: data.excerpt,
  };

  return article;
}

export function getAllArticles() {
  const slugs = getAllSlugs();

  return slugs
    .map((slug) => getArticleBySlug(slug))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getRelatedArticles(slug) {
  const slugs = getAllSlugs();

  return slugs
    .filter((s) => s !== slug) // TODO use labels
    .slice(0, 3)
    .map((s) => getArticleBySlug(s))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
