import React from "react";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Typography, Paper, Container } from "@material-ui/core";
import { Section } from "react-headings";

import Heading from "./heading";

import style from "../styles/postPreview.module.css";

type Props = {
  title: string;
  date: string;
  path: string;
  coverImage: any;
  excerpt: string;
};

const PostPreview = ({ title, date, path, coverImage, excerpt }: Props) => {
  const backgroundFluidImageStack = [coverImage.childImageSharp.fluid];

  return (
    <Paper component={Link} to={path} className={style.postPreview}>
      <BackgroundImage
        fluid={backgroundFluidImageStack}
        backgroundColor={`#040e18`}
        className={style.backgroundImage}
      />
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
  );
};

export default PostPreview;
