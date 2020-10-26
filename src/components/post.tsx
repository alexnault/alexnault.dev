import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Navigation from "./navigation";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { OutboundLink } from "gatsby-plugin-gtag";
import { Typography, Link as MuiLink } from "@material-ui/core";

import CustomMDXProvider from "./customMDXProvider";

import style from "../styles/post.module.css";

type Props = {
  title: string;
  path: string;
  coverImage: any;
  excerpt?: string;
  body: string;
  tags: string[];
  previousPost: any;
  nextPost: any;
  avatar: any;
};

const Post = ({
  title,
  path,
  coverImage,
  excerpt,
  tags,
  body,
  previousPost,
  nextPost,
  avatar,
}: Props) => {
  const previousPath = previousPost && previousPost.frontmatter.path;
  const previousLabel = previousPost && previousPost.frontmatter.title;
  const nextPath = nextPost && nextPost.frontmatter.path;
  const nextLabel = nextPost && nextPost.frontmatter.title;

  return (
    <article>
      <header>
        <Typography variant="h2" component="h1" className={style.title}>
          {title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" paragraph>
          <b>{excerpt}</b>
        </Typography>
      </header>
      {coverImage && (
        <Img
          fluid={coverImage.childImageSharp.fluid}
          className={style.coverImage}
          alt="Post cover"
        />
      )}
      <CustomMDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </CustomMDXProvider>
      <div className={style.actions}>
        <MuiLink
          component={OutboundLink}
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `${title} by Alex Nault https://alexnault.dev${path}`
          )}`}
          variant="body1"
          color="textPrimary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Share
        </MuiLink>
        <MuiLink
          component={OutboundLink}
          href={`https://github.com/alexnault/alexnault.dev/edit/master/src/posts/${path.replace(
            "/",
            ""
          )}.mdx`}
          variant="body1"
          color="textPrimary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit
        </MuiLink>
      </div>
      <div className={style.author}>
        <Img
          fixed={avatar.childImageSharp.fixed}
          className={style.avatar}
          alt="Alex Nault"
        />
        <div>
          <Typography>
            <b>
              {"By "}
              <MuiLink component={Link} to="/">
                Alex Nault
              </MuiLink>
            </b>
          </Typography>
          <Typography>I write bite-sized articles for developers</Typography>
        </div>
      </div>
      <Navigation
        previousPath={previousPath}
        previousLabel={previousLabel}
        nextPath={nextPath}
        nextLabel={nextLabel}
      />
    </article>
  );
};

export default Post;
