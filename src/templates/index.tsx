import React from "react";
import { graphql } from "gatsby";

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
        <About avatar={avatar} />
        <PostPreviews posts={posts} />
        <Navigation
          previousPath={previousPagePath}
          previousLabel="Newer posts"
          nextPath={nextPagePath}
          nextLabel="Older posts"
        />
      </Layout>
    </>
  );
};

export const postsQuery = graphql`
  query($limit: Int!, $skip: Int!) {
    avatar: file(relativePath: { eq: "alex.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 240) {
          ...GatsbyImageSharpFluid
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
            path
            coverImage {
              childImageSharp {
                fluid(maxWidth: 800) {
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
