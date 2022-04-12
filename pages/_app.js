// import "../styles/globals.css";
import React from "react";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.pathname} />;
            </AnimatePresence>
        </>
    );
}

export default MyApp;
