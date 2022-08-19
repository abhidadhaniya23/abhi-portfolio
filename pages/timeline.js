import Timeline from "../components/timeline/Timeline";
import Layout from "../components/Layout";
import Head from "next/head";

const timeline = () => {
    return (
        <>
            <Head>
                <title>Developer Abhi || Proof of work</title>
            </Head>
            <Layout component={<Timeline />} />
        </>
    );
};

export default timeline;
