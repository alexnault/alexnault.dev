import React from "react";
import Img from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-gtag";
import { Typography, Link, IconButton } from "@material-ui/core";

import GitHubIcon from "./icons/github";
import LinkedInIcon from "./icons/linkedin";
import TwitterIcon from "./icons/twitter";
import EmailIcon from "./icons/email";

import style from "../styles/about.module.css";

type Props = {
  avatar: any;
};

const About = ({ avatar }: Props) => {
  return (
    <div className={style.about}>
      <div className={style.imageWrapper}>
        <Img
          fluid={avatar.childImageSharp.fixed}
          className={style.avatar}
          alt="Alex Nault"
        />
      </div>
      <div className={style.content}>
        <Typography variant="h3" component="h1" gutterBottom>
          {"Hi, I'm "}
          <span className={style.highlight}>Alex Nault</span>
          {" and I solve problems using software."}
        </Typography>
        <Typography>
          {"I'm currently building solutions at "}
          <Link component={OutboundLink} href="https://apprentx.rocks">
            Apprentx
          </Link>
          {" to improve the way we learn. Previously "}
          <Link component={OutboundLink} href="https://www.classcraft.com">
            Classcraft
          </Link>
          {" and "}
          <Link component={OutboundLink} href="https://www.ubisoft.com">
            Ubisoft
          </Link>
          .
        </Typography>
        <div className={style.social}>
          <IconButton
            edge="start"
            component={OutboundLink}
            href="https://github.com/alexnault"
            aria-label="Github"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component={OutboundLink}
            href="https://www.linkedin.com/in/naultalex"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component={OutboundLink}
            href="https://twitter.com/nault_alex"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            component={OutboundLink}
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
