import React from "react";
import {
  GetStaticPropsContext,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";
import Link from "next/link";
import Image from "next/image";
import { Section, H } from "react-headings";
import {
  Typography,
  Link as MuiLink,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  Snackbar,
  ListItemText,
  useTheme,
} from "@material-ui/core";

import { getAllSlugs, getArticleBySlug, getRelatedArticles } from "lib/cms";

import Layout from "components/layout";
import SEO from "components/seo";
import MarkdownRenderer from "components/markdownRenderer";
import TwitterIcon from "components/icons/twitter";
import LinkedInIcon from "components/icons/linkedin";
import LinkIcon from "components/icons/link";
import Container from "components/container";
import PostPreviews from "components/postPreviews";

const siteUrl = "https://alexnault.dev";

export default function Slug({
  article,
  relatedArticles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { slug, title, excerpt, coverImage, content } = article;
  const { palette } = useTheme();

  const currentUrl = `${siteUrl}/${slug}`;

  const schema = {
    "@context": "http://schema.org",
    "@type": "TechArticle",
    url: currentUrl,
    headline: title,
    name: title,
    description: excerpt,
    author: {
      "@type": "Person",
      name: "Alex Nault",
      url: siteUrl,
    },
    creator: ["Alex Nault"],
    publisher: {
      "@type": "Person",
      name: "Alex Nault",
      url: siteUrl,
    },
    image: `${siteUrl}${coverImage}`,
    mainEntityOfPage: currentUrl,
  };

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
      `${title} ${currentUrl} via @nault_alex`
    )}`;
    window.open(url, "_blank");
    setAnchorEl(null);
  };

  const handleShareLinkedIn = () => {
    const urlEncoded = encodeURI(
      `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${title}&summary=${excerpt}&source=LinkedIn`
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

  const handleCloseSnackbar = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <Layout>
      <SEO
        title={title}
        image={`${siteUrl}${coverImage}`}
        description={excerpt}
        schema={schema}
        url={currentUrl}
      />
      <Section
        component={
          <Container className="md:max-w-screen-md">
            <article>
              <header>
                <H className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                  {title}
                </H>
                <p className="text-gray-500 font-bold my-4 text-lg">
                  {excerpt}
                </p>
              </header>
              {coverImage && (
                <div
                  className="rounded-md mb-10 shadow-xl overflow-hidden"
                  style={{ backgroundColor: palette.divider }}
                >
                  <Image
                    src={coverImage}
                    alt="Article cover"
                    width="728"
                    height="500"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
              )}
              <MarkdownRenderer>{content}</MarkdownRenderer>
              <div className="my-8 space-x-2">
                <Button
                  aria-controls="share-menu"
                  aria-haspopup="true"
                  color="secondary"
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
              <div className="flex items-center my-8">
                <div className="flex-shrink-0 mr-3">
                  <Image
                    src="/alex.webp"
                    width={64}
                    height={64}
                    alt="Alex Nault"
                    className="rounded-full"
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
            </article>
          </Container>
        }
      >
        <Container>
          <Section
            component={
              <H className="text-3xl font-bold mb-4">Related articles</H>
            }
          >
            <PostPreviews articles={relatedArticles} />
          </Section>
        </Container>
      </Section>
    </Layout>
  );
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = params?.slug;

  if (typeof slug !== "string") {
    throw new Error("Invalid slug param");
  }

  const article = await getArticleBySlug(slug);
  const relatedArticles = await getRelatedArticles(slug);

  return {
    props: {
      article,
      relatedArticles,
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
