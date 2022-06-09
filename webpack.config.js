const path = require('path');

module.exports = {
  entry: {
    "canvas-img-sequence": path.resolve(__dirname, './src/canvas-img-sequence.js'),
    "canvas-img-sequence-browser": path.resolve(__dirname, './src/canvas-img-sequence-browser.js')
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
};
