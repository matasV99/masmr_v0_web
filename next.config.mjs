/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/masmr_v0_web',
  assetPrefix: '/masmr_v0_web/',
}

module.exports = nextConfig
