import React from "react";
import { graphql } from "gatsby";
import { Container } from "@material-ui/core";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
import About from "../components/about";
import PostPreviews from "../components/postPreviews";

type Props = {
  data: {
    avatar: any;
    allMdx: any;
  };
  pageContext: {
    nextPagePath: string;
    previousPagePath: string;
  };
};

const Index = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}: Props) => {
  const {
    avatar,
    allMdx: { edges: posts },
  } = data;

  return (
    <>
      <SEO />
      <Layout>
        <Container component="main" className="content">
          <About avatar={avatar} />
          <PostPreviews posts={posts} />
          <Navigation
            previousPath={previousPagePath}
            previousLabel="Newer posts"
            nextPath={nextPagePath}
            nextLabel="Older posts"
          />
        </Container>
      </Layout>
    </>
  );
};

export const postsQuery = graphql`
  query($limit: Int!, $skip: Int!) {
    avatar: file(relativePath: { eq: "alex.jpg" }) {
      childImageSharp {
        fixed(width: 240, height: 240) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMdx(
      filter: { fileAbsolutePath: { regex: "//posts//" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "LL")
            excerpt
            path
            coverImage {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Index;
