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
            link: "/resources",
        },
        {
            name: "Contact Me",
            link: "/contact",
        },
    ];

    return (
        <>
            <header className="fixed top-0 flex flex-col items-center justify-center min-h-screen px-16 shadow-2xl bg-darkBluePrimary">
                <Link href="/">
                    <a className="mb-10 -mt-10">
                        <Image src={logo} alt="Abhi Dadhaniya" />
                    </a>
                </Link>
                <ul className="flex flex-col items-start justify-center">
                    {linksData.map((item, index) => (
                        <Link key={index} href={item.link}>
                            <a className="w-full my-3 text-xl duration-300 text-lightBluePrimary hover:text-cyanPrimary">
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
