import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getPosts = () => {
    const files = fs.readdirSync(path.join("posts"));
    // const allPostsData = files.map((fileName) => {
    //     const slug = fileName.replace(".mdx", "");
    //     const fileContents = fs.readFileSync(path.join(`posts/${slug}.mdx`), "utf8");
    //     const { data } = matter(fileContents);
    //     return {
    //         slug,
    //         data,
    //     };
    // });
    const allPostsData = files.map((fileName) => {
        const slug = fileName.replace(".mdx", "");
        const fileContents = fs.readFileSync(path.join(`posts/${slug}.mdx`), "utf8");
        const { data } = matter(fileContents);
        return {
            slug,
            data,
        };
    });
    const dates = [];
    allPostsData.forEach((post) => {
        dates.push(new Date(post.data.date));
    });
    dates.sort((a, b) => new Date(b) - new Date(a));
    const sortedDates = [];
    const replacedDates = [];
    let newSortedPosts = [];
    dates.forEach((item) => {
        sortedDates.push(item.toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" }));
    });
    sortedDates.forEach((item) => {
        replacedDates.push(item.replace(",", ""));
    });
    // console.log(replacedDates);
    allPostsData.reverse();
    /* Sorting the posts by date. */
    for (let j = 0; j < replacedDates.length; j++) {
        for (let i = 0; i < allPostsData.length; i++) {
            // console.log(`${replacedDates[j]}===${allPostsData[i].data.date} : ${replacedDates[j] === allPostsData[i].data.date}`);
            if (replacedDates[j] === allPostsData[i].data.date) {
                newSortedPosts.push(allPostsData[i]);
            }
        }
    }
    // removed the duplicate posts from array.
    newSortedPosts = newSortedPosts.filter(function (value, index, array) {
        return array.indexOf(value) === index;
    });
    // console.log(newSortedPosts);

    return newSortedPosts;
};

export default getPosts;
