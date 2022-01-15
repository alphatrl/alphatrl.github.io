const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: '',
  assetPrefix: isProd ? './' : '',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    config.resolve.fallback = {
      fs: false,
    };

    return config;
  },
};
