import React, {lazy, Suspense} from "react";

import Loading from '../Loading';
import './Lazy.scss';


const PreloadedComp = lazy(() => import (
    /* webpackPreload: true */
    /* webpackChunkName: "LazyPreloaded" */ './PreloadedComp')
);

const PrefetchedComp = lazy(() => import(
    /* webpackPrefetch: true */ 
    /* webpackChunkName: "LazyPrefetched" */ './PrefetchedComp')
);


export interface LazyProps {
    showPrefetchLazyComp?: boolean
    showPreloadedLazyComp?: boolean
}

const Lazy: React.FunctionComponent<LazyProps> = (props) => {
    return (
        <>
            <div className='lazy'>Lazy Component</div>

            {props.showPreloadedLazyComp
                ? <Suspense fallback={<Loading/>}>
                    <PreloadedComp/>
                </Suspense>
                : null
            }

            {props.showPrefetchLazyComp
                ? <Suspense fallback={<Loading/>}>
                    <PrefetchedComp/>
                </Suspense>
                : null
            }

        </>
    )
}


export default Lazy;