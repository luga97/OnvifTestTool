var path = require('path');

var port = process.env.PORT || 8080;
var host = process.env.IP || '127.0.0.1';

module.exports = {
  entry: ['./client/main.js'],
  output: {
    path: path.join(__dirname, '/client/build'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    host: host,
    port: port
  },
  resolve: {
    extensions: ['','.js','.jsx']
  },
  module:{
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          compact: false
        }
      },
      {
        test    : /\.scss$/,
        loaders  : ["style", "css", "sass"]
      },
      {
        test    : /\.json$/,
        exclude : /node_modules/,
        loader  : "json"
      }
    ]
  }
}
