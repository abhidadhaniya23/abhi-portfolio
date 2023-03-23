import { projectDataTypes } from "../../types/ProjectTypes";
import Link from "next/link";
import Image from "next/image";
import { RiShareCircleFill } from "react-icons/ri";
import { motion } from "framer-motion";

type PropTypes = {
  project: projectDataTypes;
  delay: number;
};

const ProjectCard = ({ project, delay }: PropTypes) => {
  const animations = {
    card: {
      initial: { opacity: 0, scale: 0.8 },
      exit: {
        opacity: 0,
        scale: 0.9,
        // transition: { duration: 0.15, delay: delay * 0.05 },
        transition: { duration: 0.15, delay: 0.05 },
      },
      animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, delay: delay * 0.1 },
        // transition: { duration: 0.3, delay: 0.3 },
      },
    },
  };
  return (
    <>
      <motion.div
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ once: true }}
        variants={animations.card}
        key={project.data.link}
        className="flex flex-col justify-center items-center gap-4 w-full"
      >
        <Link
          href={`/project/${project.slug}`}
          className="w-full relative rounded-lg overflow-hidden group"
        >
          <Image
            src={`/project/featured/${project.data.image}`}
            width={1200}
            height={800}
            alt={project.data.name}
            className="w-full h-full object-cover group-hover:scale-110 duration-500"
          />
          <p className="opacity-0 flex-row gap-2 group-hover:opacity-100 duration-300 text-2xl md:text-3xl absolute top-0 w-full h-full flex justify-center items-center bg-darkBluePrimary/90 text-white">
            Learn More
            <RiShareCircleFill />
          </p>
        </Link>
        <Link
          href={`/project/${project.slug}`}
          className="flex flex-col gap-2 w-full"
        >
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-2xl md:text-3xl text-lightBluePrimary font-medium">
              {project.data.name}
            </h2>
            <span className="flex text-xs md:text-sm rounded-full text-cyanPrimary px-2 md:px-3 py-0.5 md:py-1 font-normal border border-cyanPrimary">
              {project.data.tag}
            </span>
          </div>
          <p className="text-sm md:text-base text-lightBluePrimary/70 font-light">
            {project.data.description}
          </p>
        </Link>
      </motion.div>
    </>
  );
};

export default ProjectCard;
