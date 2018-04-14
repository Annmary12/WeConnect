import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import BusinessPage from './components/pages/Business';

const Router = () => {
    return(
        <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/business" exact component={BusinessPage} />
    </div>
    )
    
};

export default Router;

