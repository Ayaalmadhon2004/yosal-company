/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    qualities: [25, 50, 75, 80, 100],

    remotePatterns: [
      {
        // إضافة البروتوكولين معاً (http و https) لنفس الـ hostname
        protocol: 'http', 
        hostname: 'yosaal-website-backend.onrender.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'yosaal-website-backend.onrender.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [16, 48, 96, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;