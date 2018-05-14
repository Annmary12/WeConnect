import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage.jsx';
import LoginPage from './components/pages/LoginPage.jsx';
import BusinessPage from './components/pages/Business.jsx';
import SignUpPage from './components/pages/SignUp.jsx';
import BusinessProfile from './components/pages/BusinessProfile.jsx';
import ProfilePage from './components/pages/Profile.jsx';
import CreateBusinessPage from './components/pages/CreateBusiness.jsx';
import EditBusinessPage from './components/pages/EditBusiness.jsx';

const Router = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/business" exact component={BusinessPage} />
    <Route path="/signUp" exact component={SignUpPage} />
    <Route path="/businessProfile/:id" component={BusinessProfile} />
    <Route path="/profile" exact component={ProfilePage} />
    <Route path="/createBusiness" exact component={CreateBusinessPage} />
    <Route path="/editBusiness/:id" exact component={EditBusinessPage} />
  </Switch>
);

export default Router;

