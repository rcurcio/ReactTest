import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import App from './App';
import Login from '../plugins/user/Login';
import Home from '../plugins/main/Home';
import Register from '../plugins/user/Register';

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
