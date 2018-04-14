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

            <div class="container business-section">
            <div class="row section1">
              <div class="row sub-header-row">
                <div  class="col s6"> <h5 class="sub-header">IT</h5></div>
                <div class="col s6 right-align"> <button class="btn-flat waves-effect waves-light" type="submit" name="action">view all
                    <i class="material-icons right">chevron_right</i>
                  </button></div>
              </div>
               
                <hr /><br />
                <div class="row">
                    <div class="col s12 m6 l4">
                    <Card />
                    </div>

                    <div class="col s12 m6 l4">
                    <Card />
                    </div>

                    <div class="col s12 m6 l4">
                    <Card />
                    </div>

                    </div>
                    <div class="row sub-header-row">
                        <div  class="col s6">  <h5 class="sub-header">Marketing</h5></div>
                        <div class="col s6 right-align"> <button class="btn-flat waves-effect waves-light" type="submit" name="action">view all
                            <i class="material-icons right">chevron_right</i>
                        </button></div>
                    </div>
               
                <hr /><br />
                <div class="row">
                        <div class="col s12 m6 l4">
                        <Card />
                    </div>

                     <div class="col s12 m6 l4">
                        <Card />
                    </div>

                     <div class="col s12 m6 l4">
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