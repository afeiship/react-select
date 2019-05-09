import { resolve } from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  mode: process.env.NODE_ENV,
  entry: './src/main.js',
  output: {
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.scss', '.js', '.jsx'],
    alias: {
      '@': resolve(__dirname, '../src'),
      assets: resolve(__dirname, '../src/assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        options: {
          name: 'assets/images/[name]-[hash:4].[ext]',
          limit: 10
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: './assets/styles/[name].[contenthash].css'
    })
  ]
};
