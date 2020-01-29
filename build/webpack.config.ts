import htmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const config: webpack.Configuration = {
  devServer: {
    compress: false,
    contentBase: "./dist",
    host: "localhost",
    port: 9000
  },
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
  entry: "./src/Com.tsx",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  output: { filename: "build.js" },
  resolve: { extensions: [".tsx", ".ts", ".js"] },

  plugins: [
    new htmlWebpackPlugin({
      template: "index.html"
    })
  ]
};
export default config;
