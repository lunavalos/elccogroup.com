/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "elccogroup.com",
      },
    ],
  },
};

export default nextConfig;
