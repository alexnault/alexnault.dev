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
import { useInView } from "react-intersection-observer";

import { articleRepo } from "repos/articles";

import Layout from "components/Layout";
import SEO from "components/SEO";
import MarkdownRenderer from "components/MarkdownRenderer";
import TwitterIcon from "components/icons/Twitter";
import LinkedInIcon from "components/icons/LinkedIn";
import LinkIcon from "components/icons/Link";
import Container from "components/Container";
import ArticleCards from "components/ArticleCards";
import CustomMenu from "components/Menu";
import LikeCounter from "components/LikeCounter";

import alexWebp from "public/alex.webp";

const siteUrl = "https://alexnault.dev";

export default function Slug({
  article,
  articleCards,
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

  const [topRef, isTopInView] = useInView();
  const [bottomRef, isBottomInView] = useInView();

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
          <Container className="max-w-[680px]">
            <article>
              <header className="mt-24 mb-8">
                <H className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:mb-8">
                  {title}
                </H>
                <p className="text-lg font-bold text-gray-500">{excerpt}</p>
              </header>
              <div className="-mx-6 mb-8 overflow-hidden bg-gray-100 shadow-xl sm:rounded-md">
                <Image
                  src={coverImage}
                  blurDataURL={blurDataURL}
                  alt="Article cover"
                  width="728"
                  height="460"
                  layout="responsive"
                  objectFit="cover"
                  sizes="(max-width: 728px) 100vw, 728px"
                  placeholder="blur"
                />
              </div>
              <div ref={topRef} />
              <div
                className={`fixed top-80 right-[calc((100vw-1000px)/2)] hidden lg:block ${
                  !isTopInView && !isBottomInView ? "opacity-100" : "opacity-0"
                } transition-opacity duration-200`}
              >
                <LikeCounter slug={slug} />
              </div>
              <MarkdownRenderer>{content}</MarkdownRenderer>
              <div className="my-8 flex items-center space-x-2">
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
                  href={`https://github.com/alexnault/alexnault.dev/edit/master/articles/${slug}.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Edit
                </a>
                <LikeCounter slug={slug} className="px-1" />
              </div>
              <Link href="/" passHref>
                <a className="my-8 flex items-center">
                  <div className="mr-3 shrink-0">
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
              <H className="mb-6 text-3xl font-bold">Related articles</H>
            }
          >
            <ArticleCards articleCards={articleCards} />
            <div ref={bottomRef} />
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

  const article = await articleRepo.getArticleBySlug(slug);

  if (!article) {
    throw new Error("Missing article");
  }

  const articleCards = (await articleRepo.getRelatedArticles(slug)).map(
    ({ slug, title, coverImage, readingTime, blurDataURL, excerpt }) => ({
      slug,
      title,
      coverImage,
      readingTime,
      blurDataURL,
      excerpt,
    })
  );

  return {
    props: {
      article,
      articleCards,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await articleRepo.getAllSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};
