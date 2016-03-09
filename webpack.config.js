module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  module: {
    loaders:  [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "raw"
      }
    ]
  }
}
