import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/rz' : '';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: basePath,
  basePath,
};

export default nextConfig;
