import React from "react";
import {Link} from 'react-router-dom';

import './NavBar.scss';


const NavBar: React.FunctionComponent = (_: {}) => {
    return (
        <div>
            <ul id="nav">
                <li><Link to=''>Home</Link></li>
                <li><Link to='lazy-test'>Lazy Test</Link></li>
            </ul>
        </div>
    )
}


export default NavBar;