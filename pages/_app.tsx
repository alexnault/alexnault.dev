import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "styles/fonts.css";
import "styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Alex Nault</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
