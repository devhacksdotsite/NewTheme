/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.ts',
    desktop_header_1: './src/index.ts',
    desktop_header_2: './src/index.ts',
    desktop_header_3: './src/index.ts',
    desktop_header_4: './src/index.ts',
    login: './src/index.ts',
    account: './src/index.ts',
    footer_1: './src/index.ts',
    footer_2: './src/index.ts',
    home: './src/index.ts',
  },
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    usedExports: true
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            // disable type checker - we will use it in fork plugin
            transpileOnly: true
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/desktop_header_1.html',
      inject: 'body',
      chunks: ['desktop_header_1'],
      filename: 'desktop_header_1.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/desktop_header_2.html',
      inject: 'body',
      chunks: ['desktop_header_2'],
      filename: 'desktop_header_2.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/desktop_header_3.html',
      inject: 'body',
      chunks: ['desktop_header_3'],
      filename: 'desktop_header_3.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/desktop_header_4.html',
      inject: 'body',
      chunks: ['desktop_header_4'],
      filename: 'desktop_header_4.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/login.html',
      inject: 'body',
      chunks: ['login'],
      filename: 'login.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/footer_1.html',
      inject: 'body',
      chunks: ['footer_1'],
      filename: 'footer_1.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/footer_2.html',
      inject: 'body',
      chunks: ['footer_2'],
      filename: 'footer_2.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/account.html',
      inject: 'body',
      chunks: ['account'],
      filename: 'account.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/home.html',
      inject: 'body',
      chunks: ['home'],
      filename: 'home.html'
    }),
    new ForkTsCheckerWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'src/assets', to: 'assets' }]
    }),
    new ESLintPlugin({
      extensions: ['.tsx', '.ts', '.js'],
      exclude: 'node_modules',
      context: 'src'
    })
  ]
};
