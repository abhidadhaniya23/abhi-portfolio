import Layout from "../components/Layout";
import Blogs from "../components/blogs/Blogs";
import Head from "next/head";

const blogs = () => {
    return (
        <>
            <Head>
                <title>Developer Abhi || Blogs</title>
            </Head>
            <Layout component={<Blogs />} />
        </>
    );
};

export default blogs;
