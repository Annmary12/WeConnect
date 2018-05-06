import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Router from './Route';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Stylecss from '../public/styles/index.scss';
import BusinessCss from '../public/styles/business.scss';
import ProfileCss from '../public/styles/profile.scss';
import reducer from './rootReducer';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './actions/login';


const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )

);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}


const App = () => (
        <Provider store={store}>
         <Router />
         </Provider>

);
export default App;
