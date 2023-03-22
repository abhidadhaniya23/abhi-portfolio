import Head from "next/head";
import Link from "next/link";
import { EmailLine, SocialLine } from "../components/ConnectLine";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <SocialLine />
      <Layout>
        <NotFoundComponent />
      </Layout>
      <EmailLine />
    </>
  );
};

const NotFoundComponent = () => {
  const animations = {
    initial: { opacity: 0 },
    exit: { opacity: 0, transition: { duration: 0.3, delay: 0.2 } },
    animate: { opacity: 1, transition: { duration: 0.2 } },
  };
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col gap-5 w-11/12 mx-auto"
    >
      <h1 className="text-4xl font-semibold text-cyanPrimary">
        Looks like something went wrong...!
      </h1>
      <Link href="/" className="btn w-fit">
        Go Back to Home
      </Link>
    </motion.div>
  );
};

export default NotFound;
