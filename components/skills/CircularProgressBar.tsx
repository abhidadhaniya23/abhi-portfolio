import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const CircularProgressBar = ({ name, url, index }: any) => {
  const animations = {
    card1: {
      initial: { opacity: 0, x: 20, y: 20 },
      exit: {
        opacity: 0,
        x: 10,
        y: 10,
        transition: { duration: 0.2, delay: index * 0.1 + 0.1 },
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.4, delay: index * 0.1 + 0.1 },
      },
    },
    card2: {
      initial: { opacity: 0, x: -20, y: 20 },
      exit: {
        opacity: 0,
        x: -10,
        y: 10,
        transition: { duration: 0.2, delay: index * 0.1 + 0.1 },
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.4, delay: index * 0.1 + 0.1 },
      },
    },
    card3: {
      initial: { opacity: 0, x: 20, y: -20 },
      exit: {
        opacity: 0,
        x: 10,
        y: -10,
        transition: { duration: 0.2, delay: index * 0.1 + 0.1 },
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.4, delay: index * 0.1 + 0.1 },
      },
    },
    card4: {
      initial: { opacity: 0, x: -20, y: -20 },
      exit: {
        opacity: 0,
        x: -10,
        y: -10,
        transition: { duration: 0.2, delay: index * 0.1 + 0.1 },
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.4, delay: index * 0.1 + 0.1 },
      },
    },
  };
  return (
    <motion.div
      variants={
        index == 0
          ? animations.card1
          : index == 1
          ? animations.card2
          : index == 2
          ? animations.card3
          : animations.card4
      }
      animate="animate"
      exit="exit"
      initial="initial"
      className="h-36 px-2 py-3 rounded-md bg-darkBluePrimary flex justify-center items-center text-center"
    >
      <div className="flex flex-col justify-evenly h-full items-center w-12">
        <Image
          width={100}
          height={100}
          src={`/icons/${url}.svg`}
          alt="Abhi Dadhaniya"
        />
        <h2 className="text-xl text-center mt-1 font-codeText text-lightBluePrimary">
          {name}
        </h2>
      </div>
    </motion.div>
  );
};

export default CircularProgressBar;
