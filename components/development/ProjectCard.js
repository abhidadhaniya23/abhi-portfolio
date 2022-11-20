import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ name, img, index, url }) => {
  const animations = {
    card: {
      initial: { opacity: 0, scale: 0.8 },
      exit: {
        opacity: 0,
        scale: 0.9,
        transition: { duration: 0.15, delay: index * 0.05 },
      },
      animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, delay: index * 0.1 + 0.3 },
      },
    },
  };
  return (
    <>
      <motion.a
        target={"_blank"}
        href={url}
        layout
        variants={animations.card}
        initial="initial"
        animate="animate"
        exit="exit"
        className={
          "projectDiv flex flex-col items-center group sm:w-1/2 w-11/12 bg-darkBluePrimary p-3 justify-center mx-2 md:mx-5 mb-3 rounded-lg"
        }
      >
        <div className="rounded-lg overflow-hidden">
          <Image
            src={img}
            alt={name}
            width="740"
            height="342"
            rel="noreferrer"
          />
        </div>
        <h2 className="px-2 flex flex-row justify-between items-center w-11/12 md:w-full py-1 text-base text-center md:py-2 md:px-4 md:text-lg text-white">
          {name}
          <span>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </span>
        </h2>
      </motion.a>
    </>
  );
};

export default ProjectCard;
