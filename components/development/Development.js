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
            url: "https://react-movie-app-000.netlify.app/",
            category: "ReactJS",
        },
        // {
        //     name: "Industry Website",
        //     img: movieapp,
        //     url: "/",
        //     category: "Full-Stack",
        // },
        {
            name: "Educational Website",
            img: bme,
            url: "https://basic-mechanical-engineering.herokuapp.com/",
            category: "Full-Stack",
        },
        {
            name: "Image Gallery",
            img: imagegallery,
            url: "https://image-gallery-ui.netlify.app/",
            category: "ReactJS",
        },
        {
            name: "Rock, Paper, Scissor",
            img: rps,
            url: "https://web-developer-abhi.herokuapp.com/RPS-Game/index.html",
            category: "Games",
        },
        {
            name: "Mind Sharp",
            img: color_game,
            url: "https://web-developer-abhi.herokuapp.com/Color-game/color-game.html",
            category: "Games",
        },
        {
            name: "Countdown Timer",
            img: countdowntimer,
            url: "https://web-developer-abhi.herokuapp.com/countdown-timer/index.html",
            category: "Front-end",
        },
        {
            name: "Time Square News",
            img: timesquarenews,
            url: "https://web-developer-abhi.herokuapp.com/time-square/index.html",
            category: "Front-end",
        },
        {
            name: "Password Generator",
            img: securepassword,
            url: "https://web-developer-abhi.herokuapp.com/Secure-password-generator/index.html",
            category: "Front-end",
        },
        {
            name: "Food Website",
            img: food,
            url: "https://web-developer-abhi.herokuapp.com/Food-site/index.html",
            category: "UI-Designs",
        },
        {
            name: "Covid-19 Tracker",
            img: covid19tracker,
            url: "https://web-developer-abhi.herokuapp.com/Covid-19-Tracker/index.html",
            category: "Front-end",
        },
        {
            name: "Periodic Table",
            img: periodictable,
            url: "https://web-developer-abhi.herokuapp.com/Periodic-table/index.html",
            category: "Front-end",
        },
        {
            name: "Awesome Cheat Sheets",
            img: cheatsheets,
            url: "http://awesome-cheat-sheets.online/",
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
