const path = require('path');

module.exports = {
    entry: {
        main: './index.jsx',
    },
    context: path.resolve(__dirname, "src"),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/env'],
                    plugins: [
                        ["@babel/plugin-proposal-class-properties", {"loose": true}]
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            }
        ]
    },
    devServer: {
        port: 3000,
        hot: true,
        open: false
    }
};
