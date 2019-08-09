import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Services from './components/Services';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';

class App extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            isMobile: true
        };
    }
    public render() {
        return (
            <Router>
                <Route path='/' component={Header} />
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/services' component={Services} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;
