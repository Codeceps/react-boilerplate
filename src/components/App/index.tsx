import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {hot} from 'react-hot-loader/root';

// @ts-ignore
import react_logo_svg from 'resources/images/react_logo.svg';
import NavBar from '../NavBar';
import {Home, LazyTest} from '../Route';
import './App.scss';

import {camelCaseIt} from '../../util/CamelCaser';

export interface AppProps {
    message: string;
}

class App extends React.Component<AppProps> {

    constructor(props: AppProps) {
        super(props);
    }

    public render() {
        const {message} = this.props;

        return (
            <div>
                <div id='logo-container'>
                    <img id='logo-img' src={react_logo_svg}/>
                </div>
                <div id='header-text'>
                    {message}
                </div>

                <Router>
                    <>
                        <NavBar/>
                        <Switch>
                            <Route
                                path='/'
                                exact={true}
                                render={(props) => <Home initialText={camelCaseIt('no text stored')} />}
                            />
                            <Route
                                path='/lazy-test'
                                component={LazyTest}
                            />
                        </Switch>
                    </>
                </Router>
            </div>
        )
    }
}

export default hot(App);