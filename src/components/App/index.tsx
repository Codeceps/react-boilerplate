import React from 'react';
import {hot} from 'react-hot-loader/root';
//@ts-ignore
import react_logo_svg from 'resources/images/react_logo.svg';


import './App.css';


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
                <div id='logo'>
                    <img id='logo-img' src={react_logo_svg}/>
                </div>

                <div id="content">
                    <h1 className='message'>{this.props.message}</h1>

                    <p className="count">Click count: {clickCount}</p>
                    <button className='button' onClick={this.clickListener}>Click Me</button>
                </div>   
            </div>
        )
    }

}


export default hot(App);