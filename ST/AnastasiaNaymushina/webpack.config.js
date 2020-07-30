const path = require("path");
const webpack = require('webpack');
const MiniCss = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './index.js',
    },
    context: path.resolve(__dirname, "static_src"),
    output: {
        path: path.resolve(__dirname, "static", "build"),
        filename: 'app.js',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "static_src"),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/env',
                        "@babel/preset-react"
                    ],
                    plugins:[
                        ["@babel/plugin-proposal-class-properties",{"loose":true}]
                    ]

                },

            },
             {
                test: /\.css$/,
                use: [MiniCss.loader, 'css-loader']
            }

        ],
    },
    plugins: [
        new MiniCss({
            filename: path.join('style', '[name].css'),
            chunkFilename: '[id].css'
        }),
        new HtmlPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'index.html')
        })
    ],
    devServer:{
        port: 3000,
        hot:true,
        open:false

    }


};

