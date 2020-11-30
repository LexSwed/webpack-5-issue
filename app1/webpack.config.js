module.exports = {
  entry: './app1',
  output: {
      filename: 'app1.js',
  },
  devServer: {
    contentBase: 'dist',
    port: 3000,
  },
}
