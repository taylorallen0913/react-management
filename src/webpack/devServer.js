const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const open = require('better-opn');

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
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
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

const PORT = 8000;

devServer.listen(PORT, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }
  open(`http://localhost:${PORT}`);
  console.log('React Management UI started on port ', PORT);
});
