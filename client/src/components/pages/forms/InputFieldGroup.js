import React from 'react';
import PropTypes from 'prop-types';

const InputFieldGroup = ({type, onChange, value, name, label, icon}) => {
    return(
        <div className="input-field">
                                                    <i className="material-icons prefix">{icon}</i>
                                                    <input id="icon_prefix" 
                                                             type={type}
                                                             value={value}
                                                             onChange={onChange}
                                                             name={name}
                                                             required
                                                             />
                                                            
                                                    <label htmlFor="icon_prefix">{label}</label>
                                                    
                                                    
                                                  </div>
    );
}

InputFieldGroup.propTypes = {
type: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired,
value: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
label: PropTypes.string.isRequired,
icon: PropTypes.string.isRequired,
}
export default InputFieldGroup;

