import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Search from './Search';
import Card from './Card';

const Business = () => {
    return(
        <div >
            <div className="nav-business">
            <Navigation />
            <Search />
            </div>

            <div className="container business-section">
            <div className="row section1">
              <div className="row sub-header-row">
                <div  className="col s6"> <h5 className="sub-header">IT</h5></div>
                <div className="col s6 right-align"> <button className="btn-flat waves-effect waves-light" type="submit" name="action">view all
                    <i className="material-icons right">chevron_right</i>
                  </button></div>
              </div>
               
                <hr /><br/>
                <div className="row">
                    <div className="col s12 m6 l4">
                    <Card />
                    </div>

                    <div className="col s12 m6 l4">
                    <Card />
                    </div>

                    <div className="col s12 m6 l4">
                    <Card />
                    </div>

                    </div>
                    <div className="row sub-header-row">
                        <div  className="col s6">  <h5 className="sub-header">Marketing</h5></div>
                        <div className="col s6 right-align"> <button className="btn-flat waves-effect waves-light" type="submit" name="action">view all
                            <i className="material-icons right">chevron_right</i>
                        </button></div>
                    </div>
               
                <hr /><br/>
                <div className="row">
                        <div className="col s12 m6 l4">
                        <Card />
                    </div>

                     <div className="col s12 m6 l4">
                        <Card />
                    </div>

                     <div className="col s12 m6 l4">
                        <Card />
                    </div>

                    </div>
                    </div>
                    </div>

            <Footer />
        </div>
    )
}

export default Business;