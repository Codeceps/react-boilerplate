
/**
 * If the 'useBuiltIns' option of the @babel/preset-env is set to 'entry',
 * the polyfill must be the first thing included in the app's entry file
 *      import '@babel/polyfill';
 * 
 * If the 'useBuiltIns' is set to 'usage' and the polyfill is missing,
 * it can be individualy imported here. For example to include the polyfill
 * for the Object.assign required for older browsers like IE11:
 *      import 'core-js/modules/es6.object.assign';
 */

import 'core-js/modules/es6.object.assign';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
    <App message="React boilerplate using Webpack, Babel, and Typescript"/>,
    document.getElementById('root')
);