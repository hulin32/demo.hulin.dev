import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    reactCompiler: true,
  },
  experimental: {
    after: true,
  },
};

export default nextConfig;
