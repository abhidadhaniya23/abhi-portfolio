import Heading from "../Heading";
import Link from "next/link";

const Development = () => {
    const categoryProjects = [
        {
            name: "ReactJS",
            url: "/react",
        },
        {
            name: "Front-end",
            url: "/front-end",
        },
        {
            name: "Full Stack",
            url: "/full-stack",
        },
        {
            name: "Games",
            url: "/games",
        },
        {
            name: "UI-Designs",
            url: "/ui-designs",
        },
        {
            name: "Blogs",
            url: "/blogs",
        },
    ];
    const projectData = [
        {
            name: "abc",
            url: "/",
            category: "react",
        },
        {
            name: "abc",
            url: "/",
            category: "front-end",
        },
        {
            name: "abc",
            url: "/",
            category: "full-stack",
        },
        {
            name: "abc",
            url: "/",
            category: "games",
        },
        {
            name: "abc",
            url: "/",
            category: "ui-designs",
        },
        {
            name: "abc",
            url: "/",
            category: "blogs",
        },
    ];
    return (
        <>
            <Heading heading={"What I've Done"} />
            <div className="flex flex-row items-start justify-center mt-10">
                <div className="sticky flex flex-col items-center justify-center mt-10 w-44 top-10">
                    {categoryProjects.map((project, index) => (
                        <Link href={project.url} key={index}>
                            <a className="py-3 focus:text-cyanPrimary focus:border-cyanPrimary my-1 w-full border-[1px] border-transparent duration-300 hover:border-cyanPrimary rounded-[4px] text-lg px-7 font-codeText text-lightBluePrimary bg-darkBluePrimary">{project.name}</a>
                        </Link>
                    ))}
                </div>
                <div className="overflow-y-scroll flex flex-row items-start justify-center mt-7 w-[40rem] flex-wrap h-[30rem]">
                    <div className="flex flex-col items-center justify-center m-5 overflow-hidden rounded-lg bg-darkBluePrimary">
                        <div className="w-56 h-56 bg-lightBlueSecondary"></div>
                        <h2 className="py-4 text-lg text-lightBluePrimary">Industry Website</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center m-5 overflow-hidden rounded-lg bg-darkBluePrimary">
                        <div className="w-56 h-56 bg-lightBlueSecondary"></div>
                        <h2 className="py-4 text-lg text-lightBluePrimary">Industry Website</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center m-5 overflow-hidden rounded-lg bg-darkBluePrimary">
                        <div className="w-56 h-56 bg-lightBlueSecondary"></div>
                        <h2 className="py-4 text-lg text-lightBluePrimary">Industry Website</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center m-5 overflow-hidden rounded-lg bg-darkBluePrimary">
                        <div className="w-56 h-56 bg-lightBlueSecondary"></div>
                        <h2 className="py-4 text-lg text-lightBluePrimary">Industry Website</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center m-5 overflow-hidden rounded-lg bg-darkBluePrimary">
                        <div className="w-56 h-56 bg-lightBlueSecondary"></div>
                        <h2 className="py-4 text-lg text-lightBluePrimary">Industry Website</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center m-5 overflow-hidden rounded-lg bg-darkBluePrimary">
                        <div className="w-56 h-56 bg-lightBlueSecondary"></div>
                        <h2 className="py-4 text-lg text-lightBluePrimary">Industry Website</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center m-5 overflow-hidden rounded-lg bg-darkBluePrimary">
                        <div className="w-56 h-56 bg-lightBlueSecondary"></div>
                        <h2 className="py-4 text-lg text-lightBluePrimary">Industry Website</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Development;
