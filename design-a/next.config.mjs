/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/prototype/design-a' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/prototype/design-a' : '',
}

export default nextConfig
