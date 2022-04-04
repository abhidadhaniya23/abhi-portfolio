import Contact from "../components/contact/Contact";
import Layout from "../components/Layout";
import { SocialLine } from "../components/ConnectLine";
import { EmailLine } from "../components/ConnectLine";

const contact = () => {
    return (
        <>
            <SocialLine />
            <EmailLine />
            <Layout component={<Contact />} />
        </>
    );
};

export default contact;
