/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactRemoveProperties: true,
  },

  experimental: {
    appDir: true,
  },

  modularizeImports: {
    lodash: {
      preventFullImport: true,
      transform: "lodash/{{member}}",
    },
  },

  reactStrictMode: true,

  swcMinify: true,

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.experiments = { layers: true, topLevelAwait: true };

    return config;
  },
};

module.exports = nextConfig;
