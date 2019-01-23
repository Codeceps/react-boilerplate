import React from "react";

import './Home.scss';


export interface HomeProps {
    initialText: string
}

export interface HomeState {
    inputText: string
    storedText: string
}

export default class Home extends React.Component<HomeProps, HomeState> {

    state: HomeState = {
        inputText: '',
        storedText: this.props.initialText
    }

    constructor(props: HomeProps) {
        super(props);
    }

    onChangeListener = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inputText: event.target.value
        });
    }

    onSubmitListener = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.setState({
            storedText: this.state.inputText ? this.state.inputText : this.props.initialText
        });
    }


    render() {
        const {inputText, storedText} = this.state;

        return (
            <div>    
                <h2 id='home-title'>Stored text: {storedText}</h2>

                <form onSubmit={this.onSubmitListener}>
                    <input 
                        className='centered-widget' 
                        value={inputText}
                        type="text" 
                        placeholder='Enter text' 
                        onChange={this.onChangeListener}
                    />

                    <input 
                        className='centered-widget'
                        type="submit" 
                        value='Store text'
                    />
                </form>

            </div>
        )
    }

}