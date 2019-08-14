import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Services from './page/Services';
import Main from './page/Main';
import Index from './page/NotFound';

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
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/services' component={Services} />
                    <Route component={Index} />
                </Switch>
            </Router>
        );
    }
}

export default App;
