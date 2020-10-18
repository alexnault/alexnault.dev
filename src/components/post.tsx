import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Navigation from "./navigation";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { OutboundLink } from "gatsby-plugin-gtag";
import { Typography, Link as MuiLink } from "@material-ui/core";
import { MDXProvider } from "@mdx-js/react";

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

const MyH1 = (props) => <Typography component="h1" variant="h3" {...props} />;
const MyH2 = (props) => <Typography component="h2" variant="h4" {...props} />;
const MyH3 = (props) => <Typography component="h3" variant="h5" {...props} />;
const MyH4 = (props) => <Typography component="h4" variant="h6" {...props} />;
const MyP = (props) => <Typography variant="body1" paragraph {...props} />;
const MyLink = (props) => <MuiLink {...props} />; // Test gatsby link

const components = {
  h1: MyH1,
  h2: MyH2,
  h3: MyH3,
  h4: MyH4,
  a: MyLink,
  p: MyP,
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
    <article className={style.post}>
      <header>
        {/* <h1 className={style.title}>{title}</h1> */}
        <Typography variant="h3" component="h1" className={style.title}>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          paragraph
          className={style.meta}
        >
          {excerpt}
        </Typography>
        {/* <p className={style.meta}> */}
        {/* {excerpt} */}
        {/* {tags ? (
            <div className={style.tags}>
              {tags.map((tag) => (
                <Link to={`/tag/${toKebabCase(tag)}/`} key={toKebabCase(tag)}>
                  <span className={style.tag}>#{tag}</span>
                </Link>
              ))}
            </div>
          ) : null} */}
        {/* </p> */}
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
        <OutboundLink
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `${title} by Alex Nault https://alexnault.dev${path}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share
        </OutboundLink>
        <OutboundLink
          href={`https://github.com/alexnault/alexnault.dev/edit/master/src/posts/${path.replace(
            "/",
            ""
          )}.mdx`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit
        </OutboundLink>
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
              By <Link to="/">Alex Nault</Link>
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
