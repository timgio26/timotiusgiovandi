import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    EMAIL_KEY: process.env.EMAIL_KEY,
  },
};

export default nextConfig;
