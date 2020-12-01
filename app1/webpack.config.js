module.exports = {
  entry: {
    app1: './app1',
  },
  output: {
      filename: '[name].js',
  },
  devServer: {
    static: 'dist',
    hot: true,
    port: 3000,
  },
}
