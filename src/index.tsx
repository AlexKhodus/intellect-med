import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import App from './App';
import Reducer from './store/reducer';
import * as serviceWorker from './service-worker';
import './index.scss';

/**
 * Declare window interface
 * Create global Redux store with combineReducers
 * @param {function} return current state from redux
 * @param {function} enhancers for redux develop-tools in chrome
 *
 * Wrapping App component in Provider and add to props current store
 * @param {ReactNode} our application
 * @param {Dom Element} root element in DOM
 * @return mount in DOM react component
 *
 * @author: Kasparov Nikolay
 */

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
    }
}

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
const store = createStore( combineReducers({ Reducer }), enhancers());

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
