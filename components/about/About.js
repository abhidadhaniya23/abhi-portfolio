import Heading from "../Heading";
import Image from "next/image";
import pic from "../../public/pic.jpg";

const About = () => {
    return (
        <>
            <Heading heading="Who I am?" />
            <div className="flex flex-row items-center justify-center">
                <div className="w-[50rem]">
                    <Image className="rounded-full" src={pic} alt="Abhi Dadhaniya" />
                </div>
                <div className="p-5 ml-10 -mr-20 text-xl text-lightBluePrimary">
                    <p className="my-2 leading-8">Hello, I'm Abhi Dadhaniya, a full-stack web developer at MERN Stack Technology. I'm currently trying my hands on NEXT.Js framework. Till now, I've completed a few projects on React.Js as mentioned in my portfolio and meanwhile, gained some experience in graphic design.</p>
                    <div className="mt-5">
                        <p className="mb-2">Following are my expertise:</p>
                        <p className="pl-4 mt-1">
                            <i className="mr-2 text-xs text-cyanPrimary fa-solid fa-diamond"></i>Dealing with API in React.JS.
                        </p>
                        <p className="pl-4 mt-1">
                            <i className="mr-2 text-xs text-cyanPrimary fa-solid fa-diamond"></i>Developing REST APIs using Node.js & Express.js.
                        </p>
                        <p className="pl-4 mt-1">
                            <i className="mr-2 text-xs text-cyanPrimary fa-solid fa-diamond"></i>Authentication with backend and database, using MongoDB.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
