import React from "react";
import Heading from "../Heading";
import Card from "./Card";

const Timeline = () => {
    const data = [
        {
            title: "Designed the web pages",
            subtitle: "2019 November",
            icon: "fa-solid fa-bezier-curve",
        },
        {
            title: "Learned JavaScript",
            subtitle: "2020 August",
            icon: "fa-brands fa-square-js",
        },
        {
            title: "Projects in HTML, CSS and JS",
            subtitle: "2021 March",
            icon: "fa-solid fa-code",
            link: "/development",
        },
        {
            title: "Launched my v1 Portfolio",
            subtitle: "2021 May",
            icon: "fa-solid fa-laptop-code",
            link: "https://web-developer-abhi.herokuapp.com/",
        },
        {
            title: "NodeJS & ExpressJS",
            subtitle: "2021 June",
            icon: "fa-brands fa-node-js",
        },
        {
            title: "Learned MongoDB",
            subtitle: "2021 July",
            icon: "fa-solid fa-database",
        },
        {
            title: "Implemented projects in backend",
            subtitle: "2021 September",
            icon: "fa-brands fa-node-js",
        },
        {
            title: "Learned ReactJS",
            subtitle: "2021 December",
            icon: "fa-brands fa-react",
        },
        {
            title: "Implemented ReactJS projects",
            subtitle: "2022 Feb.",
            icon: "fa-brands fa-react",
            link: "/development",
        },
        {
            title: "Launched Dev. Resources",
            subtitle: "2022 Feb.",
            icon: "fa-solid fa-folder-open",
            link: "https://web-dev-resources.notion.site/web-dev-resources/Web-Development-Resources-be1207bcc32e434481c1ce6e90756964",
        },
        {
            title: "Leaned NextJS",
            subtitle: "2022 March",
            icon: "fa-brands fa-neos",
        },
        {
            title: "Launched my v2 Portfolio",
            subtitle: "2022 April",
            icon: "fa-solid fa-laptop-code",
            link: "/",
        },
        {
            title: "Joined internship at Adhir",
            subtitle: "2022 April",
            icon: "fa-solid fa-handshake-simple",
            link: "https://www.linkedin.com/company/adhirinfo/mycompany/",
        },
        {
            title: "Built an full stack web app",
            subtitle: "2022 July",
            icon: "fa-brands fa-xing",
            link: "https://www.xlinks.pro/",
        },
        {
            title: "Become MERN Stack Developer",
            subtitle: "2022 July",
            icon: "fa-solid fa-check-double",
            link: "/skills",
        },
        {
            title: "Started GigaWeb.in",
            subtitle: "2022 July",
            icon: "fa-solid fa-briefcase",
            link: "https://www.gigaweb.in/",
        },
        {
            title: "Started learning React Native",
            subtitle: "2022 August",
            icon: "fa-brands fa-react",
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
