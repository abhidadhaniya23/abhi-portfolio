import Heading from "../Heading";
import Image from "next/image";
import { motion } from "framer-motion";

const GigaWebContent = () => {
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
      <div className="py-10">
        <Heading heading="GigaWeb Agency" />
        <div className="flex flex-col items-center justify-center my-16 lg:flex-row">
          <motion.div
            variants={animations.photo}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-[80%] mx-auto shadow-lg"
          >
            <Image
              width={500}
              height={500}
              src="/project/agency.png"
              className="rounded-lg"
              alt="Web Development Resources"
            />
          </motion.div>
          <div className="text-lightBluePrimary px-1 text-left lg:text-left lg:px-10 py-10 text-lg font-bodyText flex w-full lg:w-[60rem] flex-col items-center lg:items-start justify-center">
            <motion.span
              variants={animations.desc1}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mb-3"
            >
              GigaWeb is a team of web developers👨🏻‍💻 who are passionate about
              building websites and helping small businesses & individuals,
              providing services like Full-Stack Web Development, UI/UX
              designing, managing your social handles, and No-Code websites.
            </motion.span>
            <motion.span
              variants={animations.desc2}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mb-3"
            >
              I and
              <span className="mx-1 text-cyanPrimary font-bold">
                <a
                  className="font-codeText"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.rohankiratsata.xyz/"
                >
                  Rohan
                </a>
              </span>
              are co-founders of
              <span className="mx-1 text-cyanPrimary font-bold">
                <a
                  className="font-codeText"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.gigaweb.in/"
                >
                  GigaWeb
                </a>
              </span>
              Agency. Dont hesitate to contact us if you have any questions or
              want to work with us.
            </motion.span>
            <motion.a
              href="https://www.gigaweb.in/"
              target="_blank"
              rel="noreferrer"
              variants={animations.btn}
              initial="initial"
              animate="animate"
              exit="exit"
              className="btn"
            >
              Get Services
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
};

export default GigaWebContent;
