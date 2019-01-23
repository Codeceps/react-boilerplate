/**
 * IE11 promise polyfill
 * Currently, @babel/preset-env is unaware that using import()
 * with Webpack relies on Promise internally.
 * Environments which do not have builtin support for Promise, like Internet Explorer,
 * will require both the promise and iterator polyfills be added manually. 
 */
import 'core-js/modules/es6.array.iterator';
import 'core-js/modules/es6.promise';
/**
 * React 16 Javascript Environment Requirements
 */
import 'core-js/es6/set';
import 'core-js/es6/map';
/**
 * Other IE11 polyfills
 */
import 'core-js/modules/es6.object.assign';
import 'core-js/modules/es7.string.trim-right';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const message = 'React Boilerplate Project';

ReactDOM.render(
    <App message={message}/>,
    document.getElementById('root'),
);
