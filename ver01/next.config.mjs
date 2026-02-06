/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // GitHub Pages에서 /design-a/ URL이 design-a/index.html로 서빙되도록
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/prototype' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/prototype' : '',
}

export default nextConfig
