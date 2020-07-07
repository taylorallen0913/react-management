const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = {
  entry: path.resolve(__dirname, '../client/index.js'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '../client/build'),
    filename: 'bundle.js',
  },
};

const devServerConfig = {
  contentBase: path.resolve(__dirname, '../client'),
  historyApiFallback: true,
};

const compiler = webpack(webpackConfig);

const devServer = new WebpackDevServer(compiler, devServerConfig);

const port = 3000;

devServer.listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('WebpackDevServer listening at localhost:', port);
});
