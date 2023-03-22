import "../styles/globals.css";
import React from "react";
import { AnimatePresence } from "framer-motion";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <NextNProgress color="#65FEDA" />
      <AnimatePresence exitBeforeEnter>
        <Layout>
          <Component {...pageProps} key={router.pathname} />;
          <Script
            src="https://kit.fontawesome.com/8b16cac71e.js"
            crossorigin="anonymous"
          ></Script>
        </Layout>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
