import { defineConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig = defineConfig({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
});

export default nextConfig;
