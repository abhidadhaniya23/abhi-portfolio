import Heading from "../Heading";
import Image from "next/image";
import pic from "../../public/pic.jpg";
import { motion } from "framer-motion";

const About = () => {
    const animations = {
        photo: {
            initial: { opacity: 0, x: 20 },
            exit: { opacity: 0, x: 10, transition: { duration: 0.3 } },
            animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.2 } },
        },
        desc: {
            initial: { opacity: 0, x: -20 },
            exit: { opacity: 0, x: -10, transition: { duration: 0.3 } },
            animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.3 } },
        },
        expert: {
            initial: { opacity: 0, x: -20 },
            exit: { opacity: 0, x: -10, transition: { duration: 0.3 } },
            animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.4 } },
        },
        p1: {
            initial: { opacity: 0, x: -20 },
            exit: { opacity: 0, x: -10, transition: { duration: 0.3 } },
            animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.5 } },
        },
        p2: {
            initial: { opacity: 0, x: -20 },
            exit: { opacity: 0, x: -10, transition: { duration: 0.3 } },
            animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.6 } },
        },
        p3: {
            initial: { opacity: 0, x: -20 },
            exit: { opacity: 0, x: -10, transition: { duration: 0.3 } },
            animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.7 } },
        },
    };
    return (
        <>
            <Heading heading="Who I am?" />
            <div className="flex flex-row items-center justify-center">
                <motion.div variants={animations.photo} initial="initial" animate="animate" exit="exit" className="w-[50rem]">
                    <Image className="rounded-full" src={pic} alt="Abhi Dadhaniya" />
                </motion.div>
                <div className="p-5 ml-10 -mr-20 text-xl text-lightBluePrimary">
                    <motion.p variants={animations.desc} initial="initial" animate="animate" exit="exit" className="my-2 leading-8">
                        Hello, I'm Abhi Dadhaniya, a full-stack web developer at MERN Stack Technology. I'm currently trying my hands on NEXT.Js framework. Till now, I've completed a few projects on React.Js as mentioned in my portfolio and meanwhile, gained some experience in graphic design.
                    </motion.p>
                    <div className="mt-5">
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
        </>
    );
};

export default About;
