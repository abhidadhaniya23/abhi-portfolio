import Navbar from "./navbar/Navbar";
import Script from "next/script";

const Layout = ({ component }) => {
    return (
        <>
            <div className="flex flex-row items-center min-h-screen bg-gradient-to-r to-darkBluePrimary from-darkLightBluePrimary">
                <div className="w-1/5">
                    <Navbar />
                </div>
                <div className="flex flex-row items-center justify-center w-full">
                    <div className="flex flex-col items-center justify-center w-3/5 mx-auto">{component}</div>
                </div>
            </div>
            <Script src="https://kit.fontawesome.com/8b16cac71e.js" crossorigin="anonymous"></Script>
        </>
    );
};

export default Layout;
