import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const webpackConfig = {
  entry: path.resolve(__dirname, '../client/index.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
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
