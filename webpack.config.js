const path = require( 'path' )

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.min.js',
    path: path.resolve( __dirname, 'dist' ),
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ],
          },
        },
      },
    ],
  },
}
