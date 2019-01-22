import React, { lazy, Suspense } from "react";

import Loading from '../../Loading';
import './LazyTest.scss';


const Lazy = lazy(() => import(
    /* webpackChunkName: "Lazy" */ '../../Lazy'));


export interface PrefetchTestProps {}

export interface PrefetchTestState {
    loadComponentRequested: boolean
}

export default class PrefetchTest extends React.Component<PrefetchTestProps, PrefetchTestState> {

    state: PrefetchTestState = {
        loadComponentRequested: false
    }

    constructor(props: PrefetchTestProps) {
        super(props);
    }

    lazyLoadListener = () => {
        this.setState({
            loadComponentRequested: true
        })
    }


    render() {
        const {loadComponentRequested} = this.state;

        return (
            <div>
                <h2 id='lazy-test-title'>Lazy Test</h2>
                {!loadComponentRequested
                    ? <button className='centered-widget' onClick={this.lazyLoadListener}>Lazy load component</button>
                    : <Suspense fallback={<Loading/>}>
                        <Lazy showPreloadedLazyComp showPrefetchLazyComp/>
                    </Suspense>}
            </div>
        )
    }

}