const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: ['@babel/polyfill', './src/app.js'],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  module: {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: 'src/index.html',
    })
  ],
};

module.exports = config;
