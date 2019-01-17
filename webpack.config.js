/**
 * Webpack split flie configuration taken from this Medium article:
 *      https://medium.freecodecamp.org/a-complete-react-boilerplate-tutorial-from-zero-to-hero-20023e086c4a
 */

const webpackMerge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

const envs = {
    development: 'dev',
    production: 'prod'
}

const env = envs[process.env.NODE_ENV || 'development'];
const envConfig = require(`./webpack.${env}.config`);
module.exports = webpackMerge(baseConfig, envConfig);