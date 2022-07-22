// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
// };
// // next.config.js
// module.exports = {
//     nextConfig,
// };
/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
});

module.exports = withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"],
});
