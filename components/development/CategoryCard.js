import { motion } from "framer-motion";
import { useEffect } from "react";

const CategoryCard = ({
  index,
  name,
  icon,
  projects,
  setFilteredProjects,
  selectedCategory,
  id,
  setSelectedCategory,
}) => {
  const animations = {
    card: {
      initial: { opacity: 0, y: 20 },
      exit: {
        opacity: 0,
        y: 10,
        transition: { duration: 0.15, delay: index * 0.05 },
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, delay: index * 0.1 + 0.2 },
      },
    },
  };
  useEffect(() => {
    const filteredProjectsArr = projects.filter((project) =>
      project.categoryId.includes(selectedCategory)
    );
    setFilteredProjects(filteredProjectsArr);
  }, [selectedCategory]);
  return (
    <>
      <motion.div
        onClick={() => setSelectedCategory(id)}
        variants={animations.card}
        initial="initial"
        animate="animate"
        exit="exit"
        className="sticky flex m-1 lg:m-3 flex-row w-max items-center justify-center mt-2"
      >
        <a
          className={`${
            id === selectedCategory
              ? "!text-cyanPrimary !border-cyanPrimary !px-7 !sm:px-10"
              : ""
          } px-4 cursor-pointer py-2 lg:py-3 focus:text-cyanPrimary focus:border-cyanPrimary my-0.5 lg:my-1 w-full border-[1px] border-transparent duration-300 hover:border-cyanPrimary rounded-[4px] text-base sm:text-lg font-codeText text-lightBluePrimary bg-darkBluePrimary`}
        >
          <i className={`mr-2 text-cyanPrimary ${icon}`}></i>
          {name}
        </a>
      </motion.div>
    </>
  );
};

export default CategoryCard;
