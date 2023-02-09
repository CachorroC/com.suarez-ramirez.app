/** @format */

import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/style.scss";
import "../styles/form.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
