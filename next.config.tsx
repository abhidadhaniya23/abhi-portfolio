/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: [
      "upload.wikimedia.org",
      "cdn-icons-png.flaticon.com",
      "assets.stickpng.com",
      "repository-images.githubusercontent.com",
      "miro.medium.com",
    ],
  },
};

module.exports = nextConfig;
