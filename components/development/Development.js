// import { useState } from "react";
import Heading from "../Heading";
import CategoryCard from "./CategoryCard";
import ProjectCard from "./ProjectCard";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Development = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const animations = {
    cardContainer: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.2 } },
      exit: { opacity: 0, transition: { duration: 0.15, delay: 0.2 } },
    },
  };
  const categoryProjects = [
    {
      name: "Personal Projects",
      icon: "fa-solid fa-code-fork",
      id: 1,
    },
    {
      name: "Client Projects",
      icon: "fa-solid fa-dollar-sign",
      id: 2,
    },
  ];
  const projectData = [
    {
      name: "Varandani Solutions",
      img: "/project/vsWeb.gif",
      url: "https://www.varandanisolutions.com/",
      categoryId: [2],
      id: 9769823,
    },
    {
      name: "Viapply - Visa Immigration",
      img: "/project/viapply.gif",
      url: "https://www.viapply.com",
      categoryId: [2],
      id: 97600532,
    },
    {
      name: "xLinks Pro",
      img: "/project/xLinks.gif",
      url: "https://www.xlinks.pro/",
      categoryId: [1],
      id: 76789,
    },
    {
      name: "Web Development Resources",
      img: "/project/webDevResources.gif",
      url: "/resources",
      categoryId: [1],
      id: 9765999,
    },
    {
      name: "Movie App",
      img: "/project/movieApp.gif",
      url: "https://react-movie-app-000.netlify.app/",
      categoryId: [1],
      id: 766507,
    },
    {
      name: "Image Gallery",
      img: "/project/imgGallery.gif",
      url: "https://image-gallery-ui.netlify.app/",
      categoryId: [1],
      id: 18930,
    },
    // {
    //   name: "Food Website",
    //   img: "/project/foodWeb.gif",
    //   url: "https://web-developer-abhi.herokuapp.com/Food-site/index.html",
    //   categoryId: [1],
    //   id: 97652,
    // },
  ];

  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    setFilteredProjects((projectData) =>
      projectData.filter((project) =>
        project.categoryId.includes(selectedCategory)
      )
    );
  }, []);

  return (
    <>
      <div className="flex flex-col justify-start py-10 sm:py-20 items-center min-h-screen h-full">
        <Heading heading={"What I've Done"} />
        <div className="mx-2 mt-5 flex flex-row justify-start sm:justify-center flex-wrap px-4 sm:px-32 items-center">
          {categoryProjects.map((project, index) => (
            <CategoryCard
              projects={projectData}
              filteredProjects={filteredProjects}
              setFilteredProjects={(event) => setFilteredProjects(event)}
              setSelectedCategory={(event) => setSelectedCategory(event)}
              name={project.name}
              selectedCategory={selectedCategory}
              icon={project.icon}
              key={index}
              index={index}
              id={project.id}
            />
          ))}
        </div>
        <motion.div
          variants={animations.cardContainer}
          animate="animate"
          initial="initial"
          exit="exit"
          layout
          className="flex flex-row items-start justify-center mt-10 flex-wrap"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                index={index}
                img={project.img}
                selectedCategory={selectedCategory}
                category={project.category}
                name={project.name}
                url={project.url}
                key={project.id}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default Development;

// {
//   name: "Educational Website",
//   img: bme,
//   url: "https://basic-mechanical-engineering.herokuapp.com/",
//   categoryId: [1, 5],
//   id: 1089,
// },
// {
//   name: "Rock, Paper, Scissor",
//   img: rps,
//   url: "https://web-developer-abhi.herokuapp.com/RPS-Game/index.html",
//   categoryId: [1, 5],
//   id: 14399,
// },
// {
//   name: "Mind Sharp",
//   img: color_game,
//   url: "https://web-developer-abhi.herokuapp.com/Color-game/color-game.html",
//   categoryId: [1, 5],
//   id: 91399,
// },
// {
//     name: "Countdown Timer",
//     img: countdowntimer,
//     url: "https://web-developer-abhi.herokuapp.com/countdown-timer/index.html",
//     categoryId: [1, 5],
//     id: 923900,
// },
// {
//   name: "Time Square News",
//   img: timesquarenews,
//   url: "https://web-developer-abhi.herokuapp.com/time-square/index.html",
//   categoryId: [1, 3, 5],
//   id: 24903,
// },
// {
//   name: "Password Generator",
//   img: securepassword,
//   url: "https://web-developer-abhi.herokuapp.com/Secure-password-generator/index.html",
//   categoryId: [1, 5],
//   id: 12345,
// },
// {
//   name: "Covid-19 Tracker",
//   img: covid19tracker,
//   url: "https://web-developer-abhi.herokuapp.com/Covid-19-Tracker/index.html",
//   categoryId: [1, 3, 5],
//   id: 45677,
// },
// {
//   name: "Periodic Table",
//   img: periodictable,
//   url: "https://web-developer-abhi.herokuapp.com/Periodic-table/index.html",
//   categoryId: [1, 3, 5],
//   id: 89765,
// },
// {
//   name: "Quotes Generator",
//   img: quotesbot,
//   url: "https://t.me/Quote_generatorbot",
//   categoryId: [1, 7],
//   id: 92145,
// },
// {
//   name: "Meme Generator",
//   img: memebot,
//   url: "https://t.me/Meme4_You_bot",
//   categoryId: [1, 7],
//   id: 46824,
// },
// {
//     name: "Awesome Cheat Sheets",
//     img: cheatsheets,
//     url: "http://awesome-cheat-sheets.online/",
//     categoryId: [1, 5],
//     id: uuidv4(),
// },
