import { useEffect } from "react";
import Head from "next/head";
import { AppProps } from "next/app";

import { ThemeProvider } from "components/themeContext";

import "../styles/globals.css";
// TODO move/remove
import "../styles/layout.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected Material UI CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      // @ts-ignore
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Alex Nault</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
