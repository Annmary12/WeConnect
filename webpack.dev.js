const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  devtool: 'eval-source-map',
  mode: 'development',
  devServer: {
    inline: true,
    contentBase: 'client',
  }
});

