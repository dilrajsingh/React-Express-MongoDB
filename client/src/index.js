// for Redux setup
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

const store = createStore(() => [], {}, applyMiddleware());

// ReactDOM takes two components arguments, first one is the root component which redux wraps with the provider + store
// second one is from public root
ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);
