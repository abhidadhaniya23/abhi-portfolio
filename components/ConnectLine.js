import Link from "next/link";
import { motion } from "framer-motion";

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
            icon: "fa-brands fa-instagram",
        },
        {
            label: "Twitter",
            link: "https://twitter.com/abhidadhaniya3",
            icon: "fa-brands fa-twitter",
        },
        {
            label: "Github",
            link: "https://github.com/abhidadhaniya23",
            icon: "fa-brands fa-github",
        },
        {
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/abhi-dadhaniya-a09924220/",
            icon: "fa-brands fa-linkedin",
        },
    ];
    return (
        <>
            <div className="fixed top-0 flex flex-col items-center justify-center right-10">
                <motion.span variants={animations.line} animate="animate" exit="exit" initial="initial" className="block bg-lightBluePrimary/30 mb-5 h-32 w-[2px] rounded-full"></motion.span>
                {socialIcons.map((icon, index) => (
                    <Icon icon={icon.icon} index={index} label={icon.label} key={index} link={icon.link} />
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
            <div className="absolute right-0 flex flex-row items-center justify-center bottom-10">
                <motion.div variants={animations.emailAnimate} animate="animate" exit="exit" initial="initial">
                    <Link href="mailto:abhidadhaniya23@gmail.com">
                        <a className="duration-300 text-lightBluePrimary/50 hover:text-cyanPrimary/90">
                            <i className="mr-2 fa-solid fa-envelope"></i> abhidadhaniya23@gmail.com
                        </a>
                    </Link>
                </motion.div>
                <motion.span variants={animations.line} animate="animate" exit="exit" initial="initial" className="block bg-lightBluePrimary/30 ml-5 w-32 h-[2px] rounded-full"></motion.span>
            </div>
        </>
    );
};

const Icon = ({ index, icon, link, label }) => {
    const animations = {
        icons: {
            initial: { opacity: 0, y: -20 },
            exit: { opacity: 0, y: 0, transition: { duration: 0.3 } },
            animate: { opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.2 + 1 } },
        },
    };
    return (
        <>
            <motion.div variants={animations.icons} animate="animate" exit="exit" initial="initial">
                <Link href={link}>
                    <a target="_blank" area-label={label}>
                        <i className={`my-2 text-xl duration-300 text-lightBluePrimary/30 hover:text-cyanPrimary ${icon}`}></i>
                    </a>
                </Link>
            </motion.div>
        </>
    );
};

export { SocialLine, EmailLine };
