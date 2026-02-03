/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: {
    buildActivity: true, // removes the floating Next.js logo / dev overlay
  },
  /*experimental: {
    turbo: false,
  }*/
};

export default nextConfig;
