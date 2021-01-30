import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

// import renderToString from "next-mdx-remote/render-to-string";

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
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export function getArticleBySlug(slug: string) {
  const fullPath = join(articlesDirectory, `${slug}.mdx`);
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
