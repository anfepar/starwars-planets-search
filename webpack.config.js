const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

require("dotenv").config();

const isDevMode = process.env.ENVIRONMENT === "development";
const entry = ["./src/frontend/index.js"];
if (isDevMode) {
  entry.push(
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true"
  );
}

module.exports = {
  entry,
  mode: process.env.ENVIRONMENT,
  output: {
    path: path.resolve(__dirname, "src/server/public"),
    filename: isDevMode ? "assets/app.js" : "assets/app-[hash].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: "async",
      cacheGroups: {
        vendors: {
          name: "vendors",
          chunks: "all",
          reuseExistingChunk: true,
          priority: 1,
          filename: isDevMode
            ? "assets/vendor.js"
            : "assets/vendor-[contenthash].js",
          enforce: true,
          test(module) {
            const name = module.nameForCondition && module.nameForCondition();
            return (chunk) =>
              chunk.name !== "vendors" && /[\\/]node_modules[\\/]/.test(name);
          },
        },
      },
    },
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
    isDevMode ? new webpack.HotModuleReplacementPlugin() : () => {},
    isDevMode
      ? () => {}
      : new CompressionWebpackPlugin({
          test: /\.js$|\.css$/,
          filename: "[path][base].gz",
        }),
    isDevMode ? () => {} : new WebpackManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: isDevMode ? "assets/app.css" : "assets/app-[hash].css",
    }),
    isDevMode
      ? () => {}
      : new CleanWebpackPlugin({
          cleanOnceBeforeBuildPatterns: path.resolve(
            __dirname,
            "src/server/public"
          ),
        }),
    isDevMode
      ? () => {}
      : new CopyPlugin({
          patterns: [{ from: "robots.txt", to: "robots.txt" }],
        }),
  ],
};
