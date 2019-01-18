const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractLoader = require('mini-css-extract-plugin').loader;


const inProduction = process.env.NODE_ENV === 'production' ? true : false;


module.exports = { 
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
        alias: {
            resources: path.resolve(__dirname, 'resources')
        }
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    { loader: inProduction ? miniCssExtractLoader : 'style-loader' },
                    { loader: 'css-loader', options: { sourceMap: true, importLoaders: 2 } },
                    { loader: 'postcss-loader' , options: { sourceMap: true } },
                    { loader: 'sass-loader' , options: { sourceMap: true } }
                ]
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images'
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./resources/index.html",
            minify: {
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                preserveLineBreaks: true,
                minifyURLs: true,
                removeComments: true,
                removeAttributeQuotes: true
            }
        })
    ]
}