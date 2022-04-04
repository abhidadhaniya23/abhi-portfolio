import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <>
            <div className="bg-blue-400">
                <SocialLine />
                <Layout component={<HeaderIntro />} />
                <EmailLine />
            </div>
        </>
    );
}

const HeaderIntro = () => {
    return (
        <>
            <span className="my-5 text-2xl font-codeText text-cyanPrimary">Hi, My name is</span>
            <h1 className="my-5 text-6xl font-bold text-lightBluePrimary">Abhi Dadhaniya</h1>
            <h1 className="my-5 font-bold text-7xl text-lightBlueSecondary">I build things for web.</h1>
            <p className="mb-10 text-xl text-lightBlueSecondary/80">I have been a web developer for the past 3 years. I specialize in JavaScript, ReactJS, NodeJS & ExpressJS and I’m using MongoDB as Database.</p>
            <Link href="/contact">
                <a className="btn">Hire Me</a>
            </Link>
        </>
    );
};

const SocialLine = () => {
    return (
        <>
            <div className="fixed top-0 flex flex-col items-center justify-center right-10">
                <span className="block bg-lightBluePrimary/30 mb-5 h-32 w-[2px] rounded-full"></span>
                <Link href="https://www.instagram.com/_abhi_dadhaniya_/">
                    <a target="_blank">
                        <i className="my-2 text-xl duration-300 text-lightBluePrimary/30 hover:text-cyanPrimary fa-brands fa-instagram"></i>
                    </a>
                </Link>
                <Link href="https://twitter.com/abhidadhaniya3">
                    <a target="_blank">
                        <i className="my-2 text-xl duration-300 text-lightBluePrimary/30 hover:text-cyanPrimary fa-brands fa-twitter"></i>
                    </a>
                </Link>
                <Link href="https://github.com/abhidadhaniya23">
                    <a target="_blank">
                        <i className="my-2 text-xl duration-300 text-lightBluePrimary/30 hover:text-cyanPrimary fa-brands fa-github"></i>
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/in/abhi-dadhaniya-a09924220/">
                    <a target="_blank">
                        <i className="my-2 text-xl duration-300 text-lightBluePrimary/30 hover:text-cyanPrimary fa-brands fa-linkedin-in"></i>
                    </a>
                </Link>
            </div>
        </>
    );
};

const EmailLine = () => {
    return (
        <>
            <div className="absolute right-0 flex flex-row items-center justify-center bottom-10">
                <Link href="mailto:abhidadhaniya23@gmail.com">
                    <a className="duration-300 text-lightBluePrimary/50 hover:text-cyanPrimary/90">
                        <i className="mr-2 fa-solid fa-envelope"></i> abhidadhaniya23@gmail.com
                    </a>
                </Link>
                <span className="block bg-lightBluePrimary/30 ml-5 w-32 h-[2px] rounded-full"></span>
            </div>
        </>
    );
};
