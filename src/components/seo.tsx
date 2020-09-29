import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type Props = {
  description?: string;
  lang?: string;
  meta?: any[];
  keywords?: string[];
  schema?: { [key: string]: any };
  title?: string;
  url?: string;
  image?: string;
};

const SEO = ({
  description,
  lang = "en",
  meta = [],
  keywords = ["alex", "nault", "dev", "blog", "alexnault", "personal site"],
  schema,
  title,
  url,
  image,
}: Props) => {
  const data = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          twitterUsername
          siteUrl
          image
        }
      }
    }
  `);

  const {
    title: siteTitle,
    description: siteDescription,
    author,
    twitterUsername,
    siteUrl,
    image: siteImage,
  } = data.site.siteMetadata;

  const metaTitle = title || siteTitle;
  const metaDescription = description || siteDescription;
  const metaUrl = url || siteUrl;
  const metaImage = image || `${siteUrl}${siteImage}`;

  const defaultSchema = {
    "@context": "http://schema.org",
    "@type": "Website",
    url: metaUrl,
    name: metaTitle,
    description: metaDescription,
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
    image: metaImage,
    mainEntityOfPage: metaUrl,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={title ? `${title} | ${siteTitle}` : siteTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        { name: "author", content: author },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:creator`,
          content: twitterUsername,
        },
        {
          name: `twitter:image:src`,
          content: metaImage,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
