const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpackConfig');

const devServerConfig = {
  contentBase: path.resolve(__dirname, '../client'),
  historyApiFallback: true,
  stats: 'minimal',
};

const compiler = webpack(webpackConfig);

const devServer = new WebpackDevServer(compiler, devServerConfig);

module.exports = devServer;
