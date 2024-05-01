const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Added for production build

module.exports = {
  // Split configuration for development and production builds
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  // Development-specific configuration
  ...(process.env.NODE_ENV === 'development' && {
    devtool: "inline-source-map",
    devServer: {
      contentBase: "./dist",
      hot: true, // Enable Hot Module Replacement (HMR)
    },
  }),

  // Production-specific configuration
  ...(process.env.NODE_ENV === 'production' && {
    optimization: {
      minimize: true, // Minify the bundle for production
    },
    plugins: [
      // Extract CSS into separate file for production builds
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
    ],
  }),

  entry: "./js/main.ts",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      },
      // Add rule for CSS loader (example)
      {
        test: /\.css$/,
        use: [
          // Use MiniCssExtractPlugin for production builds, style-loader for development
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
        ],
      },
    ]
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
