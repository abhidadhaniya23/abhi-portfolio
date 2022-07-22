import { MDXRemote } from "next-mdx-remote";
import getPost from "../getPost";
import getPosts from "../getPosts";
import Layout from "../components/Layout";
import { serialize } from "next-mdx-remote/serialize";
import { motion } from "framer-motion";
import Menu from "../components/menu/Menu";
import MenuBarContext from "../context/MenuBarContext";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";

function Post({ data, content }) {
    const [menuActive, setMenuActive] = useState(false);
    const animations = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.3 } },
    };
    return (
        <MenuBarContext.Provider value={{ menuActive, setMenuActive }}>
            <Menu />
            <div className="flex flex-row items-center min-h-screen bg-gradient-to-r to-darkBluePrimary from-darkLightBluePrimary">
                <div className="absolute top-0 z-10 w-full md:relative md:w-1/5">
                    <Navbar />
                </div>
                <div className="flex flex-row items-center justify-center w-full">
                    {/* <div className="flex flex-col items-center justify-center w-full px-0 mx-auto md:px-0 md:w-3/5">{component}</div> */}
                    <div className="w-full px-0 mx-auto md:px-0 md:w-3/5">
                        <motion.div variants={animations} initial="initial" animate="animate" exit="exit" className="px-5 my-20 prose-code:font-codeText prose-headings:text-cyanPrimary prose-sm md:prose-xl prose prose-strong:text-white/90 prose-strong:font-bold prose-a:text-cyanPrimary prose-pre:bg-cyanPrimary/10 prose-blockquote:bg-cyanPrimary/10 prose-blockquote:text-cyanPrimary prose-blockquote:border-l-2 prose-blockquote:border-cyanPrimary prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-md prose-code:text-white prose-code:-z-50">
                            <h1 className="font-bold text-3xl sm:text-5xl mt-24 mb-12">{data.title}</h1>
                            {/* <time className="text-white/40 font-bodyText">{data.date}</time> */}
                            {/* <p className="text-white/40">by Abhi Dadhaniya</p> */}
                            <p className="prose my-5 text-white/70 text-xl ">
                                <MDXRemote {...content} />
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </MenuBarContext.Provider>
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
