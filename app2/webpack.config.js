module.exports = {
  entry: './app2',
  output: {
    library: {
      name: 'app2',
      type: 'var',
    },
    filename: 'app2.js',
  },
  devServer: {
    contentBase: 'dist',
    port: 3001,
  },
}