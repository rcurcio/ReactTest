import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import App from './App';
import Login from '../views/Login';
import Home from '../views/Home';
import Register from '../views/Register';

class router extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRedirect to='home'/>
                    <Route path='home' component={Home} />
                    <Route path='login' component={Login} />
                    <Route path='register' component={Register} />
                </Route>
            </Router>
        );
    }
}

export default router;
