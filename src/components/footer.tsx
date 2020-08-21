import React from "react";

type Props = {
  copyrights?: string;
};

const Footer = ({ copyrights }: Props) => (
  <footer>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      <>
        <span className="footerCopyrights">
          <a href="https://github.com/alexnault">Github</a>
        </span>
        <span className="footerCopyrights">
          <a href="https://www.linkedin.com/in/naultalex">LinkedIn</a>
        </span>
        <span className="footerCopyrights">
          <a href="https://twitter.com/nault_alex">Twitter</a>
        </span>
      </>
    )}
  </footer>
);

export default Footer;
