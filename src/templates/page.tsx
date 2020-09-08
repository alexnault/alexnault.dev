import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Post from "../components/post";

type Props = {
  data: any;
  pageContext: {
    next: any;
    previous: any;
  };
};

const BlogPostTemplate = ({ data, pageContext }: Props) => {
  const { avatar } = data;
  const {
    frontmatter: { title, date, path, author, coverImage, excerpt, tags },
    excerpt: autoExcerpt,
    id,
    body,
  } = data.mdx;
  const { next, previous } = pageContext;

  return (
    <Layout>
      <SEO title={title} description={excerpt || autoExcerpt} />
      <Post
        key={id}
        title={title}
        date={date}
        path={path}
        author={author}
        coverImage={coverImage}
        body={body}
        tags={tags}
        previousPost={previous}
        nextPost={next}
        avatar={avatar}
      />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($path: String) {
    avatar: file(relativePath: { eq: "alex.jpg" }) {
      childImageSharp {
        fixed(width: 64, height: 64) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mdx(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        date(formatString: "LL", locale: "en-US")
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
      id
      body
      excerpt
    }
  }
`;
