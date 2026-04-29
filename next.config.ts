/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 1. إضافة تنسيقات الصور الحديثة (WebP و AVIF) لتقليل حجم الصور بنسبة 30% إضافية
    formats: ['image/avif', 'image/webp'],
    
    remotePatterns: [
      {
        protocol: 'http', // تأكدي لو كان السيرفر يدعم https يفضل تغييره
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