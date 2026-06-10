import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/about-us#contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
