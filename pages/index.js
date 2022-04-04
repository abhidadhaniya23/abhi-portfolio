import Link from "next/link";
import Layout from "../components/Layout";
import { SocialLine } from "../components/ConnectLine";
import { EmailLine } from "../components/ConnectLine";
import { motion } from "framer-motion";

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

const animations = {
    spanTag: {
        initial: { opacity: 0, y: -100 },
        exit: { opacity: 0, y: -100, transition: { duration: 0.3 } },
        animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    },
    name: {
        initial: { opacity: 0, x: -50 },
        exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
        animate: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.2 } },
    },
    tagLine: {
        initial: { opacity: 0, x: -50 },
        exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
        animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.4 } },
    },
    desc: {
        initial: { opacity: 0, x: -50 },
        exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
        animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.6 } },
    },
    btn: {
        initial: { opacity: 0, y: -50 },
        exit: { opacity: 0, y: -50, transition: { duration: 0.2 } },
        animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.7 } },
    },
};

const HeaderIntro = () => {
    return (
        <>
            <motion.span variants={animations.spanTag} initial="initial" animate="animate" exit="exit" className="relative my-5 text-2xl font-codeText text-cyanPrimary">
                Hi, My name is
            </motion.span>
            <motion.h1 variants={animations.name} initial="initial" animate="animate" exit="exit" className="my-5 text-6xl font-bold text-lightBluePrimary">
                Abhi Dadhaniya
            </motion.h1>
            <motion.h2 variants={animations.tagLine} initial="initial" animate="animate" exit="exit" className="my-5 font-bold text-7xl text-lightBlueSecondary">
                I build things for web.
            </motion.h2>
            <motion.p variants={animations.desc} initial="initial" animate="animate" exit="exit" className="mb-10 text-xl text-lightBlueSecondary/80">
                I have been a web developer for the past 3 years. I specialize in JavaScript, ReactJS, NodeJS & ExpressJS and I’m using MongoDB as Database.
            </motion.p>
            <motion.div variants={animations.btn} initial="initial" animate="animate" exit="exit">
                <Link href="/contact">
                    <a className="btn">Hire Me</a>
                </Link>
            </motion.div>
        </>
    );
};
