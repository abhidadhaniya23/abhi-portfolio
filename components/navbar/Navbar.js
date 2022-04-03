import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const Navbar = () => {
    const linksData = [
        {
            name: "About Me",
            link: "/about",
        },
        {
            name: "Skills",
            link: "/skills",
        },
        {
            name: "Development",
            link: "/development",
        },
        {
            name: "Resources",
            link: "/development-resources",
        },
        {
            name: "Contact Me",
            link: "/contact",
        },
    ];

    return (
        <>
            <header className="flex bg-darkBluePrimary flex-col justify-center h-screen items-center shadow-2xl">
                <Link href="/">
                    <a className="mb-10 -mt-10">
                        <Image src={logo} alt="Abhi Dadhaniya" />
                    </a>
                </Link>
                <ul className="flex flex-col justify-center items-start">
                    {linksData.map((item, index) => (
                        <Link key={index} href={item.link}>
                            <a className="text-lightBluePrimary text-xl hover:text-cyanPrimary duration-300 my-3">
                                <span className="text-cyanPrimary font-codeText">0{index + 1}.</span>
                                {item.name}
                            </a>
                        </Link>
                    ))}
                </ul>
                <button className="btn">Resume</button>
            </header>
        </>
    );
};

export default Navbar;
