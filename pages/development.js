import Development from "../components/development/Development";
import Layout from "../components/Layout";
import Head from "next/head";

const development = () => {
    return (
        <>
            <Head>
                <title>Developer Abhi || Projects</title>
            </Head>
            <Layout component={<Development />} />
        </>
    );
};

export default development;
