const path = require('path');
const HmtlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: 'src/js/index.js',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules:
            [
                { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
                { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] }
            ]
    },
    plugins: [
        new HmtlWebpackPlugin({
            template: './index.html'
        })
    ],
    devServer: {
        open: true,
        historyApiFallback: true
    }
};