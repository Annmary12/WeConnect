import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import BusinessPage from './components/pages/Business';
import SignUpPage from './components/pages/SignUp';
import BusinessProfile from './components/pages/BusinessProfile';
import ProfilePage from './components/pages/Profile';
import CreateBusinessPage from './components/pages/CreateBusiness';
import EditBusinessPage from './components/pages/EditBusiness';
import UpdateProfile from './components/pages/UpdateProfile';
import VerifyRoute from '../src/utils/routeAuth';

const Router = () => (
  <Switch>
    <Route path="/" exact component={ HomePage } />
    <Route path="/login" exact component={ LoginPage } />
    <Route path="/business" exact component={ BusinessPage } />
    <Route path="/signUp" exact component={ SignUpPage } />
    <Route path="/businessProfile/:id" component={ BusinessProfile } />
    <Route path="/profile" exact component={ VerifyRoute(ProfilePage) } />
    <Route path="/createBusiness" exact component={ VerifyRoute(CreateBusinessPage) } />
    <Route path="/editBusiness/:id" exact component={ VerifyRoute(EditBusinessPage) } />
    <Route path="/updateProfile" exact component={ VerifyRoute(UpdateProfile) } />
  </Switch>
);

export default Router;

