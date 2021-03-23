import React from "react";
import Image from "next/image";
import { Typography, IconButton } from "@material-ui/core";

import Heading from "./heading";
import GitHubIcon from "./icons/github";
import LinkedInIcon from "./icons/linkedin";
import TwitterIcon from "./icons/twitter";
import EmailIcon from "./icons/email";

import style from "styles/about.module.css";

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.avatarWrapper}>
        <div className={style.avatar}>
          <Image src="/alex.webp" layout="fill" alt="Alex Nault" />
        </div>
      </div>
      <div className={style.content}>
        <Heading variant="h3" gutterBottom>
          {"Hi, I'm Alex Nault and I solve problems using software."}
        </Heading>
        <Typography>
          {"I'm currently building solutions at "}
          <strong>Apprentx</strong>
          {" to improve the way we learn. Previously "}
          <strong>Classcraft</strong>
          {" and "}
          <strong>Ubisoft</strong>.
        </Typography>
        <div className={style.social}>
          <IconButton
            edge="start"
            component="a"
            href="https://github.com/alexnault"
            aria-label="Github"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/naultalex"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://twitter.com/nault_alex"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:nault.alex@gmail.com"
            aria-label="Email"
          >
            <EmailIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default About;
