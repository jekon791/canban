const path = require('path');

module.exports = {
  entry: './src/board.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};