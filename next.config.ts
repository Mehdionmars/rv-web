import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // A stray package-lock.json above this folder otherwise wins root inference.
  turbopack: { root: path.resolve(import.meta.dirname) },
  // The site is French-first; "/" sends visitors to the default locale.
  async redirects() {
    return [
      { source: "/", destination: "/fr", permanent: false },
      // The v3 direction is now the home page; v2 was a discarded draft.
      { source: "/:locale/v3", destination: "/:locale", permanent: true },
      { source: "/:locale/v2", destination: "/:locale", permanent: true },
    ];
  },
  images: {
    // Five editorial photos are hot-linked from Pexels, as in the original
    // design canvas. Everything else is local under public/uploads.
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com", pathname: "/photos/**" },
    ],
  },
};

export default nextConfig;
