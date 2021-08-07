module.exports = {
  target: 'serverless',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    config.resolve.fallback = {
      fs: false,
    };

    return config;
  },
};
