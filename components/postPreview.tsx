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
      {/* transition: transform 200ms !important; */}
      {/* // .postPreview:hover,
// .postPreview:focus {
//   transform: scale(1.0325);
// } */}
      <a className="overflow-hidden bg-white shadow-2xl rounded-lg scale-150 transform-all">
        <div
          className="relative w-full
           bg-gray-300"
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
