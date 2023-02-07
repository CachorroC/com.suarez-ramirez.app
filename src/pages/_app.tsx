/** @format */

import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/style.scss";
import "../styles/form.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
