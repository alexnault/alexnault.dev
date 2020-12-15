import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

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
          logoText
        }
      }
    }
  `);
  const { title, logoText } = data.site.siteMetadata;

  return (
    <>
      <Header
        // siteTitle={title}
        logoText={logoText}
      />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
