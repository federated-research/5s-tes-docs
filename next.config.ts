import type { NextConfig } from "next";
import nextra from "nextra";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: "",
  assetPrefix: "",
};

const withNextra = nextra({});

export default withNextra({
  ...nextConfig,
});
