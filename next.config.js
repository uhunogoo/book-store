/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/profile',
        permanent: true,
      },
    ];
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
