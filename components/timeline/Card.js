import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Card = ({ data, length, index }) => {
    const animations = {
        card: {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0, transition: { duration: 0.2, delay: 0.1 * index } },
            exit: { opacity: 0, x: 10, transition: { duration: 0.15, delay: 0.04 * index } },
        },
    };
    return (
        <>
            <motion.div variants={animations.card} initial="initial" exit="exit" animate="animate" className="flex -mb-8 sm:-mb-10 flex-row justify-end items-baseline">
                <p className="text-sm sm:text-xl text-white relative">{data.subtitle.split(" ")[0]}</p>
                <div className={`flex flex-col justify-center items-center`}>
                    <span className="rounded-full ring-1 w-3 h-3 ring-offset-darkBluePrimary ring-offset-4 ring-cyanPrimary bg-cyanPrimary mx-4 sm:mx-7"></span>
                    <span className={`${index === length - 1 ? "hidden" : "block"} border-dashed border-l-2 h-24 my-3 border-cyanPrimary`}></span>
                </div>
                <div className={`flex flex-row justify-start items-center rounded-lg  relative bg-cyanPrimary/5 py-3 pl-3 pr-5 w-[16rem] sm:w-[37rem]`}>
                    <div className="bg-cyanPrimary/90 w-8 sm:w-12 h-8 sm:h-12 rounded-full flex justify-center items-center">
                        <i className={`${data.icon} text-lg sm:text-2xl`}></i>
                    </div>
                    <div className="flex flex-col justify-center items-start pl-4 text-white">
                        <p className="text-sm sm:text-xl">{data.title}</p>
                        <div className="flex flex-row justify-center py-1 items-center">
                            <p className="text-xs sm:text-sm font-codeText pr-2">{data.subtitle}</p>
                            {data.link && (
                                <Link href={data.link}>
                                    <a className={`font-bodyText group text-xs sm:text-sm flex justify-center items-center text-cyanPrimary px-3`}>
                                        <i className="fa-solid fa-link pr-1"></i>Proof<i className="duration-150 group-hover:pl-2 fa-solid fa-angles-right pl-1"></i>
                                    </a>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Card;
