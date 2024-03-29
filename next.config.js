/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    domains: ["kanjivg.tagaini.net","lh3.googleusercontent.com"],
  },
  experimental: {
    serverActions: true
  },
};

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

const withMDX = require("@next/mdx")();

module.exports = withPWA(withMDX(nextConfig));
