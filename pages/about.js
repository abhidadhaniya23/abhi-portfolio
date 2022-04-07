import { isMobile } from "react-device-detect";
import About from "../components/about/About";
import { EmailLine, SocialLine } from "../components/ConnectLine";
import Layout from "../components/Layout";

const about = () => {
    return (
        <>
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
