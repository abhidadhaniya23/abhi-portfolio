import Resource from "../components/resources/Resource";
import Layout from "../components/Layout";
import Head from "next/head";

const DevelopmentResources = () => {
  return (
    <>
      <Head>
        <title>Resources - Abhi Dadhaniya</title>
      </Head>
      <Layout component={<Resource />} />
    </>
  );
};

export default DevelopmentResources;
