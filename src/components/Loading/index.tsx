import React from "react";

import './Loading.scss';


export interface LoadingProps {
    className?: string
}

const Loading: React.FunctionComponent<LoadingProps> = (props: LoadingProps) => {
    return (
        <div className={props.className || 'loading'}>Loading...</div>
    )
}


export default Loading;