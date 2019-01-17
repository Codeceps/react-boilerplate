import React from 'react';
import {hot} from 'react-hot-loader/root';


export interface AppProps {
    message: string
}

export interface AppState {
    clickCount: number
}

class App extends React.Component<AppProps, AppState> {

    state: AppState = {
        clickCount: 0
    }

    constructor(props: AppProps) {
        super(props);
    }


    clickListener = () => {
        this.setState((prev) => ({
            clickCount: prev.clickCount + 1
        }))
    }

    render() {
        const {clickCount} = this.state;

        return (
            <>
                <h1>{this.props.message}</h1>
                <p>Click count: {clickCount}</p>
                <button onClick={this.clickListener}>Click Me</button>
            </>
        )
    }

}


export default hot(App);