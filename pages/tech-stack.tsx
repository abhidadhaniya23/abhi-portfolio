import Layout from "../components/Layout";
import Skill from "../components/skills/Skill";
import Head from "next/head";

const skills = () => {
  return (
    <>
      <Head>
        <title>Tech Stack - Abhi Dadhaniya</title>
      </Head>
      <Layout>
        <Skill />
      </Layout>
    </>
  );
};

export default skills;
