/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  allowedDevOrigins: [
    "http://26.252.26.209:3000",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
  ],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
