/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  images: {
    domains: ['kanjivg.tagaini.net'],
  },
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
