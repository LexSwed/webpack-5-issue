module.exports = {  
  entry: {
    app2: './app2',
  },
  output: {
      filename: '[name].js',
  },
  output: {
    library: {
      name: 'app2',
      type: 'var',
    },
    filename: '[name].js',
  },
  devServer: {
    static: 'dist',
    hot: true,
    port: 3001,
  },
}
