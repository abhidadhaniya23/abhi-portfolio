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
                console.log(data.data);
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
                <div className="my-10">
                    {blogsData.map((post, index) => (
                        <Link href={`/blogs/${post.slug}`}>
                            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.2, delay: index * 0.1 } }} exit={{ opacity: 0, y: -10, transition: { duration: 0.1, delay: index * 0.1 } }} key={index} className="flex flex-row items-center justify-start w-full mx-auto my-16 overflow-hidden rounded-md cursor-pointer bg-darkBluePrimary">
                                <div className="w-[30rem] h-[15rem]">
                                    <img src={post.social_image} className="object-cover w-full h-full" alt="" />
                                </div>
                                <div className="flex flex-col items-start justify-between px-8">
                                    <h2 className="text-2xl text-cyanPrimary">{post.title}</h2>
                                    <p className="my-3 text-base text-lightBlueSecondary">{post.description}</p>
                                    <div className="flex flex-row items-start justify-start my-2">
                                        {post.tag_list.map((tag, index) => (
                                            <span key={index + 1} className="px-4 py-2 mr-2 text-sm rounded-full font-codeText bg-cyanPrimary/10 text-cyanPrimary/90">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blogs;
