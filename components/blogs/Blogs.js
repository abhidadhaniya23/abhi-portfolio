import { useState, useEffect } from "react";
import Heading from "../Heading";
import Link from "next/link";
import { motion } from "framer-motion";

const Blogs = () => {
    const [blogsData, setBlogsData] = useState([]);
    const getData = () => {
        fetch("/api/posts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setBlogsData(data.data);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <div className="py-20">
                <Heading heading={"Read Blogs"} />
                <div className="w-full my-10">
                    {blogsData.map((post, index) => (
                        <Link key={index} href={`https://abhisblogs.hashnode.dev/${post.title.replaceAll(" ", "-").replaceAll(":", "").toLowerCase()}`}>
                            <a target={"_blank"}>
                                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.2, delay: index * 0.1 } }} exit={{ opacity: 0, y: -10, transition: { duration: 0.1, delay: index * 0.1 } }} key={index} className="flex flex-col justify-start w-[90%] mx-auto my-16 overflow-hidden rounded-md cursor-pointer md:w-full md:flex-row bg-darkBluePrimary">
                                    <div className="w-full md:w-[30rem] h-[15rem]">
                                        <img src={post.social_image} className="object-cover w-full h-full rounded-tl-md rounded-tr-md" alt="" />
                                    </div>
                                    <div className="flex flex-col items-start justify-around w-full p-4 md:py-4 md:px-6">
                                        <h2 className="pt-3 text-2xl text-cyanPrimary">{post.title}</h2>
                                        <p className="mt-0 text-base text-lightBlueSecondary">{post.description}</p>
                                        <div className="flex flex-row flex-wrap items-start justify-start md:flex-nowrap">
                                            {post.tag_list.map((tag, index) => (
                                                <span key={index + 1} className="px-4 py-2 m-2 text-sm rounded-full font-codeText bg-cyanPrimary/10 text-cyanPrimary/90">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </a>
                        </Link>
                    ))}
                </div>
                <div className="w-full text-center">
                    <a href="https://abhisblogs.hashnode.dev/" target={"_blank"} rel="noreferrer" className="btn">
                        Read More <i className="ml-2 fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Blogs;
