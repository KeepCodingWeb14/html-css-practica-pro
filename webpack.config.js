const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    home: './src/home.js',
    projectsPage: './src/projectsPage.js',
    error: './src/error.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/templates/index.html',
      filename: 'home.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/templates/projects.html',
      filename: 'projects.html',
      chunks: ['projectsPage'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/templates/404.html',
      filename: '404.html',
      chunks: ['error'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/templates/500.html',
      filename: '500.html',
      chunks: ['error'],
    }),
  ],
};
