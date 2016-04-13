var path = require('path')

module.exports = {
  context: __dirname,
  entry: "./frontend/csscape.jsx",
  output: {
    path: path.join(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
   loaders: [
     {
       test: /\.jsx?$/,
       exclude: /node_modules/,
       loader: 'babel',
       query: {
         presets: ['react']
       }
     }
   ]
 },
 devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
