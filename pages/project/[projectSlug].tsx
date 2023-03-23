import Head from "next/head";
import Layout from "../../components/Layout";
import getProjects from "../../getProjectData";
import { GetStaticPaths, GetStaticProps } from "next";
import Heading from "../../components/Heading";
import { projectDataTypes } from "../../types/ProjectTypes";
import Image from "next/image";
import { RiShareCircleFill } from "react-icons/ri";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

const ProjectSlug = (props: any) => {
  const project: projectDataTypes = props.project;
  const content = props.content;
  const animation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0 },
  };
  return (
    <>
      <Head>
        <title>Project - Abhi Dadhaniya</title>
      </Head>
      <Layout>
        <>
          <Heading heading="Project Description" />
          <motion.div
            variants={animation}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            className="font-bodyText text-lightBluePrimary mt-16 flex flex-col justify-center items-start gap-4 w-full md:w-4/5 mx-auto"
          >
            <Image
              src={`/project/preview/${project.data.previewImage}`}
              width={1200}
              height={800}
              alt={project.data.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl md:text-4xl mt-4 font-semibold">
                {project.data.name}
              </h1>
              <p className="text-base md:text-lg font-light text-lightBluePrimary/60">
                {project.data.description}
              </p>
            </div>
            <div className="text-base flex flex-row flex-wrap justify-start items-center gap-x-3 gap-y-1 text-lightBluePrimary/60">
              <a
                href={project.data.link}
                target=""
                className="flex flex-row items-center gap-2 text-cyanPrimary text-lg"
              >
                Visit
                <RiShareCircleFill />
              </a>
              <p>|</p>
              {project.data.githubLink && (
                <>
                  <a
                    href={project.data.githubLink}
                    className="flex flex-row items-center gap-2 text-cyanPrimary text-lg"
                  >
                    Github
                    <RiShareCircleFill />
                  </a>
                  <p>|</p>
                </>
              )}
              <p>{project.data.tag}</p>
              <p>|</p>
              <p>{project.data.date}</p>
            </div>
            <div className="flex flex-row flex-wrap gap-1.5 text-lightBluePrimary/80">
              {project.data.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm py-0.5 md:text-base border border-cyanPrimary/20 px-3 rounded-full font-light"
                >
                  {tech}
                </span>
              ))}
            </div>

            <article className="mt-10 prose-base lg:prose-lg prose-p:text-lightBluePrimary/70  prose-p:font-normal prose-li:list-disc prose-li:marker:text-cyanPrimary prose-blockquote:rounded-lg prose-headings:text-lightBluePrimary prose-blockquote:px-5 prose-strong:text-lightBluePrimary/90 prose-strong:font-medium prose-code:!font-code prose-pre:!bg-black prose-pre:p-0 prose-pre:m-0 prose-blockquote:py-0.5 prose-blockquote:border prose-blockquote:border-solid prose-blockquote:border-lightBluePrimary/10 prose-blockquote:text-lightBluePrimary/70 mx-auto prose-headings:text-lightBluePrimary/70 prose-headings:font-semibold prose-a:no-underline prose-a:border-b prose-a:pb-0.5 prose-a:border-dashed prose-a:border-cyanPrimary/70 hover:prose-a:border-solid hover:prose-a:border-cyanPrimary prose-a:text-lightBluePrimary/90 hover:prose-a:text-cyanPrimary prose-a:mx-1 text-lightBluePrimary/50 prose-a:duration-300">
              <ReactMarkdown>{content}</ReactMarkdown>
            </article>
          </motion.div>
        </>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projectsData = getProjects();
  const paths = projectsData.map((project) => ({
    params: { projectSlug: project.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectsData = getProjects();
  const project = projectsData.find(
    (project) => project.slug === params?.projectSlug
  );
  const content = project?.content;
  return {
    props: {
      project,
      content,
    },
  };
};

export default ProjectSlug;
