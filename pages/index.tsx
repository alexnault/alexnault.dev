import React from "react";
import { Section, H } from "react-headings";
import { InferGetStaticPropsType } from "next";

import { articleRepository } from "persistence/articles";

import SEO from "components/seo";
import Layout from "components/layout";
import Overview from "components/overview";
import PostPreviews from "components/postPreviews";
import Container from "components/container";

export default function Index({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SEO />
      <Layout>
        <Container className="xl:max-w-screen-xl">
          <Section
            component={
              <section className="flex flex-col justify-center mt-36 mb-20">
                <Overview />
              </section>
            }
          >
            <section className="mb-16">
              <Section
                component={
                  <H className="text-2xl md:text-3xl font-bold mb-6">
                    Latest articles
                  </H>
                }
              >
                <PostPreviews articles={articles} />
              </Section>
            </section>
          </Section>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const articles = await articleRepository.getAllArticles();

  return {
    props: {
      articles,
    },
  };
}
