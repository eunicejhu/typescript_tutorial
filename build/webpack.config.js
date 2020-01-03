const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/main.ts",
    output: {filename: 'build.js'},
    resolve: {extensions: ['.tsx', '.ts', '.js']},
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: process.env.NODE_ENV === 'production' ? false : "inline-source-map",
    devServer: {
        contentBase: './dist',
        compress: false,
        host: "localhost",
        port: 9000
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "index.html"
        })
    ]
}