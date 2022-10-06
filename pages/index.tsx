import React from "react";
import { Section, H } from "react-headings";
import { InferGetStaticPropsType } from "next";

import { articleRepo } from "repos/articles";

import SEO from "components/SEO";
import Layout from "components/Layout";
import Overview from "components/Overview";
import ArticleCards from "components/ArticleCards";
import Container from "components/Container";

export default function HomePage({
  articleCards,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SEO />
      <Layout>
        <Container className="xl:max-w-screen-xl">
          <Section
            component={
              <section className="mt-36 mb-24 flex flex-col justify-center">
                <Overview />
              </section>
            }
          >
            <section className="mb-16">
              <Section
                component={
                  <H className="mb-4 text-xl font-bold md:text-2xl">
                    Latest articles
                  </H>
                }
              >
                <ArticleCards articleCards={articleCards} />
              </Section>
            </section>
          </Section>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const articleCards = (await articleRepo.getAllArticles()).map(
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
      articleCards,
    },
  };
}
