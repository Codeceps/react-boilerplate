import React from 'react';
import {hot} from 'react-hot-loader/root';
//@ts-ignore
import react_logo_svg from 'resources/images/react_logo.svg';
//@ts-ignore
import boilerplate_png from 'resources/images/boilerplate.png';


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
            <div>
                <span>
                    <img src={react_logo_svg} style={{width: 110, height: 110}}/>
                </span>
                <span>
                    <img src={boilerplate_png} style={{width: 300, height: 100}}/>
                </span>
                
                <h1>{this.props.message}</h1>

                <p>Click count: {clickCount}</p>
                <button onClick={this.clickListener}>Click Me</button>
            </div>
        )
    }

}


export default hot(App);