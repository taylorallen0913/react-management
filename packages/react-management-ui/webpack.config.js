const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    historyApiFallback: true,
  },
  entry: path.resolve(__dirname, './src/index.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
};
