const path = require('path');
const HmtlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname,'src/js/index.js'),
    output: {
        filename: 'js/main.js'
    },
    module: {
        rules: 
        [
            {test: /\.js$/,exclude: /node_modules/,loader: "babel-loader"},
            {test: /\.s[ac]ss$/i,use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']}   
        ]
    },
    plugins: [
        new HmtlWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        })
    ],
    devServer: {
        open: true,
        historyApiFallback: true
    }
};