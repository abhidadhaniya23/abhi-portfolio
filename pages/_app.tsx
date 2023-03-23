import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps, router }: any) {
  return (
    <>
      <NextNProgress color="#65FEDA" />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.pathname} />;
        <Script
          src="https://kit.fontawesome.com/8b16cac71e.js"
          // @ts-ignore
          crossorigin="anonymous"
        ></Script>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
