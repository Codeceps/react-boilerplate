console.log(`NODE_ENV = ${process.env.NODE_ENV}`);
console.log(`AUTHOR = ${process.env.AUTHOR}`);

const presets = [
    ['@babel/preset-env', {
        debug: true
    }],
    ['@babel/preset-typescript', {}]
];
const plugins = [];


module.exports = {
    presets,
    plugins
}