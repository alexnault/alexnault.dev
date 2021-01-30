import Head from "next/head";
import { AppProps } from "next/app";

import { ThemeProvider } from "../components/themeContext";

import "../styles/globals.css";
import "../styles/fonts.css";
import "../styles/custom.css";

// TODO move
import "../styles/layout.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Alex Nault</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
