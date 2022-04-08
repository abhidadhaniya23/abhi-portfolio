import Contact from "../components/contact/Contact";
import Layout from "../components/Layout";
import { SocialLine } from "../components/ConnectLine";
import { EmailLine } from "../components/ConnectLine";
import Head from "next/head";

const contact = () => {
    return (
        <>
            <Head>
                <title>Developer Abhi || Contact</title>
            </Head>
            <SocialLine />
            <EmailLine />
            <Layout component={<Contact />} />
        </>
    );
};

export default contact;
