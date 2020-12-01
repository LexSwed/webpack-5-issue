module.exports = {
  entry: './app1',
  output: {
      filename: 'app1.js',
  },
  devServer: {
    static: 'dist',
    port: 3000,
  },
}
