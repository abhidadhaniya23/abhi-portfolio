import Layout from "../components/Layout";
// import Blogs from "../components/blogs/Blogs";
import PostCard from "../components/blogs/PostCard";
import getPosts from "../getPosts";
import Head from "next/head";
import Heading from "../components/Heading";

export default function blog({ posts }) {
    return (
        <>
            <Head>
                <title>Developer Abhi || Blogs</title>
            </Head>
            <Layout
                component={
                    <>
                        <div className="py-20">
                            <Heading heading={"Blog Posts"} />
                            <div className="my-10">
                                {posts.map((post, index) => (
                                    <PostCard key={post.slug} tags={post.data.tags} index={index} title={post.data.title} date={post.data.date} description={post.data.description} slug={post.slug} />
                                ))}
                            </div>
                        </div>
                    </>
                }
            />
        </>
    );
}
export const getStaticProps = () => {
    const posts = getPosts();

    return {
        props: {
            posts,
        },
    };
};
