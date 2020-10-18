import React from "react";
import { OutboundLink } from "gatsby-plugin-gtag";
import { Link } from "@material-ui/core";

import style from "../styles/footer.module.css";

type Props = {
  copyrights?: string;
};

const Footer = ({ copyrights }: Props) => (
  <footer className={style.footer}>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      <>
        <span className={style.item}>
          <Link component={OutboundLink} href="https://github.com/alexnault">
            Github
          </Link>
        </span>
        <span className={style.item}>
          <Link
            component={OutboundLink}
            href="https://www.linkedin.com/in/naultalex"
          >
            LinkedIn
          </Link>
        </span>
        <span className={style.item}>
          <Link component={OutboundLink} href="https://twitter.com/nault_alex">
            Twitter
          </Link>
        </span>
      </>
    )}
  </footer>
);

export default Footer;
