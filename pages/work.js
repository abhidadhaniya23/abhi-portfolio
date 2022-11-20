import Development from "../components/development/Development";
import Layout from "../components/Layout";
import Head from "next/head";

const work = () => {
  return (
    <>
      <Head>
        <title>Projects - Abhi Dadhaniya</title>
      </Head>
      <Layout component={<Development />} width={true} />
    </>
  );
};

export default work;
