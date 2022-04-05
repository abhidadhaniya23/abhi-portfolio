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
            <motion.div variants={animations.card} initial="initial" animate="animate" exit="exit" className={selectedCategory !== category ? "hidden" : "flex flex-col items-center justify-center mx-5 mb-5 overflow-hidden rounded-lg bg-darkBluePrimary"}>
                <div className="w-56 h-56 bg-lightBlueSecondary"></div>
                <h2 className="py-4 text-lg text-lightBluePrimary">{name}</h2>
            </motion.div>
        </>
    );
};

export default ProjectCard;
