const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        hot: true,
        overlay: true
    },
    plugins: [
        new HotModuleReplacementPlugin()
    ]
}