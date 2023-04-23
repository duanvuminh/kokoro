/** @type {import('next').NextConfig} */
const nextConfig = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  images: {
    domains: ["kanjivg.tagaini.net"],
  },
};

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

const withMDX = require("@next/mdx")();
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withPWA(withMT(withMDX(nextConfig)));
