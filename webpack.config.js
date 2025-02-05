//webpack.config.js
const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./index.js",
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "velocity.js", // <--- Will be compiled to this single file
    library: "Velocity",
    libraryTarget: 'var'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};