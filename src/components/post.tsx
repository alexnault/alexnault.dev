import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Navigation from "./navigation";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { OutboundLink } from "gatsby-plugin-gtag";
import { Typography, Link as MuiLink } from "@material-ui/core";
import { MDXProvider } from "@mdx-js/react";

import style from "../styles/post.module.css";

const H1 = (props) => (
  <Typography component="h1" variant="h3" gutterBottom {...props} />
);
const H2 = (props) => (
  <Typography component="h2" variant="h4" gutterBottom {...props} />
);
const H3 = (props) => (
  <Typography component="h3" variant="h5" gutterBottom {...props} />
);
const H4 = (props) => (
  <Typography component="h4" variant="h6" gutterBottom {...props} />
);
const P = (props) => <Typography variant="body1" paragraph {...props} />;
const A = (props) => <MuiLink {...props} />;

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  a: A,
  p: P,
};

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
          {excerpt}
        </Typography>
      </header>
      {coverImage && (
        <Img
          fluid={coverImage.childImageSharp.fluid}
          className={style.coverImage}
          alt="Post cover"
        />
      )}
      <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
      <div className={style.actions}>
        <MuiLink
          component={OutboundLink}
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `${title} by Alex Nault https://alexnault.dev${path}`
          )}`}
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
          <div>
            <b>
              By{" "}
              <MuiLink component={Link} to="/">
                Alex Nault
              </MuiLink>
            </b>
          </div>
          <div>I write bite-sized articles for developers</div>
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
