const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");


module.exports = {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true
          })
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ]
}