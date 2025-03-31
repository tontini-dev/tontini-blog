const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
    unoptimized: true, // 🔥 IMPORTANTE para funcionar no Firebase
  },
  output: 'export', // 🔥 Indica que vamos exportar como HTML estático
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig