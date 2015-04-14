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
            { test: /\.js$/, loaders: ["babel", "jsx"] },
            { test: /\.html$/, loaders: ["copy"]}
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "Hacker News"
        })
    ]
};

