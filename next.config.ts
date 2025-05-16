import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // for static HTML
  images: {
    unoptimized: true,  // for export to static site
  },
};

export default nextConfig;
