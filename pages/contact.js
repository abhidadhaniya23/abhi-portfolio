import Contact from "../components/contact/Contact";
import Layout from "../components/Layout";
import { SocialLine } from "../components/ConnectLine";
import { EmailLine } from "../components/ConnectLine";
import Head from "next/head";
import { isMobile } from "react-device-detect";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact - Abhi Dadhaniya</title>
      </Head>
      {!isMobile ? (
        <>
          <SocialLine />
          <EmailLine />
        </>
      ) : (
        <></>
      )}
      <Layout component={<Contact />} />
    </>
  );
};

export default contact;
