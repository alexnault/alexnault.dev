import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Navigation from "./navigation";
import { toKebabCase } from "../helpers";
import { MDXRenderer } from "gatsby-plugin-mdx";

import style from "../styles/post.module.css";

type Props = {
  title: string;
  date: string;
  path: string;
  coverImage: any;
  author: string;
  body: string;
  tags: string[];
  previousPost: any;
  nextPost: any;
  avatar: any;
};

const Post = ({
  title,
  date,
  path,
  coverImage,
  author,
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
    <div className={style.post}>
      <div className={style.postContent}>
        <h1 className={style.title}>{title}</h1>
        <div className={style.meta}>
          {date} {author && <>— Written by {author}</>}
          {tags ? (
            <div className={style.tags}>
              {tags.map((tag) => (
                <Link to={`/tag/${toKebabCase(tag)}/`} key={toKebabCase(tag)}>
                  <span className={style.tag}>#{tag}</span>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        {coverImage && (
          <Img
            fluid={coverImage.childImageSharp.fluid}
            className={style.coverImage}
          />
        )}
        <MDXRenderer>{body}</MDXRenderer>
        <div className={style.actions}>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `Check this out! https://alexnault.dev${path}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Share
          </a>
          <a
            href={`https://github.com/alexnault/alexnault.dev/edit/master/src/posts/${path.replace(
              "/",
              ""
            )}.mdx`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Edit
          </a>
        </div>
        <div className={style.author}>
          <Img fixed={avatar.childImageSharp.fixed} className={style.avatar} />
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
      </div>
    </div>
  );
};

export default Post;
