import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  devIndicators: false,
  basePath: process.env.NODE_ENV === 'production' ? '/dcrazyx59.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/dcrazyx59.github.io' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
