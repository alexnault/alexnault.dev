import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Post from "../components/post";

type Props = {
  data: {
    avatar: any;
    mdx: any;
    site: any;
  };
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
  const { siteUrl } = data.site.siteMetadata;
  const { next, previous } = pageContext;

  const schema = {
    "@context": "http://schema.org",
    "@type": "Article",
    url: `${siteUrl}${path}`,
    name: title,
    author: {
      "@type": "Person",
      name: "Alex Nault",
    },
    datePublished: date,
    dateModified: data.site.buildTime,
    image: {
      "@type": "ImageObject",
      url: `${siteUrl}${coverImage.childImageSharp.fluid.src}`,
    },
  };

  //

  return (
    <Layout>
      <SEO title={title} description={excerpt || autoExcerpt} schema={schema} />
      <Post
        key={id}
        title={title}
        excerpt={excerpt}
        path={path}
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
        date(formatString: "YYYY-MM-DD")
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
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
      }
    }
  }
`;
