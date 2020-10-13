import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "fontsource-inter/400.css";
import "fontsource-inter/700.css";

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
          logo {
            src
            alt
          }
          logoText
          defaultTheme
          copyrights
          mainMenu {
            title
            path
          }
          showMenuItems
          menuMoreText
        }
      }
    }
  `);
  const {
    title,
    logo,
    logoText,
    defaultTheme,
    mainMenu,
    showMenuItems,
    menuMoreText,
    copyrights,
  } = data.site.siteMetadata;

  return (
    <div className="container">
      <Header
        // siteTitle={title}
        siteLogo={logo}
        logoText={logoText}
        defaultTheme={defaultTheme}
        mainMenu={mainMenu}
        mainMenuItems={showMenuItems}
        menuMoreText={menuMoreText}
      />
      <main>
        <div className="content">{children}</div>
      </main>
      <Footer copyrights={copyrights} />
    </div>
  );
};

export default Layout;
