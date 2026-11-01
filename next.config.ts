import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // SVGs are served with a locked-down CSP and forced download, as recommended by the Next.js docs.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    qualities: [25, 50, 75, 80, 100],
    remotePatterns: [
      // Local backend, only allowed during development.
      ...(isProd
        ? []
        : [
            {
              protocol: "http" as const,
              hostname: "localhost",
              port: "8000",
              pathname: "/**",
            },
          ]),
      {
        protocol: "http",
        hostname: "yosaal-website-backend.onrender.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "yosaal-website-backend.onrender.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [16, 48, 96, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: isProd,
  },
};

export default nextConfig;
