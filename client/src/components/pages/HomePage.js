import React from 'react';
import { Link } from 'react-router-dom';
import NavigationPage from './Navigation';
import FeacturedBusiness from './FeacturedBusiness';
// import StyleCss from '../../../public/styles/index.scss';
// import BusinessCss from '../css/business.css';

const Home = () => {
    return(
      <div className="home">
        <div className="nav-background">
        <NavigationPage />
            <div className="container">
            
                    <div className="row header">
                            <h1>We-Connect <br/>you to the<br/> World!!!</h1>
                    </div>
              
           </div>
        </div>
      
        
        </div>
    );
}

export default Home;