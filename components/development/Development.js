// import { useState } from "react";
import Heading from "../Heading";
import CategoryCard from "./CategoryCard";
import ProjectCard from "./ProjectCard";
import React, { useState } from "react";

const Development = () => {
    const [selectedCategory, setSelectedCategory] = useState("ReactJS");
    const categoryProjects = [
        {
            name: "ReactJS",
            icon: "fa-brands fa-react",
        },
        {
            name: "Front-end",
            icon: "fa-solid fa-code",
        },
        {
            name: "Full-Stack",
            icon: "fa-solid fa-globe",
        },
        {
            name: "Games",
            icon: "fa-solid fa-gamepad",
        },
        {
            name: "UI-Designs",
            icon: "fa-solid fa-bezier-curve",
        },
    ];
    const projectData = [
        {
            name: "Movie App",
            url: "/",
            category: "ReactJS",
        },
        {
            name: "Industry Website",
            url: "/",
            category: "Full-Stack",
        },
        {
            name: "Educational Website",
            url: "/",
            category: "Front-end",
        },
        {
            name: "Image Gallery",
            url: "/",
            category: "ReactJS",
        },
        {
            name: "Rock, Paper, Scissor",
            url: "/",
            category: "Games",
        },
        {
            name: "Mind Sharp",
            url: "/",
            category: "Games",
        },
        {
            name: "Countdown Timer",
            url: "/",
            category: "Front-end",
        },
        {
            name: "Time Square News",
            url: "/",
            category: "Front-end",
        },
        {
            name: "Password Generator",
            url: "/",
            category: "Front-end",
        },
        {
            name: "Food Website",
            url: "/",
            category: "UI-Designs",
        },
        {
            name: "Covid-19 Tracker",
            url: "/",
            category: "Front-end",
        },
        {
            name: "Periodic Table",
            url: "/",
            category: "Front-end",
        },
        {
            name: "Awesome Cheat Sheets",
            url: "/",
            category: "Front-end",
        },
    ];

    return (
        <>
            <Heading heading={"What I've Done"} />
            <div className="flex flex-row items-start justify-center mt-10">
                <div className="mx-2 mt-5">
                    {categoryProjects.map((project, index) => (
                        <CategoryCard setSelectedCategory={(event) => setSelectedCategory(event)} name={project.name} selectedCategory={selectedCategory} icon={project.icon} key={index} index={index} />
                    ))}
                </div>
                <div className="overflow-y-scroll flex flex-row items-start justify-center mt-7 w-full md:w-[40rem] flex-wrap h-[26rem] md:h-[30rem]">
                    {projectData.map((project, index) => (
                        <ProjectCard index={index} selectedCategory={selectedCategory} category={project.category} name={project.name} url={project.url} key={index} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Development;
