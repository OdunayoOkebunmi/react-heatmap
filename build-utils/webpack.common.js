const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../', 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    port: 8080,
    historyApiFallback: true,
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader'] },
      { test: /\.(css|sass|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(gif|png|jpe?g|svg)$/i, use: 'file-loader' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../', 'src/'),
      '@Components': path.resolve(__dirname, '../', 'src/components/'),
      '@Actions': path.resolve(__dirname, '../', 'src/redux/actions/'),
      '@Reducers': path.resolve(__dirname, '../', 'src/redux/reducers/'),

    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.png',
    }),
  ],
};
