import { isMobile } from "react-device-detect";
import About from "../components/about/About";
import { EmailLine, SocialLine } from "../components/ConnectLine";
import Layout from "../components/Layout";
import Head from "next/head";

const about = () => {
    return (
        <>
            <Head>
                <title>Developer Abhi || About</title>
            </Head>
            {!isMobile && (
                <>
                    <SocialLine />
                    <EmailLine />
                </>
            )}
            <Layout component={<About />} />
        </>
    );
};

export default about;
