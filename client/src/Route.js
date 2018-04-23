import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import BusinessPage from './components/pages/Business';
import SignUpPage from './components/pages/SignUp';
import BusinessProfile from './components/pages/BusinessProfile';
import ProfilePage from './components/pages/Profile';
import CreateBusinessPage from './components/pages/CreateBusiness';
import EditBusinessPage from './components/pages/EditBusiness';

const Router = () => {
    return(
        <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/business" exact component={BusinessPage} />
            <Route path="/signUp" exact component={SignUpPage} />
            <Route path="/businessProfile" exact component={BusinessProfile} />
            <Route path="/profile" exact component={ProfilePage} />
            <Route path="/createBusiness" exact component={CreateBusinessPage} />
            <Route path="/editBusiness" exact component={EditBusinessPage} />
    </div>
    )
    
};

export default Router;

