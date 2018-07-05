import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import jwt from 'jsonwebtoken';
import { Route, BrowserRouter } from 'react-router-dom';
import Router from './Route';
import Stylecss from '../public/styles/index.scss';
import BusinessCss from '../public/styles/business.scss';
import ProfileCss from '../public/styles/profile.scss';
import rootReducer from './rootReducer';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/login';


const store = createStore(
  rootReducer,
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
  <Provider store={ store }>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>

);
export default App;
