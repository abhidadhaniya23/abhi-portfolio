import { motion } from "framer-motion";

const Heading = ({ heading }) => {
    const animations = {
        heading: {
            initial: { opacity: 0, y: -30 },
            exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
            animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        },
        line: {
            initial: { opacity: 0, width: 0 },
            exit: { opacity: 0, width: 0, transition: { duration: 0.3 } },
            animate: { opacity: 1, width: 80, transition: { duration: 0.4, delay: 0 } },
        },
    };

    return (
        <>
            <motion.h1 variants={animations.heading} initial="initial" animate="animate" exit="exit" className="text-5xl text-center font-bodyText text-cyanPrimary">
                {heading}
            </motion.h1>
            <motion.span variants={animations.line} initial="initial" animate="animate" exit="exit" className="block w-32 h-[1px] mx-auto my-5 bg-cyanPrimary"></motion.span>
        </>
    );
};

export default Heading;
