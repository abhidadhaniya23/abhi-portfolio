import Navbar from "./navbar/navbar";
import Script from "next/script";

const Layout = ({ component }) => {
    return (
        <>
            <div className="flex flex-row items-center min-h-screen bg-gradient-to-r to-darkBluePrimary from-darkLightBluePrimary">
                <div className="w-1/5">
                    <Navbar />
                </div>
                <div>
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-[55%]">{component}</div>
                </div>
            </div>
            <Script src="https://kit.fontawesome.com/8b16cac71e.js" crossorigin="anonymous"></Script>
        </>
    );
};

export default Layout;
