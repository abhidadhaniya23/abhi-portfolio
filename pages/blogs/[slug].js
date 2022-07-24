import { MDXRemote } from "next-mdx-remote";
import getPost from "../../getPost";
import getPosts from "../../getPosts";
import Layout from "../../components/Layout";
import { serialize } from "next-mdx-remote/serialize";
import { motion } from "framer-motion";
import Menu from "../../components/menu/Menu";
import MenuBarContext from "../../context/MenuBarContext";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import Head from "next/head";

function Post({ data, content }) {
    const [menuActive, setMenuActive] = useState(false);
    const animations = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 1 } },
        exit: { opacity: 0, transition: { duration: 0.8 } },
    };
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="title" content={data.title} />
                <meta name="description" content="I have been a web developer for the past 2 years. I specialize in JavaScript, ReactJS, NodeJS & ExpressJS and I’m using MongoDB as Database." />
                <meta name="keywords" content="Abhi Dadhaniya, MERN Stack, Developer, Portfolio" />
                <meta name="google-site-verification" content="eVbmWrqbc7ik87pvSg21efPrLvJ24IZo-58yBvzSxDY" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#071124" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="15 days" />
                <meta name="author" content="Abhi Dadhaniya" />
                <title>{data.title}</title>
            </Head>
            <MenuBarContext.Provider value={{ menuActive, setMenuActive }}>
                <Menu />
                <div className="flex flex-row items-baseline min-h-screen bg-gradient-to-r to-darkBluePrimary from-darkLightBluePrimary">
                    <div className="absolute top-0 z-10 w-full md:relative md:w-1/5">
                        <Navbar />
                    </div>
                    <div className="flex flex-row items-center justify-center w-full">
                        {/* <div className="flex flex-col items-center justify-center w-full px-0 mx-auto md:px-0 md:w-3/5">{component}</div> */}
                        <div className="w-full px-0 mx-auto md:px-0 md:w-3/5">
                            <motion.article variants={animations} initial="initial" animate="animate" exit="exit" className="px-5 my-10 sm:my-20 !prose-p:font-inter prose-p:font-thin prose-code:font-codeText prose-headings:text-cyanPrimary prose-sm md:prose-xl prose prose-strong:text-white/90 prose-strong:font-bold prose-li:marker:text-cyanPrimary prose-a:text-cyanPrimary prose-pre:bg-cyanPrimary/5 prose-blockquote:bg-cyanPrimary/10 prose-blockquote:text-cyanPrimary prose-blockquote:border-l-2 prose-blockquote:border-cyanPrimary prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-md prose-code:text-white prose-code:-z-50">
                                <h1 className="font-bold text-4xl sm:text-5xl mt-0 sm:mt-0 mb-10">{data.title}</h1>
                                {/* <time className="text-white/80 font-bodyText">{data.date}</time> */}
                                {/* <p className="text-white/40">by Abhi Dadhaniya</p> */}
                                {data.tags.map((tag, index) => (
                                    <span key={index} className="bg-cyanPrimary/5 text-cyanPrimary font-codeText rounded-full px-4 py-2 text-base mr-2">
                                        #{tag}
                                    </span>
                                ))}
                                <p className="prose mb-5 text-white/70 text-xl ">
                                    <MDXRemote {...content} />
                                </p>
                            </motion.article>
                        </div>
                    </div>
                </div>
            </MenuBarContext.Provider>
        </>
    );
}

export default Post;

export const getStaticPaths = async () => {
    const posts = await getPosts();
    const paths = posts.map((post) => ({ params: { slug: post.slug } }));
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const post = await getPost(params.slug);
    const mdxSource = await serialize(post.content);
    return {
        props: {
            data: post.data,
            content: mdxSource,
        },
    };
};
