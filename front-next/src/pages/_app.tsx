import "../styles/globals.css";
<<<<<<< HEAD
import "../styles/style.css";
import "../assets/css/vendor/vendor.min.css";

import Head from "next/head";

import type { AppPropsWithLayout } from "../types/next";

import { ApolloProvider } from "@apollo/client";
import { Client } from "@/graphql/apollo";

import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { Layout } from "@/components/layout";

=======
import type { AppPropsWithLayout } from "../types/next";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { Client } from "src/apollo";
// import { theme } from "../styled.config";
import { Provider } from "react-redux";
// import { store } from "store";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

>>>>>>> e4e73bc... add graphql to front
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
<<<<<<< HEAD
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
      </Head>
      <SessionProvider session={pageProps.session}>
        <ApolloProvider client={Client}>
          <Toaster />
          <Layout>{getLayout(<Component {...pageProps} />, pageProps)}</Layout>
        </ApolloProvider>
      </SessionProvider>
    </>
=======
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={Client}>
        <Toaster />
        {getLayout(<Component {...pageProps} />, pageProps)}
      </ApolloProvider>
    </SessionProvider>
>>>>>>> e4e73bc... add graphql to front
  );
}

export default MyApp;
