const { override, addWebpackPlugin } = require('customize-cra');
const BundleTracker = require('webpack-bundle-tracker');
const webpack = require('webpack');
const path = require('path');

module.exports = override(
  (config, env) => {
    config.output.publicPath = "/";
    return config;
  },
  addWebpackPlugin(
    new BundleTracker({
      path: path.resolve(__dirname),
      filename: "webpack-stats.json",
    })
  ),
  (config, env) => {
    // Add Buffer polyfill
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      })
    );

    return config;
  }
);