import React from 'react';
import ReactDOM from 'react-dom';
import Router from './plugins/main/Router';
import './css/index.css';

// Redux
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { getReducers } from './shared/utils/DuxUtils';

export const buildStore = (reducers, initialStore) => {
    const func = applyMiddleware(thunkMiddleware)(createStore);
    return func(reducers, initialStore);
};

export const getCombinedReducers = () => {
    return combineReducers(getReducers());
};

ReactDOM.render((
    <Provider store={buildStore(getCombinedReducers(),{})} >
        <Router />
    </Provider>
  ), document.getElementById('root')
);
