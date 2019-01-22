import React from "react";

import './PrefetchedComp.scss';


const Prefetched: React.FunctionComponent = (_: {}) => {
    return (
        <div className='lazy-prefetched'>
            Lazy Prefetched Component
        </div>
    )
}


export default Prefetched;