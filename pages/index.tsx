import React from "react";
import { Section, H } from "react-headings";
import { InferGetStaticPropsType } from "next";

import { getAllArticles } from "lib/cms";

import SEO from "components/seo";
import Layout from "components/layout";
import About from "components/about";
import PostPreviews from "components/postPreviews";
import Container from "components/container";

export default function Index({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SEO />
      <Layout>
        <Container>
          <Section component={<About />}>
            <Section
              component={
                <H className="text-3xl font-bold mb-4">Latest articles</H>
              }
            >
              <PostPreviews articles={articles} />
            </Section>
          </Section>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const articles = await getAllArticles();

  return {
    props: {
      articles,
    },
  };
}
