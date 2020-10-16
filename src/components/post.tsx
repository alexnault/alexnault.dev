import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Navigation from "./navigation";
import { toKebabCase } from "../helpers";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { OutboundLink } from "gatsby-plugin-gtag";

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
    <article className={style.post}>
      <header>
        <h1 className={style.title}>{title}</h1>
        <p className={style.meta}>
          {excerpt}
          {/* {tags ? (
            <div className={style.tags}>
              {tags.map((tag) => (
                <Link to={`/tag/${toKebabCase(tag)}/`} key={toKebabCase(tag)}>
                  <span className={style.tag}>#{tag}</span>
                </Link>
              ))}
            </div>
          ) : null} */}
        </p>
      </header>
      {coverImage && (
        <Img
          fluid={coverImage.childImageSharp.fluid}
          className={style.coverImage}
          alt="Post cover"
        />
      )}
      <MDXRenderer>{body}</MDXRenderer>
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
