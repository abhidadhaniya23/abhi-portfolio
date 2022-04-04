// Import react-circular-progressbar module and styles
// import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// import Image from "next/image";
import logo from "../../public/logo.png";
import Heading from "../Heading";
import CircularProgressBar from "./CircularProgressBar";
import SkillCard from "./SkillCard";

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

// Animation
// import { easeQuadInOut } from "d3-ease";
// import AnimatedProgressProvider from "./AnimatedProgressProvider";
// import { ChangingProgressProvider } from "react-circular-progressbar";

// Radial separators
// import RadialSeparators from "./RadialSeparators";

const Skill = () => {
    const value = 60;
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
    ];
    return (
        <>
            <Heading heading={"Skills"} />
            <div className="flex items-start justify-center sm:flex-col md:flex-row">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="px-16 py-5 my-10 text-2xl text-center rounded-[4px] bg-darkBluePrimary text-cyanPrimary">Full Stack Development</h2>
                    <div className="flex flex-row flex-wrap items-center justify-center w-[30rem]">
                        {skillsData.map((skill, index) => (
                            <>
                                <CircularProgressBar key={index} url={skill.url} name={skill.name} value={skill.value} />
                            </>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row items-start justify-center">
                    <div className="flex flex-col items-center justify-center mx-5">
                        <h2 className="w-full px-16 py-5 my-10 text-2xl rounded-[4px] text-center bg-darkBluePrimary text-cyanPrimary">Tools</h2>
                        {toolData.map((tool, index) => (
                            <SkillCard name={tool.name} key={index} url={tool.url} />
                        ))}
                    </div>
                    <div className="flex flex-col items-center justify-center mx-5">
                        <h2 className="px-16 py-5 my-10 text-2xl rounded-[4px] text-center bg-darkBluePrimary text-cyanPrimary">Design</h2>
                        {designData.map((designTool, index) => (
                            <SkillCard name={designTool.name} key={index} url={designTool.url} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skill;
