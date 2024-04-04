import { useState } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";

import "styles/fonts.css";
import "styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5000,
            retry: 0,
          },
        },
      })
  );

  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Alex Nault</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
