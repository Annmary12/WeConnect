import React from 'react';
import Card from './Card';

const FeacturedBusiness = () => {
    return(
        <div>
        <div className="container"><br /><br />
            <div className="row section1">
                <h4 className="">Feacture Business</h4>
                <hr /><br />

            <div className="row">
              <div className="col s4">
                      <Card />
              </div>
              <div className="col s4">
                      <Card />
              </div>
              <div className="col s4">
                      <Card />
              </div>

          </div>
        </div>
    </div>
    </div>
    )
}
export default FeacturedBusiness;