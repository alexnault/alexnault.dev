import React from "react";
import { Container } from "@material-ui/core";
import { Section } from "react-headings";
import { InferGetStaticPropsType } from "next";

import { getAllArticles } from "lib/cms";

import SEO from "components/seo";
import Layout from "components/layout";
import About from "components/about";
import PostPreviews from "components/postPreviews";
import Heading from "components/heading";

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
                <Heading variant="h4" gutterBottom>
                  Latest articles
                </Heading>
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
