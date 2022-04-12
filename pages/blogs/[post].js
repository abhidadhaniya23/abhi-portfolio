import { useRouter } from "next/router";
import { useState } from "react";
import MarkdownIt from "markdown-it";
import Script from "next/script";
import Head from "next/head";

const timeSince = (date) => {
    let seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
};

const blogs = () => {
    const [markdown, setMarkdown] = useState("");
    const [title, setTitle] = useState("");
    const [readingTime, setReadingTime] = useState("");
    const [createdTime, setCreatedTime] = useState("");
    const router = useRouter();
    const id = router.query.post;
    fetch("/api/postData", {
        method: "POST",
        body: id,
    })
        .then((res) => res.json())
        .then((res) => {
            setMarkdown(res.data.body_markdown);
            setTitle(res.data.title);
            setCreatedTime(timeSince(new Date(res.data.published_at).getTime(new Date(res.data.published_at))));
            setReadingTime(res.data.reading_time_minutes);
        });

    const md = new MarkdownIt();
    const result = md.render(markdown);

    // <div class="content">
    //     <h1>{/* <%=title%> */}</h1>
    //     <div class="flex-row-class">
    //         <p style="margin-right: 1rem;">
    //             <i class="fa fa-clock mr-2"></i>
    //             {/* <%=readingTime%> min. to read , */}
    //         </p>
    //         <p>{/* <%=createdTime%> ago */}</p>
    //     </div>
    //     <div class="author">
    //         <a href="/" class="about-author">
    //             About Developer
    //         </a>
    //     </div>
    //     <img class="coverImg" src="<%=coverImg%>" alt="<%=title%>" />
    //     <div id="html-content">
    return (
        <>
            <Head>
                <Script src={"prism/prism.js"}></Script>
            </Head>
            <div className="bg-white">
                <div className="container w-4/5 py-20 mx-auto bg-white shadow-2xl px-28">
                    <h1 className="my-4 text-6xl font-bold tracking-wide font-bodyText">{title}</h1>
                    <div className="flex flex-row items-center mt-16 mb-7 font-bodyText text-darkBluePrimary">
                        <span className="mx-2 text-xl">
                            <i className="mr-2 fa-solid fa-book-open"></i>
                            {readingTime} Minutes
                        </span>
                        <span className="mx-2 text-xl">
                            <i className="mr-2 fa-solid fa-calendar-check"></i>
                            {createdTime} Ago
                        </span>
                    </div>
                    <div id="bodyContent" className="blog-content" dangerouslySetInnerHTML={{ __html: result }}></div>
                </div>
            </div>
        </>
    );
};
// </div>
// {/* <div class="main-body">
//     <a class="more-posts" href="/#latest-blogs" target="none">Read More Posts >></a>
// </div> */}
// </div>

export default blogs;
