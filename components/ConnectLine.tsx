import Link from "next/link";
import { motion } from "framer-motion";
import { RiLinkedinLine } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { TbBrandGumroad } from "react-icons/tb";

const SocialLine = () => {
  const animations = {
    line: {
      initial: { opacity: 0 },
      exit: { opacity: 0, transition: { duration: 0.3 } },
      animate: { opacity: 1, transition: { duration: 0.4, delay: 1.2 } },
    },
  };
  const socialIcons = [
    {
      label: "Instagram",
      link: "https://www.instagram.com/_abhi_dadhaniya_/",
      icon: <SiInstagram />,
    },
    {
      label: "Twitter",
      link: "https://twitter.com/abhidadhaniya3",
      icon: <FiTwitter />,
    },
    {
      label: "Github",
      link: "https://github.com/abhidadhaniya23",
      icon: <FiGithub />,
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/abhidadhaniya/",
      icon: <RiLinkedinLine />,
    },
    {
      label: "Telegram",
      link: "https://t.me/Abhi_Dadhaniya",
      icon: <TbBrandTelegram />,
    },
    {
      label: "Gumroad",
      link: "https://abhidadhaniya.gumroad.com/",
      icon: <TbBrandGumroad />,
    },
    {
      label: "Email",
      link: "mailto:abhidadhaniya23@gmail.com",
      icon: <FiMail className="sm:hidden block" />,
    },
  ];
  return (
    <>
      <div className="absolute flex flex-col items-center justify-center lg:fixed right-10">
        <motion.span
          variants={animations.line}
          animate="animate"
          exit="exit"
          initial="initial"
          className="block bg-lightBluePrimary/30 mb-2 lg:mb-5 h-12 lg:h-32 w-[2px] rounded-full"
        ></motion.span>
        {socialIcons.map((icon, index) => (
          <Icon
            icon={icon.icon}
            index={index}
            label={icon.label}
            key={index}
            link={icon.link}
          />
        ))}
      </div>
    </>
  );
};

const EmailLine = () => {
  const animations = {
    emailAnimate: {
      initial: { opacity: 0, x: 50 },
      exit: { opacity: 0, x: 0, transition: { duration: 0.3 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 1.4 } },
    },
    line: {
      initial: { opacity: 0 },
      exit: { opacity: 0, transition: { duration: 0.3 } },
      animate: { opacity: 1, transition: { duration: 0.4, delay: 1.4 } },
    },
  };
  return (
    <>
      <div className="sm:flex hidden absolute left-0 right-auto flex-row-reverse items-center justify-center lg:left-auto lg:right-0 lg:flex-row bottom-5 lg:bottom-10">
        <motion.div
          variants={animations.emailAnimate}
          animate="animate"
          exit="exit"
          initial="initial"
        >
          <a
            href="mailto:abhidadhaniya23@gmail.com"
            className="duration-300 flex flex-row justify-center items-center text-lightBluePrimary/50 hover:text-cyanPrimary/90"
          >
            <FiMail className="mr-3 font-bold text-2xl" />{" "}
            abhidadhaniya23@gmail.com
          </a>
        </motion.div>
        <motion.span
          variants={animations.line}
          animate="animate"
          exit="exit"
          initial="initial"
          className="block bg-lightBluePrimary/30 mx-5 w-10 lg:w-32 h-[2px] rounded-full"
        ></motion.span>
      </div>
    </>
  );
};

const Icon = ({ index, icon, link, label }: any) => {
  const animations = {
    icons: {
      initial: { opacity: 0, y: -20 },
      exit: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.3, delay: index * 0.1 },
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: index * 0.2 + 1 },
      },
    },
  };
  return (
    <>
      <motion.div
        variants={animations.icons}
        animate="animate"
        exit="exit"
        initial="initial"
        className="my-1.5 lg:my-2"
      >
        <Link href={link} target="_blank" rel="noreferrer" area-label={label}>
          <i
            className={`text-2xl duration-300 text-lightBluePrimary/30 hover:text-cyanPrimary`}
          >
            {icon}
          </i>
        </Link>
      </motion.div>
    </>
  );
};

export { SocialLine, EmailLine };
