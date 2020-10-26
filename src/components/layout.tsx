import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";
import TwoPassRenderer from "./twoPassRendere";

import "../styles/layout.css";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          logo {
            src
            alt
          }
          logoText
        }
      }
    }
  `);
  const { title, logo, logoText } = data.site.siteMetadata;

  return (
    <TwoPassRenderer>
      <Header
        // siteTitle={title}
        siteLogo={logo}
        logoText={logoText}
      />
      {children}
      <Footer />
    </TwoPassRenderer>
  );
};

export default Layout;
