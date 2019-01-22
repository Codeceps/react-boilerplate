import React from "react";

import './PreloadedComp.scss';


const Preloaded: React.FunctionComponent = (_: {}) => {
    return (
        <div className='lazy-preloaded'>
            Lazy Preloaded Component
        </div>
    )
}


export default Preloaded;