import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/routes/:path*",
      },
    ];
  },
};

export default nextConfig;

