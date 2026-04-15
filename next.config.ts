import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/sides/experience/nyangiverse",
        destination: "/graphic-design/nyangiverse",
        permanent: true,
      },
      {
        source: "/sides/project/hasom",
        destination: "/graphic-design/hasom",
        permanent: true,
      },
      {
        source: "/sides/merch/kapacity-merch",
        destination: "/graphic-design/kapacity",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
