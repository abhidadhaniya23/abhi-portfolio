import Heading from "../Heading";
import { projectDataTypes } from "../../types/ProjectTypes";
import ProjectCard from "./ProjectCard";

type PropTypes = {
  projectsData: projectDataTypes[];
};

const ProjectsComponent = ({ projectsData }: PropTypes) => {
  // console.log(projectsData);
  return (
    <>
      <div className="font-bodyText flex flex-col justify-start py-10 sm:py-20 items-center min-h-screen h-full gap-10">
        <Heading heading="What I've Done" />
        <div className="flex flex-col justify-center items-center gap-12 w-full md:w-3/4">
          {projectsData.map((project, index) => (
            <ProjectCard project={project} key={index} delay={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsComponent;
