import { motion } from "framer-motion";
import Image from "next/image";

const SkillCard = ({ name, url, index }) => {
    const animations = {
        card: {
            initial: { opacity: 0, y: -20 },
            exit: { opacity: 0, y: 0, transition: { duration: 0.3, delay: index * 0.1 + 0.2 } },
            animate: { opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.1 + 1 } },
        },
    };

    return (
        <motion.h3 variants={animations.card} animate="animate" exit="exit" initial="initial" className="flex flex-row items-center rounded-[4px] justify-start w-full py-2 mb-3 text-xl text-left px-7 bg-darkBluePrimary text-lightBluePrimary">
            <div className="w-8 mt-1 mr-4">
                <Image src={url} alt={name} />
            </div>
            {name}
        </motion.h3>
    );
};

export default SkillCard;
