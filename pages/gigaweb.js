import Resource from "../components/resources/Resource";
import Layout from "../components/Layout";
import Head from "next/head";
import GigaWebContent from "../components/gigaweb/content";

const GigaWeb = () => {
  return (
    <>
      <Head>
        <title>Gigaweb Agency - Abhi Dadhaniya</title>
      </Head>
      <Layout component={<GigaWebContent />} />
    </>
  );
};

export default GigaWeb;
