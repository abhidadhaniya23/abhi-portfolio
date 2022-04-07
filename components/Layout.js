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
            </Head>
            <MenuBarContext.Provider value={{ menuActive, setMenuActive }}>
                <Menu />
                <div className="flex flex-row items-center min-h-screen bg-gradient-to-r to-darkBluePrimary from-darkLightBluePrimary">
                    <div className="absolute top-0 z-10 w-full md:relative md:w-1/5">
                        <Navbar />
                    </div>
                    <div className="flex flex-row items-center justify-center w-full">
                        <div className="flex flex-col items-center justify-center w-full px-0 mx-auto md:px-0 md:w-3/5">{component}</div>
                    </div>
                </div>
                <Script src="https://kit.fontawesome.com/8b16cac71e.js" crossorigin="anonymous"></Script>
            </MenuBarContext.Provider>
        </>
    );
};

export default Layout;
