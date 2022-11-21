import Link from "next/link";
import { motion } from "framer-motion";
import { RiLinkedinLine } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

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
      icon: "SiInstagram",
    },
    {
      label: "Twitter",
      link: "https://twitter.com/abhidadhaniya3",
      icon: "FiTwitter",
    },
    {
      label: "Github",
      link: "https://github.com/abhidadhaniya23",
      icon: "FiGithub",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/abhidadhaniya/",
      icon: "RiLinkedinLine",
    },
    {
      label: "Email",
      link: "mailto:abhidadhaniya23@gmail.com",
      icon: "FiMail",
    },
  ];
  return (
    <>
      <div className="absolute flex flex-col items-center justify-center md:fixed right-10">
        <motion.span
          variants={animations.line}
          animate="animate"
          exit="exit"
          initial="initial"
          className="block bg-lightBluePrimary/30 mb-2 md:mb-5 h-12 md:h-32 w-[2px] rounded-full"
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
      <div className="sm:flex hidden absolute left-0 right-auto flex-row-reverse items-center justify-center md:left-auto md:right-0 md:flex-row bottom-5 md:bottom-10">
        <motion.div
          variants={animations.emailAnimate}
          animate="animate"
          exit="exit"
          initial="initial"
        >
          <Link href="mailto:abhidadhaniya23@gmail.com">
            <a className="duration-300 flex flex-row justify-center items-center text-lightBluePrimary/50 hover:text-cyanPrimary/90">
              <FiMail className="mr-3 font-bold text-2xl" />{" "}
              abhidadhaniya23@gmail.com
            </a>
          </Link>
        </motion.div>
        <motion.span
          variants={animations.line}
          animate="animate"
          exit="exit"
          initial="initial"
          className="block bg-lightBluePrimary/30 mx-5 w-10 md:w-32 h-[2px] rounded-full"
        ></motion.span>
      </div>
    </>
  );
};

const Icon = ({ index, icon, link, label }) => {
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
        className="my-1.5 md:my-2"
      >
        <Link href={link}>
          <a target="_blank" rel="noreferrer" area-label={label}>
            <i
              className={`text-2xl duration-300 text-lightBluePrimary/30 hover:text-cyanPrimary`}
            >
              {icon === "SiInstagram" ? (
                <SiInstagram />
              ) : icon === "FiTwitter" ? (
                <FiTwitter />
              ) : icon === "FiGithub" ? (
                <FiGithub />
              ) : icon === "FiMail" ? (
                <FiMail className="sm:hidden block" />
              ) : (
                <RiLinkedinLine />
              )}
            </i>
          </a>
        </Link>
      </motion.div>
    </>
  );
};

export { SocialLine, EmailLine };
