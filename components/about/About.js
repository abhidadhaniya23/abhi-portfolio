import Heading from "../Heading";
import Image from "next/image";
import pic from "../../public/pic.jpg";
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
                <Heading heading="Who I am?" />
                <div className="flex flex-col items-center justify-center md:flex-row">
                    <motion.div variants={animations.photo} initial="initial" animate="animate" exit="exit" className="my-10 md:my-0 w-[80%] md:w-[50rem]">
                        <Image className="rounded-full" src={pic} alt="Abhi Dadhaniya" />
                    </motion.div>
                    <div className="px-0 text-xl text-justify md:p-5 md:ml-10 md:-mr-20 md:text-left text-lightBluePrimary">
                        <motion.p variants={animations.desc} initial="initial" animate="animate" exit="exit" className="my-2 leading-8">
                            Hello, I am Abhi Dadhaniya, a full-stack web developer at MERN Stack Technology. I am currently trying my hands on NEXT.Js framework. Till now, I have completed a few projects on React.Js as mentioned in my portfolio and meanwhile, gained some experience in graphic design.
                        </motion.p>
                        <div className="mt-8 text-justify md:mt-5 md:text-left">
                            <motion.p variants={animations.expert} initial="initial" animate="animate" exit="exit" className="mb-2">
                                Following are my expertise:
                            </motion.p>
                            <motion.p variants={animations.p1} initial="initial" animate="animate" exit="exit" className="pl-4 mt-1">
                                <i className="mr-2 text-xs text-cyanPrimary fa-solid fa-diamond"></i>Dealing with API in React.JS.
                            </motion.p>
                            <motion.p variants={animations.p2} initial="initial" animate="animate" exit="exit" className="pl-4 mt-1">
                                <i className="mr-2 text-xs text-cyanPrimary fa-solid fa-diamond"></i>Developing REST APIs using Node.js & Express.js.
                            </motion.p>
                            <motion.p variants={animations.p3} initial="initial" animate="animate" exit="exit" className="pl-4 mt-1">
                                <i className="mr-2 text-xs text-cyanPrimary fa-solid fa-diamond"></i>Authentication with backend and database, using MongoDB.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
