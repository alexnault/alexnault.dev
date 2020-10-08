import React from "react";
import { OutboundLink } from "gatsby-plugin-gtag";

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
          <OutboundLink href="https://github.com/alexnault">
            Github
          </OutboundLink>
        </span>
        <span className={style.item}>
          <OutboundLink href="https://www.linkedin.com/in/naultalex">
            LinkedIn
          </OutboundLink>
        </span>
        <span className={style.item}>
          <OutboundLink href="https://twitter.com/nault_alex">
            Twitter
          </OutboundLink>
        </span>
      </>
    )}
  </footer>
);

export default Footer;
