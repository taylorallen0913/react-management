const path = require('path');

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

module.exports = webpackConfig;
