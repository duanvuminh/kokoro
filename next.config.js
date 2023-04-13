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

const withPWA = require('next-pwa')({
  dest: 'public'
})

const withMDX = require('@next/mdx')()

module.exports = withPWA(withMDX(nextConfig))

