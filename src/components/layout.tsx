import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import "fontsource-inter/400.css";
// import "fontsource-inter/700.css";
import "fontsource-nunito/400.css";
import "fontsource-nunito/700.css";
// import "fontsource-nunito-sans/400.css";
// import "fontsource-nunito-sans/700.css";
// import "fontsource-montserrat/700.css";
// import "fontsource-montserrat/700.css";

import Header from "./header";
import Footer from "./footer";
import { ThemeProvider } from "./themeContext";

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
        }
      }
    }
  `);
  const { title, logo, logoText, defaultTheme } = data.site.siteMetadata;

  return (
    <ThemeProvider>
      <div className="layout">
        <Header
          // siteTitle={title}
          siteLogo={logo}
          logoText={logoText}
          defaultTheme={defaultTheme}
        />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
