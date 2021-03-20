import React from "react";
import { Container } from "@material-ui/core";
import { Section } from "react-headings";
import { InferGetStaticPropsType } from "next";

import { getAllArticles } from "lib/cms";

import SEO from "components/seo";
import Layout from "components/layout";
import Navigation from "components/navigation";
import About from "components/about";
import PostPreviews from "components/postPreviews";

export default function Index({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SEO />
      <Layout>
        <Container component="main" className="content">
          <Section component={<About />}>
            <PostPreviews articles={articles} />
          </Section>
          {/* <Navigation
            previousPath={previousPagePath}
            previousLabel="Newer posts"
            nextPath={nextPagePath}
            nextLabel="Older posts"
          /> */}
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
