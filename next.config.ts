import type { NextConfig } from "next";

// GitHub Pages serves this project at /mdraiyanalam95.CTAs/
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/mdraiyanalam95.CTAs";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
