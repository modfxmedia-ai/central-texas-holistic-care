import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "centraltexasholisticcarepllc.com",
      },
      {
        protocol: "https",
        hostname: "www.centraltexasholisticcarepllc.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      {
        source: "/shop",
        destination: "/products/",
        permanent: true,
      },
      {
        source: "/shop/:path*",
        destination: "/products/",
        permanent: true,
      },
    ];
  },

  async headers() {
    // The Next.js dev/build pipeline warns against overriding Cache-Control
    // on `/_next/static/*` (it already sets `immutable` correctly). Production
    // edge caching at the CDN (Vercel) layer is the right place for those —
    // see vercel.json. Here we keep only baseline security headers.
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/:path*\\.(svg|jpg|jpeg|png|gif|webp|avif|ico|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
