import About from "../components/about/About";
import Layout from "../components/Layout";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>About - Abhi Dadhaniya</title>
      </Head>
      <Layout>
        <About />
      </Layout>
    </>
  );
};

export default about;
