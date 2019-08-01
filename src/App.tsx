import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
// import Footer from './components/Footer';
import Services from './components/Services';
import Main from './components/Main';
import NotFound from './components/NotFound';

class App extends React.Component{
    constructor(props: any) {
        super(props);
        this.state = {
            isMobile: true
        }
    }
  render(){
    return (
      <Router>
        <Route path='/' component={ Header }/>
        <Switch>
          <Route exact path='/' component={ Main }/>
          <Route path='/services' component={ Services }/>
          <Route component={ NotFound }/>
        </Switch>
        {/*<Route path='/' component={ Footer }/>*/}
      </Router>
    );
  }
};

export default App;