const path = require('path');

module.exports = {
  entry: {
    index: './client/src/index.js' // webpack entry point. Module to start building dependency graph
  },
  output: {
    path: path.resolve(__dirname, 'build'), // Folder to store generated bundle
    filename: 'bundle.js' // Name of generated bundle after build
  },
  module: { // where we defined file patterns and their loaders
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
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
        test: /\.svg|.png|.jpg$/,
        loader: 'url-loader',
        exclude: /node_modules/
      }
    ]
  },
};
