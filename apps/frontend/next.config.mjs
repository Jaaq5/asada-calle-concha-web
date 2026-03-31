/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Docker
  output: "standalone",

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
