var path = require('path')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(js)$/,
      use: [
        'babel-loader'
      ]
    }]
  }
}