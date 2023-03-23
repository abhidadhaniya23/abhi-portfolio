import Head from "next/head";
import Layout from "../../components/Layout";
import ProjectsComponent from "../../components/projects/ProjectsComponent";
import { GetStaticProps } from "next";
import getProjects from "../../getProjectData";
import { projectDataTypes } from "../../types/ProjectTypes";

const Project = (props: any) => {
  const projectsData: projectDataTypes[] = props.projectsData;
  return (
    <>
      <Head>
        <title>Projects - Abhi Dadhaniya</title>
      </Head>
      <Layout>
        <ProjectsComponent projectsData={projectsData} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projectsData = getProjects();
  return {
    props: {
      projectsData,
    },
  };
};

export default Project;
