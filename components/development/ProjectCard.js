import { motion } from "framer-motion";

const ProjectCard = ({ name, index, category, selectedCategory }) => {
    const animations = {
        card: {
            initial: { opacity: 0, y: 20 },
            exit: { opacity: 0, y: 10, transition: { duration: 0.15, delay: index * 0.1 + 0.2 } },
            animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: index * 0.1 + 0.4 } },
        },
    };
    return (
        <>
            <motion.div variants={animations.card} initial="initial" animate="animate" exit="exit" className={selectedCategory !== category ? "hidden" : "flex flex-col items-center justify-center mx-2 md:mx-5 mb-5 overflow-hidden rounded-lg bg-gray-50"}>
                <div className="w-[9rem] h-[9rem] md:w-56 md:h-56 bg-lightBlueSecondary"></div>
                <h2 className="px-1 py-1 text-base text-center md:py-4 md:px-0 md:text-lg text-darkBluePrimary">{name}</h2>
            </motion.div>
        </>
    );
};

export default ProjectCard;