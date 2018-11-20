// Used for Rendering Layer control - React router
// convention is to use uppercase letters for components

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // react components

// react redux and action creators:
import { connect } from 'react-redux';
import * as actions from '../actions';

// Dummy components + actual compponents (slowly to be replaced)
import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {
    // figure out who is the current user, unlike componentWillMount may be called multiple times
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">  {/* Looks nicer with container from materialize-css */}
                {/* <BrowserRouter> expects to have at least one child */}
                <BrowserRouter>
                    <div> 
                        <Header />
                        {/* exact and exact={true} are the same. Route greedily matches the routes therefore, use exact */}
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

// first argumnet is null because we don't want to use mapstatetoprops
export default connect(null, actions)(App)
