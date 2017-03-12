const webpack = require("webpack")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const paths = require("./paths")

module.exports = {
  bail: true,
  devtool: "source-map",
  output: {
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader",
            query: {
              sourceMap: true,
              minimize: true,
              autoprefixer: {
                add: true,
                browsers: ["last 3 versions"],
              },
            },
          }, {
            loader: "sass-loader",
            query: {
              sourceMap: true,
            },
          }],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "styles.[hash:8].css",
    }),
    new CleanWebpackPlugin(paths.dist, {
      root: paths.root,
      verbose: false,
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: false,
      output: {
        comments: false,
        screw_ie8: true,
      },
    }),
  ],
}
