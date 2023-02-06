const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filname: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
