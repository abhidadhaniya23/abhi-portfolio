import Navbar from "./navbar/Navbar";
import Script from "next/script";
import Menu from "./menu/Menu";
import MenuBarContext from "../context/MenuBarContext";
import { useState } from "react";
import Head from "next/head";

const Layout = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="google-site-verification"
          content="VsmjAnwqQzU4V2OyZHMBAEz3_h26oLzvfFRzvMKPYbs"
        />
        <meta
          name="title"
          content="Abhi Dadhaniya - Full Stack Web Developer"
        />
        <meta
          name="description"
          content="I'm a full stack web developer based in India. I help clients to
          build beautiful animated and stunning websites from scratch."
        />
        <meta
          property="og:title"
          content="Abhi Dadhaniya - Full Stack Web Developer"
        />
        <meta
          property="og:image"
          content="https://www.abhidadhaniya.com/og.png"
        />
        <meta
          property="og:description"
          content="I'm a full stack web developer based in India. I help clients to
          build beautiful animated and stunning websites from scratch."
        />
        <meta property="og:url" content={`https://www.abhidadhaniya.com/`} />
        <meta
          itemProp="name"
          content="Abhi Dadhaniya - Full Stack Web Developer"
        />
        <meta
          itemProp="description"
          content="I'm a full stack web developer based in India. I help clients to
          build beautiful animated and stunning websites from scratch."
        />
        <meta itemProp="image" content="https://www.abhidadhaniya.com/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://www.abhidadhaniya.com/twitter.png"
        />
        <meta
          name="twitter:title"
          content="Abhi Dadhaniya - Full Stack Web Developer"
        />
        <meta
          name="twitter:description"
          content="I'm a full stack web developer based in India. I help clients to
          build beautiful animated and stunning websites from scratch."
        />
        <meta name="twitter:creator" content="@AbhiDadhaniya3" />
        <meta
          name="keywords"
          content="Abhi Dadhaniya, MERN Stack, Developer, Portfolio,stunning websites, websites from scratch, animated websites, freelancer"
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
        <div className="grid grid-cols-10 items-center justify-center min-h-screen bg-gradient-to-r to-darkBluePrimary from-darkLightBluePrimary">
          <div className="z-20 fixed top-0 lg:relative col-span-2 w-full">
            <Navbar />
          </div>
          {/* <div className="col-span-10 lg:col-span-8 lg:max-w-4xl mx-auto"> */}
          <div className="px-10 lg:px-0 col-span-10 lg:col-span-8 max-w-4xl w-full mx-auto self-center items-center justify-center">
            {children}
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
