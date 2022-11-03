import Navbar from "./navbar/Navbar";
import Script from "next/script";
import Menu from "./menu/Menu";
import MenuBarContext from "../context/MenuBarContext";
import { useState } from "react";
import Head from "next/head";
import Development from "./development/Development";

const Layout = ({ component, width }) => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="MERN Stack Developer - Abhi Dadhaniya" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content="I have been a web developer for the past 2 years. I specialize in JavaScript, ReactJS, NodeJS & ExpressJS and I’m using MongoDB as Database."
        />
        <meta
          property="og:title"
          content="MERN Stack Developer - Abhi Dadhaniya"
        />
        <meta
          property="og:image"
          content="https://www.web-developer-abhi.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpic.7a6f735d.jpg&w=640&q=75"
        />
        <meta
          property="og:description"
          content="I have been a web developer for the past 2 years. I specialize in JavaScript, ReactJS, NodeJS & ExpressJS and I’m using MongoDB as Database."
        />
        <meta
          property="og:url"
          content={`https://www.web-developer-abhi.me/`}
        />
        <meta itemProp="name" content="MERN Stack Developer - Abhi Dadhaniya" />
        <meta
          itemProp="description"
          content="I have been a web developer for the past 2 years. I specialize in JavaScript, ReactJS, NodeJS & ExpressJS and I’m using MongoDB as Database."
        />
        <meta
          itemProp="image"
          content="https://www.web-developer-abhi.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpic.7a6f735d.jpg&w=640&q=75"
        />
        <meta
          property="twitter:image"
          content="https://avatars.githubusercontent.com/u/70057423?v=4"
        />
        <meta
          property="twitter:title"
          content="MERN Stack Developer - Abhi Dadhaniya"
        />
        <meta
          property="twitter:description"
          content="I have been a web developer for the past 2 years. I specialize in JavaScript, ReactJS, NodeJS & ExpressJS and I’m using MongoDB as Database."
        />
        <meta property="twitter:creator" content="@AbhiDadhaniya3" />
        <meta
          name="keywords"
          content="Abhi Dadhaniya, MERN Stack, Developer, Portfolio"
        />
        <meta
          name="google-site-verification"
          content="eVbmWrqbc7ik87pvSg21efPrLvJ24IZo-58yBvzSxDY"
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#071124" />
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
            <div
              className={`${
                width ? "md:w-3/4" : "md:w-3/5"
              } flex flex-col items-center justify-center w-full px-0 mx-auto md:px-0`}
            >
              {component}
            </div>
          </div>
        </div>
      </MenuBarContext.Provider>

      <Script
        id="g_analytics_id"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
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

      <Script
        id="g_analytics_id_UA"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_UA_ID}`}
      />
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
