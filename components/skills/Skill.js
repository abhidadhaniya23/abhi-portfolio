// import Image from "next/image";
import Heading from "../Heading";
import CircularProgressBar from "./CircularProgressBar";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

// Logo Import
import ReactJS from "../../public/icons/ReactJS.png";
import ExpressJS from "../../public/icons/ExpressJS.png";
import NodeJS from "../../public/icons/NodeJS.png";
import MongoDB from "../../public/icons/MongoDB.png";
import Figma from "../../public/icons/Figma.png";
import NextJS from "../../public/icons/NextJS.png";
import Photoshop from "../../public/icons/Photoshop.png";
import Firebase from "../../public/icons/Firebase.png";
import Netlify from "../../public/icons/Netlify.png";
import Heroku from "../../public/icons/Heroku.png";
import TailwindCSS from "../../public/icons/TailwindCSS.png";
import Git from "../../public/icons/Git.png";

const Skill = () => {
    const value = 60;
    const animations = {
        fullStack: {
            initial: { opacity: 0, y: -20 },
            exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
            animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
        },
        tool: {
            initial: { opacity: 0, y: -20 },
            exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
            animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.6 } },
        },
        design: {
            initial: { opacity: 0, y: -20 },
            exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
            animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.8 } },
        },
    };
    const skillsData = [
        {
            name: "ReactJS",
            url: ReactJS,
            value: 65,
        },
        {
            name: "MongoDB",
            url: MongoDB,
            value: 50,
        },
        {
            name: "NodeJS",
            url: NodeJS,
            value: 70,
        },
        {
            name: "ExpressJS",
            url: ExpressJS,
            value: 80,
        },
    ];
    const designData = [
        {
            name: "Figma",
            url: Figma,
        },
        {
            name: "Photoshop",
            url: Photoshop,
        },
    ];
    const toolData = [
        {
            name: "Firebase",
            url: Firebase,
        },
        {
            name: "Netlify",
            url: Netlify,
        },
        {
            name: "Heroku",
            url: Heroku,
        },
        {
            name: "Git",
            url: Git,
        },
        {
            name: "TailwindCSS",
            url: TailwindCSS,
        },
        {
            name: "NextJS",
            url: NextJS,
        },
    ];
    return (
        <>
            <div className="py-20">
                <Heading heading={"Skills"} />
                <div className="flex flex-col items-start justify-center md:flex-row">
                    <div className="flex flex-col items-center justify-center">
                        <motion.h2 variants={animations.fullStack} animate="animate" exit="exit" initial="initial" className="px-10 md:px-16 py-5 my-10 text-2xl text-center rounded-[4px] bg-darkBluePrimary text-cyanPrimary">
                            Full Stack Development
                        </motion.h2>
                        <div className="flex flex-row flex-wrap items-center justify-center w-full md:w-[30rem]">
                            {skillsData.map((skill, index) => (
                                <>
                                    <CircularProgressBar key={index} index={index} url={skill.url} name={skill.name} value={skill.value} />
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-row items-start justify-center mx-auto">
                        <div className="flex flex-col items-center justify-center mx-2 md:mx-5">
                            <motion.h2 variants={animations.tool} animate="animate" exit="exit" initial="initial" className="w-full px-10 md:px-16 py-4 md:py-5 mt-10 mb-5 md:my-10 text-lg md:text-2xl rounded-[4px] text-center bg-darkBluePrimary text-cyanPrimary">
                                Tools
                            </motion.h2>
                            {toolData.map((tool, index) => (
                                <SkillCard name={tool.name} index={index} key={index} url={tool.url} />
                            ))}
                        </div>
                        <div className="flex flex-col items-center justify-center mx-2 md:mx-5">
                            <motion.h2 variants={animations.design} animate="animate" exit="exit" initial="initial" className="w-full px-10 md:px-16 py-4 md:py-5 mt-10 mb-5 md:my-10 text-lg md:text-2xl rounded-[4px] text-center bg-darkBluePrimary text-cyanPrimary">
                                Design
                            </motion.h2>
                            {designData.map((designTool, index) => (
                                <SkillCard name={designTool.name} index={index} key={index} url={designTool.url} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skill;
