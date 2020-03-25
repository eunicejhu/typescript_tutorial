import htmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const PRODUCTION = process.env.NODE_ENV === "production";

const config: webpack.Configuration = {
  devServer: {
    compress: false,
    contentBase: "./dist",
    host: "localhost",
    port: 9000
  },
  devtool: PRODUCTION ? false : "inline-source-map",
  entry: {
    main: "./src/main.ts",
    Com: "./src/Com.tsx",
    pageA: "./src/PageA.tsx",
    pageB: "./src/PageB.tsx"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  output: { filename: "[name].js" },
  resolve: { extensions: [".tsx", ".ts", ".js"] },

  plugins: [
    PRODUCTION
      ? new BundleAnalyzerPlugin({ generateStatsFile: true })
      : () => {},
    new htmlWebpackPlugin({
      template: "index.html"
    })
  ]
};

if (PRODUCTION) {
  config.optimization = {
    splitChunks: {
      cacheGroups: {
        /** when you only need pack react and react related packages into vendors */
        // vendors: {
        //   chunks: "initial",
        //   name: "vendors",
        //   test: /react/
        // }
        commons: {
          chunks: "initial",
          name: "commons",
          minChunks: 2,
          maxInitialRequests: 5 // The default limit is too small to showcase the effect
        }
        // vendor: {
        //   test: /node_modules/,
        //   chunks: "initial",
        //   name: "vendor",
        //   priority: 10,
        //   enforce: true
        // }
      },
      chunks: "all"
    }
  };
}
export default config;
