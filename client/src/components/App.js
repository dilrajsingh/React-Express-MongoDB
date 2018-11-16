// Used for Rendering Layer control - React router
// convention is to use uppercase letters for components

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // react components

// Dummy components to test routers
const Header = () => <h2>Header</h2>
const Landing = () => <h2>Landing</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

const App = () => {
    return (
        <div>
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
};

export default App;
