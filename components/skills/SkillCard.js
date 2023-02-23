import { motion } from "framer-motion";
import Image from "next/image";

const SkillCard = ({ name, url, index }) => {
  const animations = {
    card: {
      initial: { opacity: 0, y: -20 },
      exit: {
        opacity: 0,
        y: 0,
        transition: { duration: 0.3, delay: index * 0.1 },
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: index * 0.05 + 0.7 },
      },
    },
  };

  return (
    <motion.h3
      variants={animations.card}
      animate="animate"
      exit="exit"
      initial="initial"
      className="flex flex-row items-center rounded-[4px] justify-start w-full py-2 text-lg lg:text-xl text-left px-4 bg-darkBluePrimary text-lightBluePrimary"
    >
      <div className="w-5 mt-1 mr-4 lg:w-8">
        <Image src={url} width={35} height={35} alt={name} />
      </div>
      {name}
    </motion.h3>
  );
};

export default SkillCard;
