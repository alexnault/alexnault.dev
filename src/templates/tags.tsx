import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import PostPreview from "../components/postPreview";
import Navigation from "../components/navigation";

import "../styles/layout.css";

type Props = {
  data: any;
  pageContext: {
    nextPagePath: string;
    previousPagePath: string;
    tag: any;
  };
};

const Tags = ({
  data,
  pageContext: { nextPagePath, previousPagePath, tag },
}: Props) => {
  const {
    allMarkdownRemark: { edges: posts },
  } = data;

  return (
    <>
      <SEO />
      <Layout>
        <div className="infoBanner">
          Posts with tag: <span>#{tag}</span>
        </div>
        {posts.map(({ node }) => {
          const {
            id,
            frontmatter: { title, date, path, coverImage },
          } = node;

          return (
            <PostPreview
              key={id}
              title={title}
              date={date}
              path={path}
              coverImage={coverImage}
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
  query($limit: Int!, $skip: Int!, $tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
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

export default Tags;
