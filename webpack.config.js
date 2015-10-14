module.exports = {
  entry: './scripts/index.js',
  output: {
    filename: 'aia.js', // Filename of the output
    path: './dist' // Directory of the output
  },
  module: {
    // Transformers
    loaders: [
      // Transform to es6 with babel
      // http://webpack.github.io/docs/loaders.html
      { test: /\.(js|jsx|es6)$/, exclude: 'node_modules/', loader: 'babel-loader?modules=common&stage=0' }
    ]
  },
  resolve: {
    // So we can require files without specfiying the file extension.
    // e.g., require('./yolo.es6') => require('./yolo');
    extensions: ['', '.js', '.json', '.jsx', '.es6']
  }
};
