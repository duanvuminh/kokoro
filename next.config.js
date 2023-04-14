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

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public'
});

const withMDX = require('@next/mdx')()

module.exports = withPWA(withMDX(nextConfig))

