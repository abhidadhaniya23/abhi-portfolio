import React from "react";
import Heading from "../Heading";
import Card from "./Card";

const Timeline = () => {
    const data = [
        {
            year: "2019",
            content: [
                {
                    title: "Designed the web pages",
                    subtitle: "2019 - 2020",
                    icon: "fa-solid fa-bezier-curve",
                },
            ],
        },
        {
            year: "2020",
            content: [
                {
                    title: "Learned JavaScript",
                    subtitle: "2019 - 2020",
                    icon: "fa-brands fa-square-js",
                },
            ],
        },
        {
            year: "2020",
            content: [
                {
                    title: "Projects in HTML, CSS and JS",
                    subtitle: "2019 - 2020",
                    icon: "fa-solid fa-code",
                    link: "/development",
                },
            ],
        },
        {
            year: "2020",
            content: [
                {
                    title: "Launched my v1 Portfolio",
                    subtitle: "2019 - 2020",
                    icon: "fa-solid fa-laptop-code",
                    link: "https://web-developer-abhi.herokuapp.com/",
                },
            ],
        },
        {
            year: "2020",
            content: [
                {
                    title: "NodeJS & ExpressJS",
                    subtitle: "2019 - 2020",
                    icon: "fa-brands fa-node-js",
                },
            ],
        },
        {
            year: "2020",
            content: [
                {
                    title: "Learned MongoDB",
                    subtitle: "2019 - 2020",
                    icon: "fa-solid fa-database",
                },
            ],
        },
        {
            year: "2020",
            content: [
                {
                    title: "Implemented projects in backend",
                    subtitle: "2019 - 2020",
                    icon: "fa-brands fa-node-js",
                },
            ],
        },
        {
            year: "2020",
            content: [
                {
                    title: "Learned ReactJS",
                    subtitle: "2019 - 2020",
                    icon: "fa-brands fa-react",
                },
            ],
        },
        {
            year: "2020",
            content: [
                {
                    title: "Implemented ReactJS projects",
                    subtitle: "2019 - 2020",
                    icon: "fa-brands fa-react",
                    link: "/development",
                },
            ],
        },
        {
            year: "2020",
            content: [
                {
                    title: "Leaned NextJS",
                    subtitle: "2019 - 2020",
                    icon: "fa-brands fa-neos",
                },
            ],
        },
        {
            year: "2020",
            content: [
                {
                    title: "Launched my v2 Portfolio",
                    subtitle: "2019 - 2020",
                    icon: "fa-solid fa-laptop-code",
                    link: "/",
                },
            ],
        },
        {
            year: "2020",
            content: [
                {
                    title: "Joined internship at Adhir",
                    subtitle: "2019 - 2020",
                    icon: "fa-solid fa-handshake-simple",
                    link: "https://www.linkedin.com/company/adhirinfo/mycompany/",
                },
            ],
        },
        {
            year: "2020",
            content: [
                {
                    title: "Launcher Resources",
                    subtitle: "2019 - 2020",
                    icon: "fa-solid fa-folder-open",
                    link: "https://web-dev-resources.notion.site/web-dev-resources/Web-Development-Resources-be1207bcc32e434481c1ce6e90756964",
                },
            ],
        },
        {
            year: "2020",
            content: [
                {
                    title: "Built an full stack web app",
                    subtitle: "2019 - 2020",
                    icon: "fa-brands fa-xing",
                    link: "https://www.xlinks.pro/",
                },
            ],
        },
        {
            year: "2020",
            content: [
                {
                    title: "Started GigaWeb.in",
                    subtitle: "2019 - 2020",
                    icon: "fa-solid fa-briefcase",
                    link: "https://www.gigaweb.in/",
                },
            ],
        },
        {
            year: "2022",
            content: [
                {
                    title: "Started learning React Native",
                    subtitle: "2022 August",
                    icon: "fa-brands fa-react",
                },
            ],
        },
    ];
    return (
        <>
            <section className="py-10 sm:py-20">
                <Heading heading={"Proof of Work"} />
                <div className="py-10 sm:py-20">
                    {data.reverse().map((item, index) => (
                        <Card key={index} index={index} data={item} length={data.length} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Timeline;
