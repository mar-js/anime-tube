/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: [ 'styles.ts', 'tsx' ],
  reactStrictMode: true,
  images: {
    domains: [ 'cdn.myanimelist.net' ],
    disableStaticImages: true
  }
}

module.exports = nextConfig
