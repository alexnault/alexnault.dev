import React from "react";
import { Section, H } from "react-headings";
import { InferGetStaticPropsType } from "next";

import { articleRepo } from "repos/articles";

import SEO from "components/SEO";
import Layout from "components/Layout";
import Overview from "components/Overview";
import ArticlePreviews from "components/ArticlePreviews";
import Container from "components/Container";

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
                <ArticlePreviews articles={articles} />
              </Section>
            </section>
          </Section>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const articles = await articleRepo.getAllArticles();

  return {
    props: {
      articles,
    },
  };
}
