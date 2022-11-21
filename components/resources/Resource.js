import Heading from "../Heading";
import Image from "next/image";
import { motion } from "framer-motion";

const Resource = () => {
  const animations = {
    photo: {
      initial: { opacity: 0, x: 50 },
      exit: { opacity: 0, x: 10, transition: { duration: 0.1 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.1 } },
    },
    desc1: {
      initial: { opacity: 0, x: -50 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.1, delay: 0.1 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.2 } },
    },
    desc2: {
      initial: { opacity: 0, x: -50 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.1, delay: 0.15 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.2 } },
    },
    btn: {
      initial: { opacity: 0, y: -50 },
      exit: { opacity: 0, y: -20, transition: { duration: 0.1, delay: 0.15 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.2 } },
    },
  };
  return (
    <>
      <div className="py-10 px-7">
        <Heading heading="Development Resources" />
        <div className="w-[95%] sm:w-[70%] mx-auto flex flex-col items-center justify-center mb-16 mt-20">
          <motion.div
            variants={animations.photo}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mx-auto shadow-lg"
          >
            <Image
              src="/project/webDevResources.gif"
              className="rounded-lg"
              width={740}
              height={342}
              alt="Web Development Resources"
            />
          </motion.div>
          <div className="w-full mx-auto text-lightBluePrimary px-1 text-left md:text-left py-10 text-lg font-bodyText flex flex-col items-center justify-center">
            <motion.span
              variants={animations.desc1}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mb-3 tracking-tight sm:tracking-wide"
            >
              Eager to start web development but don&apos;t know from where to
              start? Don&apos;t worry we have got your back. I and
              <span className="mx-1 text-cyanPrimary">
                <a
                  className="font-codeText"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.rohankiratsata.xyz/"
                >
                  Rohan
                </a>
              </span>
              have created this resources. If you visit this page, it will glad
              to us and you can share your friends also. Share with your friends
              too who are looking for the resources.
            </motion.span>
            <motion.a
              href="https://web-dev-resources.notion.site/web-dev-resources/Web-Development-Resources-be1207bcc32e434481c1ce6e90756964"
              target="_blank"
              rel="noreferrer"
              variants={animations.btn}
              initial="initial"
              animate="animate"
              exit="exit"
              className="btn"
            >
              Get for Free
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resource;
