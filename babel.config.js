const presets = [
    ['@babel/preset-env', {
        debug: true,
        useBuiltIns: 'usage'
    }],
    '@babel/preset-react',
    '@babel/preset-typescript'
];
const plugins = [
    'react-hot-loader/babel',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread'
];


module.exports = {
    presets,
    plugins
}