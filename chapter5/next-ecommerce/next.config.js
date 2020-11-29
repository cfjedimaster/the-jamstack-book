module.exports = {
  env: {
    CHEC_PUBLIC_KEY: process.env.CHEC_PUBLIC_KEY,
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};
