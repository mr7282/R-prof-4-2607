const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.jsx'),
    },
    context: path.resolve(__dirname, "src"),
    output: {
        path: path.resolve(__dirname, "static", "build"),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        ["@babel/plugin-proposal-class-properties", {"loose": true}]
                    ]
                }
            }
        ]
    },
    // plugin: {

    // },
    devServer: {
        port: 3000,
        hot: true,
        open: false
    }
};