const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  exclude: path.resolve(__dirname, 'src/assets/svg'),
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
