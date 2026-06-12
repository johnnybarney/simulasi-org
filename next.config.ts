import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/about-us#contact",
        permanent: true,
      },
      {
        source: "/services/live-technical-simulation",
        destination: "/services/tsx",
        permanent: true,
      },
      {
        source: "/services/cyber-exercise",
        destination: "/services/ittx",
        permanent: true,
      },
      {
        source: "/services/red-teaming",
        destination: "/services/attack-simulation",
        permanent: true,
      },
      {
        source: "/services/osint-ai-intelligence",
        destination: "/services/recon-intelligence",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
