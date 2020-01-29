import htmlWebpackPlugin from "html-webpack-plugin";
import tsImportPlugin from "ts-import-plugin";
import webpack from "webpack";

const config: webpack.Configuration = {
  devServer: {
    compress: false,
    contentBase: "./dist",
    host: "localhost",
    port: 9000
  },
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
  entry: "./src/Home/index.tsx",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          compilerOptions: {
            module: "es2015"
          },
          getCustomTransformers: () => ({
            before: [
              tsImportPlugin({
                libraryDirectory: "lib",
                libraryName: "antd",
                style: true
              })
            ]
          }),
          transpileOnly: true
        },
        test: /\.tsx?$/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
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
