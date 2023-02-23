import { AnimatePresence, motion } from "framer-motion";
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
      <Link href={url} legacyBehavior>
        <motion.a
          target={url.includes("https") ? "_blank" : "_self"}
          href={url}
          layout
          variants={animations.card}
          initial="initial"
          animate="animate"
          exit="exit"
          className={
            "projectDiv cursor-pointer flex flex-col items-center group sm:w-3/4 w-full bg-darkBluePrimary p-3 justify-center mx-2 lg:mx-5 mb-3 rounded-lg"
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
          <h2 className="px-2 flex flex-row justify-between items-center w-11/12 lg:w-full py-1 text-base text-center lg:py-2 lg:px-4 lg:text-lg text-white">
            {name}
            <span>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </span>
          </h2>
        </motion.a>
      </Link>
    </>
  );
};

export default ProjectCard;
