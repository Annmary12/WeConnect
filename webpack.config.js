import webpack from 'webpack';
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './client/src/script.js' // webpack entry point. Module to start building dependency graph
  },
  output: {
    path: path.resolve(__dirname, './dist'), // Folder to store generated bundle
    filename: 'bundle.js' // Name of generated bundle after build
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: { // where we defined file patterns and their loaders
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'client'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.svg|.png|.jpeg|.jpg$/,
        loader: 'url-loader',
      }
    ]
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }
};
