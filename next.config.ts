import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['ko', 'en', 'ja'],
    defaultLocale: 'ko',
    // localePath: path.resolve('./public/locales')
  },
  reactStrictMode: true,
  trailingSlash: false,
};

export default nextConfig;
