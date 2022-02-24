/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    reactRoot: true,
  },
  images: {
    domains: ["imagedelivery.net", "videodelivery.net"],
  },
};
