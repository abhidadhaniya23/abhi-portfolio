import Script from "next/script";
import Navbar from "../components/navbar/Navbar";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <SocialLine />
            <div className="flex items-center flex-row bg-gradient-to-r to-darkBluePrimary from-darkLightBluePrimary">
                <div className="w-1/4">
                    <Navbar />
                </div>
                <div className="w-full">
                    <HeaderIntro />
                </div>
                <EmailLine />
            </div>
            <Script src="https://kit.fontawesome.com/8b16cac71e.js" crossorigin="anonymous"></Script>
        </>
    );
}

const HeaderIntro = () => {
    return (
        <div className="font-bodyText px-48">
            <span className="font-codeText text-2xl my-5 text-cyanPrimary">Hi, My name is</span>
            <h1 className="text-6xl my-5 text-lightBluePrimary font-bold">Abhi Dadhaniya</h1>
            <h1 className="text-7xl my-5 text-lightBlueSecondary font-bold">I build things for web.</h1>
            <p className="text-lightBlueSecondary/80 text-xl">I have been a web developer for the past 3 years. I specialize in JavaScript, ReactJS, NodeJS & ExpressJS and I’m using MongoDB as Database.</p>
            <button className="btn">Hire Me</button>
        </div>
    );
};

const SocialLine = () => {
    return (
        <>
            <div className="fixed top-0 right-10 flex flex-col justify-center items-center">
                <span className="block bg-lightBluePrimary/30 mb-5 h-32 w-[2px] rounded-full"></span>
                <Link href="https://www.instagram.com/_abhi_dadhaniya_/">
                    <a target="_blank">
                        <i className="my-2 text-2xl text-lightBluePrimary/30 hover:text-cyanPrimary duration-300 fa-brands fa-instagram"></i>
                    </a>
                </Link>
                <Link href="https://twitter.com/abhidadhaniya3">
                    <a target="_blank">
                        <i className="my-2 text-2xl text-lightBluePrimary/30 hover:text-cyanPrimary duration-300 fa-brands fa-twitter"></i>
                    </a>
                </Link>
                <Link href="https://github.com/abhidadhaniya23">
                    <a target="_blank">
                        <i className="my-2 text-2xl text-lightBluePrimary/30 hover:text-cyanPrimary duration-300 fa-brands fa-github"></i>
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/in/abhi-dadhaniya-a09924220/">
                    <a target="_blank">
                        <i className="my-2 text-2xl text-lightBluePrimary/30 hover:text-cyanPrimary duration-300 fa-brands fa-linkedin-in"></i>
                    </a>
                </Link>
            </div>
        </>
    );
};

const EmailLine = () => {
    return (
        <>
            <div className="absolute bottom-10 right-0 flex flex-row justify-center items-center">
                <Link href="mailto:abhidadhaniya23@gmail.com">
                    <a className="text-lightBluePrimary/50 hover:text-cyanPrimary/90 duration-300">abhidadhaniya23@gmail.com</a>
                </Link>
                <span className="block bg-lightBluePrimary/30 ml-5 w-32 h-[2px] rounded-full"></span>
            </div>
        </>
    );
};
