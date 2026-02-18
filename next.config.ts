import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  // eslint config is ignored in recent Next.js versions via next.config.ts
  // keeping it clean.

  // Reverting distDir to default '.next' to restore standard Vercel integration
};

export default nextConfig;
