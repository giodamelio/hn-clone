var path = require("path");

var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "out"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel"]
            },
            {
                test: /\.html$/,
                loaders: ["copy"]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};

