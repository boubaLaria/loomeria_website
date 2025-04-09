import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.pexels.com'],
  },
	output: "standalone",
  async headers() {
    return [
      {
        source: '/(favicon.ico|logo-loomeria.png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
