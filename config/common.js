const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')

module.exports = {
  entry: [
    require.resolve('./polyfills'),
    paths.app,
  ],
  output: {
    path: paths.dist,
    filename: '[name].[hash:8].js',
  },
  resolve: {
    modules: [
      paths.app,
      'node_modules',
    ],
    alias: {
      root: paths.root,
      app: paths.app,
      assets: paths.assets,
    },
    extensions: ['.js', '.jsx'],
  },
  performance: {
    maxAssetSize: 10000000,
    maxEntrypointSize: 10000000,
    hints: 'warning',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sample App',
      template: `${paths.app}/index.html`,
    }),
  ],
}
