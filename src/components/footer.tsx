import React from "react";
import { OutboundLink } from "gatsby-plugin-gtag";
import { Link, Divider } from "@material-ui/core";

import style from "../styles/footer.module.css";

const Footer = () => (
  <footer className={style.footer}>
    <Link component={OutboundLink} href="https://github.com/alexnault">
      Github
    </Link>
    <Divider orientation="vertical" />
    <Link component={OutboundLink} href="https://www.linkedin.com/in/naultalex">
      LinkedIn
    </Link>
    <Divider orientation="vertical" />
    <Link component={OutboundLink} href="https://twitter.com/nault_alex">
      Twitter
    </Link>
  </footer>
);

export default Footer;
