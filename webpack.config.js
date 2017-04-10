var path = require("path");
var { TsConfigPathsPlugin } = require("awesome-typescript-loader");

module.exports = {
  context: path.resolve(__dirname, "src", "client"),
  entry: "./index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  
  module: {
    loaders: [
      // Output ".js" have sourcemaps re-processed by "source-map-loader"
      { 
        test: /\.js$/, 
        loader: "source-map-loader", 
        enforce: "pre" 
      },

      // Typescript files are handled by "awesome-typescript-loader"
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },

  resolve: {
    extensions: [ ".ts", ".js" ],
    modules: [
      path.resolve(__dirname, "src", "client"),
      path.resolve(__dirname, "src"),
      "node_modules"
    ],
    plugins: [
      new TsConfigPathsPlugin(/* { tsconfig, compiler } */)
    ]
  }
}