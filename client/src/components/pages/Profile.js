import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';

const Profile = () => {
    return(
        <div>
            <div className="profile-nav">
            <Navigation />

            <div class="container">
                            
                            <div class="row center-align image-box" >
                                <div class="col s10 offset-s1">
                                    <img src={require('../../../public/images/amaka_img.jpeg')} class="profile-image"/>
                                   
                                </div>
                                <div class="col s10 offset-s1">
                                    <h5>Annmary Agunanna</h5>
                                    <span class=""><em>annmaryamaka@gmail.com</em></span>
                              </div>
                                  
                            </div>
           </div>
           </div>
           <div class="container profile-section">
            <div class="row section1">
              <div class="row right-align">
                 <Link to='/createBusiness' class="btn waves-effect waves-light btn_large " type="submit" name="action">Create New Business
                  <i class="material-icons left">add</i>
                 </Link>
              </div>
                <h4 class="">List of Your business</h4>
                <hr/><br/>
                <div class="row">
                    <div class="col s4">
                    <UserCard />
                    </div>
                    <div class="col s4">
                    <UserCard />
                    </div>
                    <div class="col s4">
                    <UserCard />
                    </div>

                    </div>
        </div>
            </div>
           
            <Footer />
            </div>
    )
}

export default Profile;