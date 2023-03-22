import Link from "next/link";
import Layout from "../components/Layout";
import { SocialLine } from "../components/ConnectLine";
import { EmailLine } from "../components/ConnectLine";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhi Dadhaniya</title>
      </Head>
      <SocialLine />
      <Layout>
        <HeaderIntro />
      </Layout>
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
      <div className="flex flex-col items-start justify-center">
        <motion.span
          variants={animations.spanTag}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:hidden block relative my-1 text-base lg:my-5 lg:text-2xl font-codeText text-cyanPrimary"
        >
          <Image
            src="/Alogo.svg"
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
          className="relative my-1 text-base lg:my-5 lg:text-2xl font-codeText text-cyanPrimary"
        >
          Hi, My name is
        </motion.span>
        <motion.h1
          variants={animations.name}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-4xl font-bold lg:my-0 lg:text-6xl text-lightBluePrimary"
        >
          Abhi Dadhaniya
        </motion.h1>
        <motion.h2
          variants={animations.tagLine}
          initial="initial"
          animate="animate"
          exit="exit"
          className="my-3 text-5xl font-bold lg:my-5 lg:text-7xl text-lightBlueSecondary"
        >
          I build things for web.
        </motion.h2>
        <motion.p
          variants={animations.desc}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-base lg:text-xl text-lightBlueSecondary/80"
        >
          I&apos;m a full stack web developer based in India. I help clients to
          build beautiful animated and stunning websites from scratch.
        </motion.p>
        <motion.div
          variants={animations.btn}
          initial="initial"
          animate="animate"
          exit="exit"
          className="mt-5 lg:mt-7 flex flex-row gap-4 items-center"
        >
          <Link href="/contact" className="btn">
            Get in Touch
          </Link>
          {/* <Link
            target="_blank"
            href="https://www.upwork.com/freelancers/~012c300b71361fe159"
            className="btn"
          >
            Hire Me
          </Link> */}
        </motion.div>
      </div>
    </>
  );
};
