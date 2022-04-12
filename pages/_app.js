import "../styles/globals.css";
import "../styles/blogStyles.css";
import "../public/prism/prism.css";
import React from "react";
import { AnimatePresence } from "framer-motion";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <NextNProgress color="#65FEDA" />
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.pathname} />;<Script src="https://kit.fontawesome.com/8b16cac71e.js" crossorigin="anonymous"></Script>
            </AnimatePresence>
        </>
    );
}

export default MyApp;
