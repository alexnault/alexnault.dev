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
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider, Container } from "@material-ui/core";

import Header from "./header";
import Footer from "./footer";

import "../styles/layout.css";

type Props = {
  children: React.ReactNode;
};

// A custom theme for this app
const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: "#ff79c6",
  //   },
  // },
  breakpoints: {
    values: {
      xs: 0,
      sm: 776, // 728 + (24 * 2)
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: [
      "Nunito",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    // htmlFontSize: 20,
    fontSize: 20,
    // fontSize: 16,
    // rien, body1 = 16, body2 = 14, standard = 14
    // 16px, body1 = 18.28, body2 = 16, standard = 16
    h1: {
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h2: {
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h5: {
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h6: {
      fontWeight: 700,
      lineHeight: 1.3,
    },
    body1: {
      // fon
      // fontSize: "1.125rem",
    },
    body2: {
      // fontSize: "1.25rem", // 20px
    },
  },
  shadows: [
    "none",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",
    "rgba(0, 255, 0, 0.04) 0px 5px 15px 0px",

    // "0 15px 30px rgba(0, 0, 0, 0.1)"
    // "rgba(64, 62, 61, 0.05) 0px 5px 15px 0px",

    // "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    // "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    // "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    // "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    // "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    // "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    // "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    // "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    // "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    // "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    // "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    // "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    // "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    // "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    // "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    // "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    // "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    // "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    // "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    // "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    // "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    // "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    // "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    // "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  ],
});

const them2 = responsiveFontSizes(theme);

console.log(theme.typography.body1);
console.log(theme.typography.body2);

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
        }
      }
    }
  `);
  const {
    title,
    logo,
    logoText,
    defaultTheme,
    copyrights,
  } = data.site.siteMetadata;

  return (
    <ThemeProvider theme={them2}>
      <CssBaseline />
      <div className="container">
        <Header
          // siteTitle={title}
          siteLogo={logo}
          logoText={logoText}
          defaultTheme={defaultTheme}
        />
        {children}
        {/* <Container maxWidth="md" component="main" className="content">
          {children}
        </Container> */}
        <Footer copyrights={copyrights} />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
