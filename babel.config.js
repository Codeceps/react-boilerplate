console.log(`NODE_ENV = ${process.env.NODE_ENV}`);
console.log(`AUTHOR = ${process.env.AUTHOR}`);

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
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread'
];


module.exports = {
    presets,
    plugins
}