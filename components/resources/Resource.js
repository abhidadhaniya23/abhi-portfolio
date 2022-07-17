import Heading from "../Heading";
import Image from "next/image";
import resources from "../../public/resources.png";
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
                <Heading heading="Web Development Resources" />
                <div className="flex flex-col items-start justify-center my-16 md:flex-row">
                    <motion.div variants={animations.photo} initial="initial" animate="animate" exit="exit" className="w-[80%] mx-auto shadow-lg">
                        <Image src={resources} className="rounded-lg" alt="Web Development Resources" />
                    </motion.div>
                    <div className="text-lightBluePrimary px-1 text-justify md:text-left md:px-10 py-10 text-lg font-bodyText flex w-full md:w-[60rem] flex-col items-center md:items-start justify-center">
                        <motion.span variants={animations.desc1} initial="initial" animate="animate" exit="exit" className="mb-3">
                            Eager to start web development but don't know from where to start? Don't worry we've got your back. With me friend,
                            <span className="mx-1 text-cyanPrimary">
                                <a className="font-codeText" target="_blank" rel="noreferrer" href="https://www.rohankiratsata.xyz/">
                                    Rohan,
                                </a>
                            </span>
                            If you visit this page, it will glad to us and you can share your friends also.
                        </motion.span>
                        <motion.span variants={animations.desc2} initial="initial" animate="animate" exit="exit" className="mb-3">
                            Share with your friends too who are looking for the resources.
                        </motion.span>
                        <motion.a href="https://web-dev-resources.notion.site/web-dev-resources/Web-Development-Resources-be1207bcc32e434481c1ce6e90756964" target="_blank" rel="noreferrer" variants={animations.btn} initial="initial" animate="animate" exit="exit" className="btn">
                            Get for Free
                        </motion.a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resource;
