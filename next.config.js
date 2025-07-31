const withNextIntl = require('next-intl/plugin')('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.ctfassets.net',
      'cloudflare-images.com',
      'imagedelivery.net'
    ],
  },
  // Web3 wallet connection用の設定
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = withNextIntl(nextConfig);