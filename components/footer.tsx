import React from "react";
import { Link, Divider } from "@material-ui/core";

import style from "styles/footer.module.css";

const Footer = () => (
  <footer className={style.footer}>
    <Link color="textSecondary" href="https://github.com/alexnault">
      GitHub
    </Link>
    <Divider orientation="vertical" className={style.divider} />
    <Link color="textSecondary" href="https://www.linkedin.com/in/naultalex">
      LinkedIn
    </Link>
    <Divider orientation="vertical" className={style.divider} />
    <Link color="textSecondary" href="https://twitter.com/nault_alex">
      Twitter
    </Link>
  </footer>
);

export default Footer;
