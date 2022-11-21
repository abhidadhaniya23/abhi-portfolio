import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export default async (req, res) => {
  // An array with your links
  const links = [
    {
      url: "/",
      lastmod: "2022-11-21T09:50:07+00:00",
      priority: 1.0,
    },
    { url: "/about", lastmod: "2022-11-21T09:50:07+00:00", priority: 0.8 },
    { url: "/tech-stack", lastmod: "2022-11-21T09:50:07+00:00", priority: 0.8 },
    {
      url: "/work",
      lastmod: "2022-11-21T09:50:07+00:00",
      priority: 0.8,
    },
    { url: "/gigaweb", lastmod: "2022-11-21T09:50:07+00:00", priority: 0.8 },
    { url: "/timeline", lastmod: "2022-11-21T09:50:07+00:00", priority: 0.8 },
    { url: "/resources", lastmod: "2022-11-21T09:50:07+00:00", priority: 0.8 },
    { url: "/blogs", lastmod: "2022-11-21T09:50:07+00:00", priority: 0.8 },
    { url: "/contact", lastmod: "2022-11-21T09:50:07+00:00", priority: 0.8 },
    { url: "/resume.pdf", lastmod: "2022-11-21T09:50:07+00:00", priority: 0.8 },
    {
      url: "/blogs/Guide-to-learn-reactjs",
      lastmod: "2022-11-21T09:50:07+00:00",
      priority: 0.64,
    },
    {
      url: "/blogs/xLinks.pro-clone-of-bio.link",
      lastmod: "2022-11-21T09:50:07+00:00",
      priority: 0.64,
    },
    {
      url: "/blogs/Increase-Productivity-using-Flow-Launcher",
      lastmod: "2022-11-21T09:50:07+00:00",
      priority: 0.64,
    },
    {
      url: "/blogs/Get-Web-Development-Resources-for-Free",
      lastmod: "2022-11-21T09:50:07+00:00",
      priority: 0.64,
    },
    {
      url: "/blogs/Tailwindcss-Most-Powerful-and-Popular-Framework-of-CSS",
      lastmod: "2022-11-21T09:50:07+00:00",
      priority: 0.64,
    },
    {
      url: "/blogs/Publish-Your-First-Website-Using-Github-Pages",
      lastmod: "2022-11-21T09:50:07+00:00",
      priority: 0.64,
    },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
