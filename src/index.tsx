/**
    Polyfill for IE11
 */
import 'core-js/modules/es6.object.assign';

/**
    Currently, @babel/preset-env is unaware that using import() with Webpack relies on Promise internally. 
    Environments which do not have builtin support for Promise, like Internet Explorer, 
    will require both the promise and iterator polyfills be added manually.
*/
import "core-js/modules/es6.promise";
import "core-js/modules/es6.array.iterator";


import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';


const message = 'React Boilerplate Project';

ReactDOM.render(
    <App message={message}/>,
    document.getElementById('root')
);