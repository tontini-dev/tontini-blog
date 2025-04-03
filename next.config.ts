/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
    // remove "unoptimized: true" (não é necessário pro Netlify)
  },
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig