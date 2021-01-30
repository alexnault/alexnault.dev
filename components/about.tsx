import React from "react";
import Image from "next/image";
import { Typography, Link, IconButton } from "@material-ui/core";

import Heading from "./heading";
import GitHubIcon from "./icons/github";
import LinkedInIcon from "./icons/linkedin";
import TwitterIcon from "./icons/twitter";
import EmailIcon from "./icons/email";

import style from "../styles/about.module.css";

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.avatarWrapper}>
        <Image
          src="/alex.jpg"
          width={240}
          height={240}
          className={style.avatar}
          alt="Alex Nault"
        />
      </div>
      <div className={style.content}>
        <Heading variant="h3" gutterBottom>
          {"Hi, I'm "}
          <span className={style.highlight}>Alex Nault</span>
          {" and I solve problems using software."}
        </Heading>
        <Typography>
          {"I'm currently building solutions at "}
          <Link href="https://apprentx.rocks">Apprentx</Link>
          {" to improve the way we learn. Previously "}
          <Link href="https://www.classcraft.com">Classcraft</Link>
          {" and "}
          <Link href="https://www.ubisoft.com">Ubisoft</Link>.
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
