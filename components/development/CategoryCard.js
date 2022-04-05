import { motion } from "framer-motion";

const CategoryCard = ({ index, name, icon, selectedCategory, setSelectedCategory }) => {
    const animations = {
        card: {
            initial: { opacity: 0, x: -20 },
            exit: { opacity: 0, x: 10, transition: { duration: 0.15, delay: 0.1 } },
            animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: index * 0.1 + 0.2 } },
        },
    };
    return (
        <>
            <motion.div onClick={(event) => setSelectedCategory(event.target.innerText)} variants={animations.card} initial="initial" animate="animate" exit="exit" className="sticky flex flex-col items-center justify-center w-56 mt-2">
                <a className={`${name === selectedCategory ? "text-cyanPrimary border-cyanPrimary" : ""} cursor-pointer py-3 focus:text-cyanPrimary focus:border-cyanPrimary my-1 w-full border-[1px] border-transparent duration-300 hover:border-cyanPrimary rounded-[4px] text-lg px-7 font-codeText text-lightBluePrimary bg-darkBluePrimary`}>
                    <i className={`mr-4 text-cyanPrimary ${icon}`}></i>
                    {name}
                </a>
            </motion.div>
        </>
    );
};

export default CategoryCard;
