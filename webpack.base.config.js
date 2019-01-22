const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssLoader = require('mini-css-extract-plugin').loader;

const inProduction = process.env.NODE_ENV === 'production' ? true : false;


module.exports = { 
    entry: {
        index: './src/index.tsx'
    },
    output: {
        filename: inProduction ? '[name].[chunkhash:16].bundle.js' : '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
        alias: {
            resources: path.resolve(__dirname, 'resources')
        }
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
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
                    { loader: inProduction ? MiniCssLoader : 'style-loader' },
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