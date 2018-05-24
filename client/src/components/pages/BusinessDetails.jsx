import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewForm from './forms/ReviewForm';
import { Link } from 'react-router-dom';

class BusinessDetails extends Component {
  render() {

    const { isAuthenticated, user } = this.props.authData;
    const { description, location, category, name, website, id, onDelete, reviews, userId } = this.props;


    const actionButtons = (
      <div>
        <Link to={`/editBusiness/${id}`} className="btn waves-effect waves-light btn_large ">Edit
               <i className="material-icons left">send</i>
        </Link> &nbsp;
             <button onClick={onDelete} className="btn waves-effect waves-light btn_large " name="action">Delete
               <i className="material-icons left">send</i>
        </button>
      </div>
    );

    return (
      <div className=""><br /><br /><br /><br /><br />
        <div className="row">
          <div className="col s12 m12 l8">
            <div className="row">
              <div className="col s10 offset-s1">
                <p className="p-body">
                  {description}
                </p>
                <div className="row">
                  <div className="col s6 p-body">
                    <b>Business Location:</b> {location}<br />
                    <b>Category:</b><span className="label">{category}</span><br />
                    <b>Website:</b>{website}
                  </div>
                  <div className="col s6 right-align">
                    <span><b>30</b> reviews</span>
                    <a href="#!"><i className="small material-icons">favorite_border</i></a>
                    <b id="like-count">21 likes</b>
                  </div>
                </div>
                <div className="row right-align">
                  {
                    isAuthenticated && user.payload.id == userId ? actionButtons : null
                  }

                </div>
              </div>
            </div>
            {/* { isAuthenticated && user.payload.id !== userId ?  */}
              <ReviewForm businessId={id} reviews={reviews} /> : 
              {/* null} */}
            
          </div>
          <div className="col s12 m12 l3 left">
            <div className="card side-card">
              <div className="card-content">
                <span className="card-title">Related Businesses</span><br /><hr />
                <div className="row">
                  <div className="col s3">
                    <img src={require('../../../public/images/login2.jpg')} className="image-nav" />
                  </div>
                  <div className="col s9">Smart Hub</div>
                </div><hr />

                <div className="row">
                  <div className="col s3">
                    <img src={require('../../../public/images/login2.jpg')} className="image-nav" />
                  </div>
                  <div className="col s9">Smart Hub</div>
                </div><hr />

                <div className="row">
                  <div className="col s3">
                    <img src={require('../../../public/images/login2.jpg')} className="image-nav" />
                  </div>
                  <div className="col s9">Smart Hub</div>
                </div><hr />

                <div className="row">
                  <div className="col s3">
                    <img src={require('../../../public/images/login2.jpg')} className="image-nav" />
                  </div>
                  <div className="col s9">Smart Hub</div>
                </div>
              </div>

            </div>

            <div className="card side-card">
              <div className="card-content">
                <span className="card-title">Trending Businesses</span><br /><hr />
                <div className="row">
                  <div className="col s3">
                    <img src={require('../../../public/images/login2.jpg')} className="image-nav" />
                  </div>
                  <div className="col s9">Smart Hub</div>
                </div><hr />

                <div className="row">
                  <div className="col s3">
                    <img src={require('../../../public/images/login2.jpg')} className="image-nav" />
                  </div>
                  <div className="col s9">Smart Hub</div>
                </div><hr />

                <div className="row">
                  <div className="col s3">
                    <img src={require('../../../public/images/login2.jpg')} className="image-nav" />
                  </div>
                  <div className="col s9">Smart Hub</div>
                </div><hr />

                <div className="row">
                  <div className="col s3">
                    <img src={require('../../../public/images/login2.jpg')} className="image-nav" />
                  </div>
                  <div className="col s9">Smart Hub</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authData: state.auth,

})
export default connect(mapStateToProps)(BusinessDetails);
