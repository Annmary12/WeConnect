import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Router from './Route';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Stylecss from '../public/styles/index.scss';
import BusinessCss from '../public/styles/business.scss';
import ProfileCss from '../public/styles/profile.scss';

const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
);

const App = () => {
    return(
        <Provider store={store}>
         <Router />
         </Provider>
     
        );
    
  
}
export default App;