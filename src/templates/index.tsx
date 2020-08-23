import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";
import PostPreview from "../components/postPreview";
import Navigation from "../components/navigation";

import About from "../components/about";

type Props = {
  data: {
    avatar: any;
    allMarkdownRemark: any;
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
    allMarkdownRemark: { edges: posts },
  } = data;

  return (
    <>
      <SEO />
      <Layout>
        <About avatar={avatar} />
        {posts.map(({ node }) => {
          const {
            id,
            excerpt: autoExcerpt,
            frontmatter: {
              title,
              date,
              path,
              author,
              coverImage,
              excerpt,
              tags,
            },
          } = node;

          return (
            <PostPreview
              key={id}
              title={title}
              date={date}
              path={path}
              author={author}
              coverImage={coverImage}
              tags={tags}
              excerpt={excerpt || autoExcerpt}
            />
          );
        })}
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
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts//" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            path
            author
            excerpt
            tags
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
