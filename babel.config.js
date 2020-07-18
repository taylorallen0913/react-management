module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/client/assets',
          '@icons': './src/client/assets/icons',
          '@components': './src/client/components',
          '@pages': './src/client/pages',
          '@actions': './src/client/redux/actions',
          '@reducers': './src/client/redux/reducers',
        },
      },
    ],
  ],
};
