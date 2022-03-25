const { ModuleFederationPlugin } = require('webpack').container
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const web = require('webpack')
const deps = require('./package.json').dependencies
const dotenv = require('dotenv').config({
  path: '../.env',
}).parsed

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'hidden-source-map',
  resolve: {
    extensions: ['.js', '.json', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.(png|svg|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 3001,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'pokemon',
      filename: 'remoteEntry.js',
      exposes: {
        './Pokemon': './src/Store.js',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
}
