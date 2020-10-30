import React from "react";
import { OutboundLink } from "gatsby-plugin-gtag";
import { Link, Divider } from "@material-ui/core";

import style from "../styles/footer.module.css";

const Footer = () => (
  <footer className={style.footer}>
    <Link
      component={OutboundLink}
      color="textSecondary"
      href="https://github.com/alexnault"
    >
      GitHub
    </Link>
    <Divider orientation="vertical" />
    <Link
      component={OutboundLink}
      color="textSecondary"
      href="https://www.linkedin.com/in/naultalex"
    >
      LinkedIn
    </Link>
    <Divider orientation="vertical" />
    <Link
      component={OutboundLink}
      color="textSecondary"
      href="https://twitter.com/nault_alex"
    >
      Twitter
    </Link>
  </footer>
);

export default Footer;
