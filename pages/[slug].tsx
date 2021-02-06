import React from "react";
import {
  GetStaticPropsContext,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";
import Link from "next/link";
import Image from "next/image";
import { Section } from "react-headings";
import {
  Typography,
  Link as MuiLink,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  Snackbar,
  ListItemText,
  Container,
} from "@material-ui/core";

import { getAllSlugs, getArticleBySlug } from "lib/cms";

import Layout from "components/layout";
import SEO from "components/seo";
import Navigation from "components/navigation";
import MarkdownRenderer from "components/markdownRenderer";
import TwitterIcon from "components/icons/twitter";
import LinkedInIcon from "components/icons/linkedin";
import LinkIcon from "components/icons/link";
import Heading from "components/heading";

import style from "styles/post.module.css";

export default function Slug({
  // relatedArticles
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { slug, title, excerpt, coverImage, content } = article;

  // const schema = {
  //   "@context": "http://schema.org",
  //   "@type": "TechArticle",
  //   url: `${siteUrl}${path}`,
  //   headline: title,
  //   name: title,
  //   description: excerpt,
  //   author: {
  //     "@type": "Person",
  //     name: author,
  //     url: siteUrl,
  //   },
  //   creator: [author],
  //   publisher: {
  //     "@type": "Person",
  //     name: author,
  //     url: siteUrl,
  //   },
  //   dateCreated: date,
  //   datePublished: date,
  //   dateModified: data.site.buildTime,
  //   image: `${siteUrl}${coverImage.childImageSharp.fluid.src}`,
  //   mainEntityOfPage: `${siteUrl}${path}`,
  // };

  // const previousPath = previous && previous.frontmatter.path;
  // const previousLabel = previous && previous.frontmatter.title;
  // const nextPath = next && next.frontmatter.path;
  // const nextLabel = next && next.frontmatter.title;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const handleClickShare = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleShareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `${title} https://alexnault.dev/${slug} via @nault_alex`
    )}`;
    window.open(url, "_blank");
    setAnchorEl(null);
  };

  const handleShareLinkedIn = () => {
    const urlEncoded = encodeURI(
      `https://www.linkedin.com/shareArticle?mini=true&url=${`https://alexnault.dev/${slug}`}&title=${title}&summary=${excerpt}&source=LinkedIn`
    );

    window.open(
      urlEncoded,
      "_blank",
      "width=550,height=431,location=no,menubar=no,scrollbars=no,status=no,toolbar=no"
    );
    setAnchorEl(null);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setSnackbarOpen(true);
    setAnchorEl(null);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <Layout>
      {/* <SEO
        title={post.fields.title}
        // image={imageUrl}
        description={description}
        schema={schema}
        url={`${siteUrl}/${slug}`}
      /> */}
      <Container maxWidth="sm" component="main" className="content">
        <article>
          <Section
            component={
              <header>
                <Heading variant="h2" className={style.title}>
                  {title}
                </Heading>
                <Typography variant="subtitle1" color="textSecondary" paragraph>
                  <b>{excerpt}</b>
                </Typography>
              </header>
            }
          >
            {coverImage && (
              <Image
                src={coverImage}
                alt="Article cover"
                width="728"
                height="500"
                layout="responsive"
                className={style.coverImage}
                objectFit="cover"
              />
            )}
            <MarkdownRenderer>{content}</MarkdownRenderer>
            <div className={style.actions}>
              <Button
                aria-controls="share-menu"
                aria-haspopup="true"
                color="primary"
                variant="contained"
                onClick={handleClickShare}
              >
                Share
              </Button>
              <Button
                component="a"
                variant="outlined"
                href={`https://github.com/alexnault/alexnault.dev/edit/master/posts/${slug}.mdx`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit
              </Button>
              <Menu
                id="share-menu"
                keepMounted
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={handleShareTwitter}>
                  <ListItemIcon>
                    <TwitterIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Twitter" />
                </MenuItem>
                <MenuItem onClick={handleShareLinkedIn}>
                  <ListItemIcon>
                    <LinkedInIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="LinkedIn" />
                </MenuItem>
                <MenuItem onClick={handleCopyLink}>
                  <ListItemIcon>
                    <LinkIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Copy link" />
                </MenuItem>
              </Menu>
              <Snackbar
                open={snackbarOpen}
                autoHideDuration={2000}
                onClose={handleCloseSnackbar}
                message="Link copied"
              />
            </div>
            <div className={style.author}>
              <div className={style.avatarWrapper}>
                <Image
                  src="/alex.jpg"
                  width={64}
                  height={64}
                  alt="Alex Nault"
                  className={style.avatar}
                />
              </div>
              <div>
                <Typography>
                  <b>
                    {"By "}
                    <Link href="/" passHref>
                      <MuiLink>Alex Nault</MuiLink>
                    </Link>
                  </b>
                </Typography>
                <Typography>
                  I write bite-sized articles for developers
                </Typography>
              </div>
            </div>
          </Section>
        </article>
        {/* <Navigation
          previousPath={previousPath}
          previousLabel={previousLabel}
          nextPath={nextPath}
          nextLabel={nextLabel}
        /> */}
      </Container>
    </Layout>
  );
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = params?.slug;

  if (typeof slug !== "string") {
    throw new Error("Invalid slug param");
  }

  const article = await getArticleBySlug(slug);
  // const relatedArticles = await getRelatedArticles(slug); // TODO

  return {
    props: {
      article,
      // relatedArticles,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};
