import { Component } from 'react';

/**
 * @class EditBusinessForm
 */
class EditBusinessForm extends Component {

  /**
     *
     * React element markup
     * @returns {object} markUp
     */
  render() {
    return (
      <div className="container">
        <div className="row register-section">
          <div className="col s10 offset-s1">
            <div className="card">
              <div className="card-content">
                <div className="input-field">
                  <i className="material-icons prefix">face</i>
                  <input id="last_name" type="text" className="validate" value="Smart Phone" />
                  <label for="last_name">Business Name</label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">description</i>
                  <textarea id="textarea1" className="materialize-textarea" value="">Smart phone description</textarea>
                  <label for="textarea1">Description of your business...</label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">label</i>
                  <select>
                    <option value="" disabled >Choose Category</option>
                    <option value="1" selected>IT</option>
                    <option value="2">Marketing</option>
                    <option value="3">Sports</option>
                  </select>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">edit_location</i>
                  <select name="location">
                    <option value="" disabled>Choose Location</option>
                    <option>Abia</option>
                    <option selected>Abuja</option>
                    <option>Lagos</option>
                  </select>
                </div>
                <div className="file-field input-field">
                  <div className="btn" id="button">
                    <span>upload</span>
                    <input type="file" />
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" value="amaka.jpg" />
                  </div>
                </div>
                <div className="input-field center-align">
                  <button className="btn waves-effect waves-light btn_large" type="submit" name="action">Update
                    <i className="material-icons left">send</i>
                  </button>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default EditBusinessForm;
