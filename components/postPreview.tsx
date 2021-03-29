import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography, Paper, Container, useTheme } from "@material-ui/core";
import { Section } from "react-headings";

import { Article } from "lib/cms";

import Heading from "./heading";

import style from "styles/postPreview.module.css";

type Props = {
  article: Article;
};

const PostPreview = ({ article }: Props) => {
  const { slug, title, coverImage, excerpt } = article;
  const { palette } = useTheme();

  return (
    <Link href={`/${slug}`} passHref>
      <Paper component="a" className={style.postPreview}>
        <div
          className={style.imageWrapper}
          style={{ backgroundColor: palette.divider }}
        >
          <Image
            src={coverImage}
            alt="Cover image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Container className={style.content}>
          <Section
            component={
              <Heading variant="h5" color="textPrimary" gutterBottom>
                {title}
              </Heading>
            }
          >
            <Typography variant="body2" color="textSecondary">
              {excerpt}
            </Typography>
          </Section>
        </Container>
      </Paper>
    </Link>
  );
};

export default PostPreview;
