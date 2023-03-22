import Heading from "../Heading";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const animations = {
    photo: {
      initial: { opacity: 0, x: 20 },
      exit: { opacity: 0, x: 10, transition: { duration: 0.3, delay: 0.1 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.2 } },
    },
    desc: {
      initial: { opacity: 0, x: -20 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.3, delay: 0.1 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.3 } },
    },
    expert: {
      initial: { opacity: 0, x: -20 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.3, delay: 0.1 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.4 } },
    },
    p1: {
      initial: { opacity: 0, x: -20 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.3, delay: 0.15 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.5 } },
    },
    p2: {
      initial: { opacity: 0, x: -20 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.3, delay: 0.18 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.6 } },
    },
    p3: {
      initial: { opacity: 0, x: -20 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.3, delay: 0.21 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.7 } },
    },
  };
  return (
    <>
      <div className="py-20">
        <Heading heading="Who Am I?" />
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          <motion.div
            variants={animations.photo}
            initial="initial"
            animate="animate"
            exit="exit"
            // className="my-10 lg:my-0 w-[80%] lg:w-[50rem]"
            className="my-10 lg:my-0"
          >
            <Image
              className="rounded-full"
              src="/pic.jpg"
              width={500}
              height={500}
              alt="Abhi Dadhaniya"
            />
          </motion.div>
          <div className="text-xl text-justify text-lightBluePrimary">
            <motion.p
              variants={animations.desc}
              initial="initial"
              animate="animate"
              exit="exit"
              className="my-2 leading-8"
            >
              I help businesses to grow their online presence and increase their
              sales by creating beautiful animated, responsive and fast
              websites. I work at the intersection of design and development,
              and I am passionate about creating websites that provide
              intuitive, pixel-perfect user experiences.
            </motion.p>
            <div className="mt-8 text-justify lg:mt-5 lg:text-left">
              <motion.p
                variants={animations.expert}
                initial="initial"
                animate="animate"
                exit="exit"
                className="mb-2"
              >
                Following are my expertise:
              </motion.p>
              <motion.p
                variants={animations.p1}
                initial="initial"
                animate="animate"
                exit="exit"
                className="pl-4 mt-1"
              >
                <i className="mr-3 text-xs text-cyanPrimary fa-solid fa-diamond"></i>
                Beautiful animated stunning websites with fast loading speed.
              </motion.p>
              <motion.p
                variants={animations.p2}
                initial="initial"
                animate="animate"
                exit="exit"
                className="pl-4 mt-1"
              >
                <i className="mr-3 text-xs text-cyanPrimary fa-solid fa-diamond"></i>
                Full stack web apps with best user experience and server
                interactivity.
              </motion.p>
              <motion.p
                variants={animations.p3}
                initial="initial"
                animate="animate"
                exit="exit"
                className="pl-4 mt-1"
              >
                <i className="mr-3 text-xs text-cyanPrimary fa-solid fa-diamond"></i>
                Helps in SEO to rank your website on top of search engine
                results.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
