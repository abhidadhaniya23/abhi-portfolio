import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ name, img, index, url, category, selectedCategory }) => {
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
                <Link href={url}>
                    <a target={"_blank"}>
                        <div className="w-[9rem] h-[9rem] md:w-56 md:h-56 bg-lightBlueSecondary">
                            <Image src={img} alt={name} width="240px" height="240px" rel="noreferrer" />
                        </div>
                    </a>
                </Link>
                <h2 className="px-0 w-[9rem] md:w-auto py-1 text-base text-center md:py-4 md:px-0 md:text-lg text-darkBluePrimary">{name}</h2>
            </motion.div>
        </>
    );
};

export default ProjectCard;
