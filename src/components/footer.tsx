import React from "react";

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
          <a href="https://github.com/alexnault">Github</a>
        </span>
        <span className={style.item}>
          <a href="https://www.linkedin.com/in/naultalex">LinkedIn</a>
        </span>
        <span className={style.item}>
          <a href="https://twitter.com/nault_alex">Twitter</a>
        </span>
      </>
    )}
  </footer>
);

export default Footer;
