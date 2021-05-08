import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Section, H } from "react-headings";

import { Article } from "lib/cms";

type Props = {
  article: Article;
};

const PostPreview = ({ article }: Props) => {
  const { slug, title, coverImage, excerpt } = article;

  return (
    <Link href={`/${slug}`} passHref>
      <a className="overflow-hidden bg-white shadow-2xl rounded-lg transition transform hover:scale-105 focus:scale-105">
        <div
          className="relative w-full
           bg-gray-200"
          style={{ paddingTop: "50%" }}
        >
          <Image
            src={coverImage}
            alt="Cover image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="px-4 py-6 sm:px-6">
          <Section
            component={
              <H className="text-xl md:text-2xl font-bold mb-2">{title}</H>
            }
          >
            <p className="text-gray-500 md:text-lg">{excerpt}</p>
          </Section>
        </div>
      </a>
    </Link>
  );
};

export default PostPreview;
