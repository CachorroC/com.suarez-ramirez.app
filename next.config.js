/** @type {import('next').NextConfig} */
const nextConfig = require('next-pwa')({
  dest: 'public',
});

module.exports = nextConfig({
  reactStrictMode: true,
  /* eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },  */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/images/**',
      },
    ],
  },
});
