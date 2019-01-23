/*
    NODE_ENV environment variable is set to 'test' by Jest
    Use it to enable transpiling of ES modules to CommonJS modules
*/
const testEnv = process.env.NODE_ENV === 'test'

const presets = [
    ['@babel/preset-env', {
        debug: testEnv ? false : true,
        modules: testEnv ? 'auto' : false,
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