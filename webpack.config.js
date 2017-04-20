/*
 * @Author: grove.liqihan
 * @Date: 2017-04-20 18:00:22
 * @Desc: 
 */


var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        "Middware": ["./index.js"]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        libraryTarget: "umd",
        library: ["[name]"]
    },
    module: {
        loaders: [
        ]
    },
    devtool: false,
    node: {
        fs: "empty"
    },
    resolve: {
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ //压缩代码
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        })
    ]
};
