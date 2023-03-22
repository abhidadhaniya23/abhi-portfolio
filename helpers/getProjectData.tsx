const path = require("path");
const fs = require("fs");
const matter = require("gray-matter");

const getPosts = () => {
  const dirPath = path.join(__dirname, "../project");
  const files = fs.readdirSync(dirPath);

  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const fileContents = fs.readFileSync(
      path.join(__dirname, `../project/${slug}.mdx`),
      "utf8"
    );
    const { data, content } = matter(fileContents);
    return {
      slug,
      data,
      content,
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
    sortedDates.push(
      item.toLocaleDateString("en-AU", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
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

module.exports = getPosts;
