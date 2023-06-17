import "../styles/globals.css";
import "../styles/style.css";
import type { AppPropsWithLayout } from "../types/next";

import { ApolloProvider } from "@apollo/client";
import { Client } from "@/apollo";

import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { Layout } from "@/components/layout";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={Client}>
        <Toaster />
        <Layout>{getLayout(<Component {...pageProps} />, pageProps)}</Layout>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
