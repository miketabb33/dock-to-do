/* eslint-disable no-undef */
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    server: './src/server/server.ts',
    'public/bundle': './src/react/index.tsx',
  },
  target: 'node',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/index.html', to: './' },
        { from: 'src/resources/', to: './public' },
      ],
    }),
    new webpack.DefinePlugin({
      POSTGRES_CONNECTION: JSON.stringify(process.env.POSTGRES_CONNECTION),
    }),
    new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ }),
  ],
}
