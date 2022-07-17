import Heading from "../Heading";
import Image from "next/image";
import resources from "../../public/resources.png";
import agency from "../../public/project/agency.png";
import { motion } from "framer-motion";

const GigaWebContent = () => {
    const animations = {
        photo: {
            initial: { opacity: 0, x: 50 },
            exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
            animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.1 } },
        },
        desc1: {
            initial: { opacity: 0, x: -50 },
            exit: { opacity: 0, x: -20, transition: { duration: 0.2, delay: 0.1 } },
            animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.2 } },
        },
        desc2: {
            initial: { opacity: 0, x: -50 },
            exit: { opacity: 0, x: -20, transition: { duration: 0.2, delay: 0.15 } },
            animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.3 } },
        },
        btn: {
            initial: { opacity: 0, y: -50 },
            exit: { opacity: 0, y: -20, transition: { duration: 0.2, delay: 0.1 } },
            animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.4 } },
        },
    };
    return (
        <>
            <div className="py-10 px-7">
                <Heading heading="GigaWeb Agency" />
                <div className="flex flex-col items-center justify-center my-16 md:flex-row">
                    <motion.div variants={animations.photo} initial="initial" animate="animate" exit="exit" className="w-[80%] mx-auto shadow-lg">
                        <Image src={agency} className="rounded-lg" alt="Web Development Resources" />
                    </motion.div>
                    <div className="text-lightBluePrimary px-1 text-justify md:text-left md:px-10 py-10 text-lg font-bodyText flex w-full md:w-[60rem] flex-col items-center md:items-start justify-center">
                        <motion.span variants={animations.desc1} initial="initial" animate="animate" exit="exit" className="mb-3">
                            GigaWeb is a team of web developers👨🏻‍💻 who are passionate about building websites and helping small businesses & individuals, providing services like Full-Stack Web Development, UI/UX designing, managing your social handles, and No-Code websites.
                        </motion.span>
                        <motion.span variants={animations.desc2} initial="initial" animate="animate" exit="exit" className="mb-3">
                            We are co-founders of GigaWeb Agency. Don't hesitate to contact us if you have any questions or want to work with us.
                        </motion.span>
                        <motion.a href="https://www.gigaweb.in/" target="_blank" rel="noreferrer" variants={animations.btn} initial="initial" animate="animate" exit="exit" className="btn">
                            Get Services
                        </motion.a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GigaWebContent;
