import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Section, H } from "react-headings";

import { Article } from "domain/ArticleRepo";

import LikeCounter from "components/LikeCounter";

export type ArticleCardProps = Pick<
  Article,
  "slug" | "title" | "coverImage" | "readingTime" | "blurDataURL" | "excerpt"
>;

export default function ArticleCard({
  slug,
  title,
  coverImage,
  readingTime,
  blurDataURL,
  excerpt,
}: ArticleCardProps) {
  return (
    <Link
      href={`/${slug}`}
      passHref
      className="overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-gray-200 transition hover:shadow-2xl dark:bg-gray-100 dark:hover:ring-black"
    >
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
            <H className="mb-3 text-xl font-bold md:text-2xl">{title}</H>
          }
        >
          <p className="text-sm text-gray-600 md:text-base">{excerpt}</p>
          <div className="mt-4 flex items-center space-x-4">
            <div className="text-sm text-gray-500">{readingTime} min read</div>
            <LikeCounter
              slug={slug}
              classNameText="text-sm"
              IconProps={{
                size: 18,
              }}
            />
          </div>
        </Section>
      </div>
    </Link>
  );
}
