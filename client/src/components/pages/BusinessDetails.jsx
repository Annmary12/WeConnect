import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewForm from './forms/ReviewForm';
import { Link } from 'react-router-dom';

/**
 * @description renders the details the business
 *
 * @class BusinessDetails
 *
 * @extends Component
 */
class BusinessDetails extends Component {
  /**
     *
     * @description renders an action button
     *
     * @returns {object} markUp
     */
  render() {
    const { isAuthenticated, user } = this.props.authData;
    const {
      description, location, category, name, website,
      id, onDelete, reviews, userId, handleLike, numberOfLikes,
      totalReview
    } = this.props;

    const actionButtons = (
      <div>
        <Link to={`/editBusiness/${id}`} className="btn waves-effect waves-light btn_large ">Edit
               <i className="material-icons left">send</i>
        </Link> &nbsp;
             <button onClick={ onDelete } className="btn waves-effect waves-light btn_large " name="action">Delete
               <i className="material-icons left">send</i>
        </button>
      </div>
    );

    /**
     * @description displays details of a business
     *
     * @returns { jsx } jsx - renders the business
     */
    return (
      <div className=""><br /><br />
        <div className="row">
          <div className="col s12 m12 l8">
            <div className="row">
              <div className="col s10 offset-s1">
              <h3>About</h3>
                <p className="p-body">
                  { description }
                </p>
                <div className="row">
                  <div className="col s6 p-body">
                    <b>Business Location:</b> { location }<br />
                    <b>Category:</b> <span className="label warning">{ category }</span><br />
                    <b>Website:</b> <a href={`http://${website}`} target="_blank">{ website } </a>
                  </div>
                  <div className="col s6 right-align">
                    <span><b>{ !totalReview ? '0' : totalReview }</b> reviews</span>
                    <span onClick={ handleLike } className="pointer"><i className="small material-icons" style={{ color: '#129381' }}>favorite</i></span>
                    <b id="like-count">{ numberOfLikes } likes</b>
                  </div>
                </div>
                <div className="row right-align">
                  {
                    isAuthenticated && user.id === userId ? actionButtons : null
                  }

                </div>
              </div>
            </div>
            {/* { isAuthenticated && user.id !== userId ?  */}
              <ReviewForm businessId={ id } reviews={ reviews } /> :
              {/* null} */}

          </div>
          <div className="col s12 m12 l3 left">
            <div className="card side-card">
              <div className="card-content">
                <span className="card-title">Related Businesses</span><br /><hr />
                <div className="row">
                  <div className="col s3">
                    <img src={ require('../../../public/images/login2.jpg') } className="image-nav" alt='businessImage' />
                  </div>
                  <div className="col s9">Smart Hub</div>
                </div><hr />

                <div className="row">
                  <div className="col s3">
                    <img src={ require('../../../public/images/login2.jpg') } className="image-nav" alt='businessImage' />
                  </div>
                  <div className="col s9">Smart Hub</div>
                </div><hr />

                <div className="row">
                  <div className="col s3">
                    <img src={ require('../../../public/images/login2.jpg') } className="image-nav" alt='businessImage' />
                  </div>
                  <div className="col s9">Smart Hub</div>
                </div><hr />

                <div className="row">
                  <div className="col s3">
                    <img src={ require('../../../public/images/login2.jpg') } className="image-nav" alt='businessImage'/>
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
                    <img src={ require('../../../public/images/login2.jpg') } className="image-nav" alt='businessImage' />
                  </div>
                  <div className="col s9">Smart Hub</div>
                </div><hr />

                <div className="row">
                  <div className="col s3">
                    <img src={ require('../../../public/images/login2.jpg') } className="image-nav" alt='businessImage' />
                  </div>
                  <div className="col s9">Smart Hub</div>
                </div><hr />

                <div className="row">
                  <div className="col s3">
                    <img src={ require('../../../public/images/login2.jpg') } className="image-nav" alt='businessImage' />
                  </div>
                  <div className="col s9">Smart Hub</div>
                </div><hr />

                <div className="row">
                  <div className="col s3">
                    <img src={ require('../../../public/images/login2.jpg') } className="image-nav" alt='businessImage' />
                  </div>
                  <div className="col s9">Smart Hub</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authData: state.auth,
  totalReview: state.allReviews.totalReview
});
export default connect(mapStateToProps)(BusinessDetails);
