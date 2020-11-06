import React from "react";
import { graphql } from "gatsby";
import { Container } from "@material-ui/core";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Post from "../components/post";
import Navigation from "../components/navigation";

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
    frontmatter: { title, date, path, coverImage, excerpt },
    excerpt: autoExcerpt,
    id,
    body,
  } = data.mdx;
  const { siteUrl, author } = data.site.siteMetadata;
  const { next, previous } = pageContext;

  const description = excerpt || autoExcerpt;

  const schema = {
    "@context": "http://schema.org",
    "@type": "TechArticle",
    url: `${siteUrl}${path}`,
    headline: title,
    name: title,
    description,
    author: {
      "@type": "Person",
      name: author,
      url: siteUrl,
    },
    creator: [author],
    publisher: {
      "@type": "Person",
      name: author,
      url: siteUrl,
    },
    dateCreated: date,
    datePublished: date,
    dateModified: data.site.buildTime,
    image: `${siteUrl}${coverImage.childImageSharp.fluid.src}`,
    mainEntityOfPage: `${siteUrl}${path}`,
  };

  const previousPath = previous && previous.frontmatter.path;
  const previousLabel = previous && previous.frontmatter.title;
  const nextPath = next && next.frontmatter.path;
  const nextLabel = next && next.frontmatter.title;

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        image={`${siteUrl}${coverImage.childImageSharp.fluid.src}`}
        schema={schema}
        url={`${siteUrl}${path}`}
      />
      <Container maxWidth="sm" component="main" className="content">
        <Post
          key={id}
          title={title}
          excerpt={excerpt}
          path={path}
          coverImage={coverImage}
          body={body}
          avatar={avatar}
        />
        <Navigation
          previousPath={previousPath}
          previousLabel={previousLabel}
          nextPath={nextPath}
          nextLabel={nextLabel}
        />
      </Container>
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
        coverImage {
          childImageSharp {
            fluid(maxWidth: 728) {
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
        author
        siteUrl
      }
    }
  }
`;
