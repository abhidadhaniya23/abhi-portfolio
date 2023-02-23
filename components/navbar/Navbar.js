import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContext } from "react";
import MenuBarContext from "../../context/MenuBarContext";
import { useRouter } from "next/router";

const Navbar = () => {
  const { menuActive } = useContext(MenuBarContext);
  const animations = {
    navbar: {
      initial: { opacity: 0 },
      exit: { opacity: 0, transition: { duration: 0.1 } },
      animate: { opacity: 1, transition: { duration: 0.1 } },
    },
  };
  const linksData = [
    {
      name: "About Me",
      link: "/about",
    },
    {
      name: "Tech Stack",
      link: "/tech-stack",
    },
    {
      name: "Work",
      link: "/work",
    },
    {
      name: "GigaWeb",
      link: "/gigaweb",
    },
    {
      name: "Timeline",
      link: "/timeline",
    },
    {
      name: "Blogs",
      link: "https://blogs.abhidadhaniya.com?ref=portfolio",
    },
    {
      name: "Contact Me",
      link: "/contact",
    },
  ];

  return (
    <>
      {menuActive && (
        <motion.header
          variants={animations.navbar}
          initial="initial"
          animate="animate"
          exit="exit"
          className="md:hidden fixed top-0 flex flex-col items-center justify-center w-full min-h-screen px-5 mx-auto duration-150 shadow-2xl md:px-16 md:fixed bg-darkBluePrimary/90 backdrop-blur-sm md:bg-darkBluePrimary"
        >
          <LogoImage />
          <NavbarLinks linksData={linksData} />
          <ResumeButton />
        </motion.header>
      )}
      <header className="hidden top-0 md:flex flex-col items-center justify-center min-h-screen px-5 mx-auto duration-150 shadow-2xl md:px-16 md:fixed bg-darkBluePrimary/90 backdrop-blur-sm md:bg-darkBluePrimary">
        <LogoImage />
        <NavbarLinks linksData={linksData} />
        <ResumeButton />
      </header>
    </>
  );
};

const LogoImage = () => {
  return (
    <Link href="/" className="mb-4 -mt-10">
      <Image src="/Alogo.svg" width={90} height={90} alt="Abhi Dadhaniya" />
    </Link>
  );
};

const NavbarLinks = ({ linksData }) => {
  const router = useRouter();
  const { setMenuActive } = useContext(MenuBarContext);
  return (
    <ul className="flex flex-col items-start justify-center">
      {linksData.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          onClick={() => setMenuActive(false)}
          className={`${
            router.pathname == "/"
              ? "text-lightBluePrimary"
              : item.name
                  .toLowerCase()
                  .includes(router.pathname.substring(1).split("-")[0]) ||
                item.name
                  .toLowerCase()
                  .includes(router.pathname.substring(1).split("/")[0])
              ? "text-cyanPrimary"
              : "text-lightBluePrimary"
          } w-full my-3 text-xl duration-300 hover:text-cyanPrimary`}
        >
          <span className="text-cyanPrimary font-codeText">0{index + 1}.</span>
          {item.name}
        </Link>
      ))}
    </ul>
  );
};

const ResumeButton = () => {
  return (
    <a
      href="https://rxresu.me/abhidadhaniya23/abhi-resume"
      target="_blank"
      rel="noreferrer"
      className="btn"
    >
      Resume
    </a>
  );
};

export default Navbar;
