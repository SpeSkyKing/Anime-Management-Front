import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/anime/:path*',
        destination: 'http://localhost:8000/anime/:path*',
      },
    ];
  },
};

export default nextConfig;
