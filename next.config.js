const { withSentryConfig } = require("@sentry/nextjs");

const moduleExports = (module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com"],
  },
});

const SentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
