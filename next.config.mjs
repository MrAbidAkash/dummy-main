/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  
  // Optimize for Safari and iOS
  compiler: {
    // Remove console logs in production for better Safari performance
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Enable SWC minification for better Safari compatibility
  swcMinify: true,
  
  // Optimize images for Safari
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Headers for Safari compatibility
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Cache optimization for Safari
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          // Security headers that Safari respects
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
