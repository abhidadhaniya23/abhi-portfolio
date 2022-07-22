import Navbar from "./navbar/Navbar";
import Script from "next/script";
import Menu from "./menu/Menu";
import MenuBarContext from "../context/MenuBarContext";
import { useState } from "react";
import Head from "next/head";

const Layout = ({ component }) => {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="title" content="MERN Stack Developer - Abhi Dadhaniya" />
                <meta name="description" content="I have been a web developer for the past 2 years. I specialize in JavaScript, ReactJS, NodeJS & ExpressJS and I’m using MongoDB as Database." />
                <meta name="keywords" content="MERN Stack, Developer, Portfolio" />
                <meta name="google-site-verification" content="eVbmWrqbc7ik87pvSg21efPrLvJ24IZo-58yBvzSxDY" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="15 days" />
                <meta name="author" content="Abhi Dadhaniya" />
            </Head>
            <MenuBarContext.Provider value={{ menuActive, setMenuActive }}>
                <Menu />
                <div className="flex flex-row items-center min-h-screen bg-gradient-to-r to-darkBluePrimary from-darkLightBluePrimary">
                    <div className="absolute top-0 z-10 w-full md:relative md:w-1/5">
                        <Navbar />
                    </div>
                    <div className="flex flex-row items-center justify-center w-full">
                        {/* <div className="flex flex-col items-center justify-center w-full px-0 mx-auto md:px-0 md:w-3/5">{component}</div> */}
                        <div className="flex flex-col items-center justify-center w-full px-0 mx-auto md:px-0 md:w-3/5">{component}</div>
                    </div>
                </div>
            </MenuBarContext.Provider>

            <Script id="g_analytics_id" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
            <Script id="g_analytics_script" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>

            <Script id="g_analytics_id_UA" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_UA_ID}`} />
            <Script id="g_analytics_script_UA" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_UA_ID}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
        </>
    );
};

export default Layout;
