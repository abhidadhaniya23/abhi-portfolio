import Link from "next/link";
import Layout from "../components/Layout";
import { SocialLine } from "../components/ConnectLine";
import { EmailLine } from "../components/ConnectLine";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import logo from "../public/Alogo.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhi Dadhaniya</title>
      </Head>
      <SocialLine />
      <Layout component={<HeaderIntro />} />
      <EmailLine />
    </>
  );
}

const animations = {
  spanTag: {
    initial: { opacity: 0, y: -100 },
    exit: { opacity: 0, y: 0, transition: { duration: 0.3, delay: 0.5 } },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  },
  name: {
    initial: { opacity: 0, x: -50 },
    exit: { opacity: 0, x: -30, transition: { duration: 0.3, delay: 0.4 } },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.15 } },
  },
  tagLine: {
    initial: { opacity: 0, x: -50 },
    exit: { opacity: 0, x: -30, transition: { duration: 0.3, delay: 0.3 } },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.3 } },
  },
  desc: {
    initial: { opacity: 0, x: -50 },
    exit: { opacity: 0, x: -30, transition: { duration: 0.3, delay: 0.2 } },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.45 } },
  },
  btn: {
    initial: { opacity: 0, y: -30 },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3, delay: 0.1 } },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.6 } },
  },
};

const HeaderIntro = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-center px-10">
        <motion.span
          variants={animations.spanTag}
          initial="initial"
          animate="animate"
          exit="exit"
          className="sm:hidden block relative my-1 text-base md:my-5 md:text-2xl font-codeText text-cyanPrimary"
        >
          <Image
            src={logo}
            alt="Abhi Dadhaniya Portfolio"
            width={100}
            height={100}
          />
        </motion.span>
        <motion.span
          variants={animations.spanTag}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative my-1 text-base md:my-5 md:text-2xl font-codeText text-cyanPrimary"
        >
          Hi, My name is
        </motion.span>
        <motion.h1
          variants={animations.name}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-4xl font-bold md:my-0 md:text-6xl text-lightBluePrimary"
        >
          Abhi Dadhaniya
        </motion.h1>
        <motion.h2
          variants={animations.tagLine}
          initial="initial"
          animate="animate"
          exit="exit"
          className="my-2 text-5xl font-bold md:my-5 md:text-7xl text-lightBlueSecondary"
        >
          I build things for web.
        </motion.h2>
        <motion.p
          variants={animations.desc}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-base mb-7 md:mb-10 md:text-xl text-lightBlueSecondary/80"
        >
          I am a Full Stack Web Developer with 2+ years of experience in
          JavaScript, ReactJS, NodeJS & ExpressJS and MongoDB as Database.
        </motion.p>
        <motion.div
          variants={animations.btn}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Link href="/contact">
            <a className=" btn">Hire Me</a>
          </Link>
        </motion.div>
      </div>
    </>
  );
};
