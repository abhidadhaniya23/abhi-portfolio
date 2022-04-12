import { useRouter } from "next/router";
import { useState } from "react";
import MarkdownIt from "markdown-it";
import "../../styles/blogpost.css";

const blogs = () => {
    const [markdown, setMarkdown] = useState("");
    const router = useRouter();
    const id = router.query.post;
    fetch("/api/postData", {
        method: "POST",
        body: id,
    })
        .then((res) => res.json())
        .then((res) => {
            setMarkdown(res.data);
        });

    const md = new MarkdownIt();
    const result = md.render(markdown);

    return (
        <>
            <div class="content">
                <h1>{/* <%=title%> */}</h1>
                <div class="flex-row-class">
                    <p style="margin-right: 1rem;">
                        <i class="fa fa-clock mr-2"></i>
                        {/* <%=readingTime%> min. to read , */}
                    </p>
                    <p>{/* <%=createdTime%> ago */}</p>
                </div>
                <div class="author">
                    <a href="/" class="about-author">
                        About Developer
                    </a>
                </div>
                <img class="coverImg" src="<%=coverImg%>" alt="<%=title%>" />
                <div id="html-content">
                    <div id="bodyContent" dangerouslySetInnerHTML={{ __html: result }}></div>
                </div>
                {/* <div class="main-body">
                    <a class="more-posts" href="/#latest-blogs" target="none">Read More Posts >></a>
                </div> */}
            </div>
        </>
    );
};

export default blogs;
