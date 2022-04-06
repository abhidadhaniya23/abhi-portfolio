// import { useState } from "react";
import Heading from "../Heading";
import CategoryCard from "./CategoryCard";
import ProjectCard from "./ProjectCard";
import React, { useState } from "react";

import movieapp from "../../public/project/movie-app.png";
import bme from "../../public/project/bme.png";
import imagegallery from "../../public/project/image-gallery.png";
import rps from "../../public/project/rps.png";
import cheatsheets from "../../public/project/cheat-sheets.png";
import color_game from "../../public/project/color_game.png";
import countdowntimer from "../../public/project/countdown-timer.png";
import timesquarenews from "../../public/project/time-square-news.png";
import securepassword from "../../public/project/secure-password.png";
import food from "../../public/project/food.png";
import covid19tracker from "../../public/project/covid-19-tracker.png";
import periodictable from "../../public/project/periodic-table.png";
import awesome_cheat_sheets from "../../public/project/cheat-sheets.png";

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
            img: movieapp,
            url: "/",
            category: "ReactJS",
        },
        {
            name: "Industry Website",
            img: movieapp,
            url: "/",
            category: "Full-Stack",
        },
        {
            name: "Educational Website",
            img: bme,
            url: "/",
            category: "Front-end",
        },
        {
            name: "Image Gallery",
            img: imagegallery,
            url: "/",
            category: "ReactJS",
        },
        {
            name: "Rock, Paper, Scissor",
            img: rps,
            url: "/",
            category: "Games",
        },
        {
            name: "Mind Sharp",
            img: color_game,
            url: "/",
            category: "Games",
        },
        {
            name: "Countdown Timer",
            img: countdowntimer,
            url: "/",
            category: "Front-end",
        },
        {
            name: "Time Square News",
            img: timesquarenews,
            url: "/",
            category: "Front-end",
        },
        {
            name: "Password Generator",
            img: securepassword,
            url: "/",
            category: "Front-end",
        },
        {
            name: "Food Website",
            img: food,
            url: "/",
            category: "UI-Designs",
        },
        {
            name: "Covid-19 Tracker",
            img: covid19tracker,
            url: "/",
            category: "Front-end",
        },
        {
            name: "Periodic Table",
            img: periodictable,
            url: "/",
            category: "Front-end",
        },
        {
            name: "Awesome Cheat Sheets",
            img: awesome_cheat_sheets,
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
                        <ProjectCard index={index} img={project.img} selectedCategory={selectedCategory} category={project.category} name={project.name} url={project.url} key={index} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Development;
