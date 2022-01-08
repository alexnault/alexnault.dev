import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Section, H } from "react-headings";

import { Article } from "domain/ArticleRepo";

import LikeCounter from "components/LikeCounter";

type Props = {
  article: Article;
};

export default function PostPreview({ article }: Props) {
  const { slug, title, coverImage, readingTime, blurDataURL, excerpt } =
    article;

  return (
    <Link href={`/${slug}`} passHref>
      <a className="overflow-hidden transition transform rounded-xl bg-white dark:bg-gray-100 shadow-xl hover:shadow-2xl ring-1 ring-gray-200 dark:hover:ring-black">
        <div
          className="relative w-full
           bg-gray-100"
          style={{ paddingTop: "50%" }}
        >
          <Image
            src={coverImage}
            blurDataURL={blurDataURL}
            alt="Cover image"
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 416px"
            placeholder="blur"
          />
        </div>
        <div className="px-4 py-6 sm:px-6">
          <Section
            component={
              <H className="text-xl md:text-2xl font-bold mb-3">{title}</H>
            }
          >
            <p className="text-gray-600 text-sm md:text-base">{excerpt}</p>
            <div className="flex items-center mt-4 space-x-4">
              <div className="text-gray-500 text-sm">
                {readingTime} min read
              </div>
              <LikeCounter
                slug={slug}
                classNameText="text-sm"
                IconProps={{
                  size: "xs",
                }}
              />
            </div>
          </Section>
        </div>
      </a>
    </Link>
  );
}
