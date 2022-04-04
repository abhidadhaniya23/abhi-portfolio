import About from "../components/about/About";
import { EmailLine, SocialLine } from "../components/ConnectLine";
import Layout from "../components/Layout";

const about = () => {
    return (
        <>
            <SocialLine />
            <EmailLine />
            <Layout component={<About />} />
        </>
    );
};

export default about;
