import React from "react";
import {
  GetStaticPropsContext,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";
import Link from "next/link";
import Image from "next/image";
import { Section, H } from "react-headings";
import { Menu } from "@headlessui/react";

import { getAllSlugs, getArticleBySlug, getRelatedArticles } from "lib/cms";

import Layout from "components/layout";
import SEO from "components/seo";
import MarkdownRenderer from "components/markdownRenderer";
import TwitterIcon from "components/icons/twitter";
import LinkedInIcon from "components/icons/linkedin";
import LinkIcon from "components/icons/link";
import Container from "components/container";
import PostPreviews from "components/postPreviews";
import CustomMenu from "components/menu";

import alexWebp from "public/alex.webp";

const siteUrl = "https://alexnault.dev";

export default function Slug({
  article,
  relatedArticles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { slug, title, excerpt, coverImage, blurDataURL, content } = article;

  const currentUrl = `${siteUrl}/${slug}`;

  const schema = {
    "@context": "http://schema.org",
    "@type": "TechArticle",
    url: currentUrl,
    headline: title,
    name: title,
    description: excerpt,
    author: {
      "@type": "Person",
      name: "Alex Nault",
      url: siteUrl,
    },
    creator: ["Alex Nault"],
    publisher: {
      "@type": "Person",
      name: "Alex Nault",
      url: siteUrl,
    },
    image: `${siteUrl}${coverImage}`,
    mainEntityOfPage: currentUrl,
  };

  const handleShareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `${title} ${currentUrl} via @nault_alex`
    )}`;
    window.open(url, "_blank");
  };

  const handleShareLinkedIn = () => {
    const urlEncoded = encodeURI(
      `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${title}&summary=${excerpt}&source=LinkedIn`
    );

    window.open(
      urlEncoded,
      "_blank",
      "width=550,height=431,location=no,menubar=no,scrollbars=no,status=no,toolbar=no"
    );
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <Layout>
      <SEO
        title={title}
        image={`${siteUrl}${coverImage}`}
        description={excerpt}
        schema={schema}
        url={currentUrl}
      />
      <Section
        component={
          <Container className="md:max-w-screen-md">
            <article>
              <header className="mt-24 mb-8">
                <H className=" mb-4 lg:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                  {title}
                </H>
                <p className="text-gray-500 font-bold text-lg">{excerpt}</p>
              </header>
              <div className="mb-8 -mx-6 sm:mx-0 sm:rounded-md shadow-xl overflow-hidden bg-gray-100">
                <Image
                  src={coverImage}
                  blurDataURL={blurDataURL}
                  alt="Article cover"
                  width="768"
                  height="500"
                  layout="responsive"
                  objectFit="cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  placeholder="blur"
                />
              </div>
              <MarkdownRenderer>{content}</MarkdownRenderer>
              <div className="my-8 space-x-2">
                <CustomMenu
                  button={
                    <Menu.Button className="btn-primary">Share</Menu.Button>
                  }
                  items={[
                    {
                      key: "twitter",
                      title: "Twitter",
                      onClick: handleShareTwitter,
                      icon: (
                        <TwitterIcon
                          size="sm"
                          className="mr-3 text-gray-400 group-hover:text-gray-500"
                        />
                      ),
                    },
                    {
                      key: "linkedin",
                      title: "LinkedIn",
                      onClick: handleShareLinkedIn,
                      icon: (
                        <LinkedInIcon
                          size="sm"
                          className="mr-3 text-gray-400 group-hover:text-gray-500"
                        />
                      ),
                    },
                    {
                      key: "link",
                      title: "Copy link",
                      onClick: handleCopyLink,
                      icon: (
                        <LinkIcon
                          size="sm"
                          className="mr-3 text-gray-400 group-hover:text-gray-500"
                        />
                      ),
                    },
                  ]}
                />
                <a
                  href={`https://github.com/alexnault/alexnault.dev/edit/master/posts/${slug}.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Edit
                </a>
              </div>
              <Link href="/" passHref>
                <a className="flex items-center my-8">
                  <div className="flex-shrink-0 mr-3">
                    <Image
                      src={alexWebp}
                      width={64}
                      height={64}
                      alt="Alex Nault"
                      className="rounded-full bg-gray-100"
                      placeholder="blur"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-bold">By Alex Nault</div>
                    <div className="text-lg text-gray-500">
                      I write bite-sized articles for developers
                    </div>
                  </div>
                </a>
              </Link>
            </article>
          </Container>
        }
      >
        <Container className="mt-24 mb-16 xl:max-w-screen-xl">
          <Section
            component={
              <H className="text-3xl font-bold mb-6">Related articles</H>
            }
          >
            <PostPreviews articles={relatedArticles} />
          </Section>
        </Container>
      </Section>
    </Layout>
  );
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = params?.slug;

  if (typeof slug !== "string") {
    throw new Error("Invalid slug param");
  }

  const article = await getArticleBySlug(slug);
  const relatedArticles = await getRelatedArticles(slug);

  return {
    props: {
      article,
      relatedArticles,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};
