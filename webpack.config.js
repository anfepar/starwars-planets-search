const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

require("dotenv").config();
const isDevMode = process.env.ENVIRONMENT === 'development';
const entry = ['./src/frontend/index.js'];
if (isDevMode) {
  entry.push(
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true',
  );
}

module.exports = {
  entry,
  mode: process.env.ENVIRONMENT,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    alias: {
      "@/__mocks__": path.resolve(__dirname, "./src/frontend/__mocks__/"),
      "@/__test__": path.resolve(__dirname, "./src/frontend/__test__/"),
      "@/actions": path.resolve(__dirname, "./src/frontend/actions/"),
      "@/assets": path.resolve(__dirname, "./src/frontend/assets/"),
      "@/components": path.resolve(__dirname, "./src/frontend/components/"),
      "@/constants": path.resolve(__dirname, "./src/frontend/constants/"),
      "@/containers": path.resolve(__dirname, "./src/frontend/containers/"),
      "@/hooks": path.resolve(__dirname, "./src/frontend/hooks/"),
      "@/reducers": path.resolve(__dirname, "./src/frontend/reducers/"),
      "@/routes": path.resolve(__dirname, "./src/frontend/routes/"),
      "@/utils": path.resolve(__dirname, "./src/frontend/utils/"),
    },
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css|.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "stylus-loader",
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[hash].[ext]",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
  ],
};
