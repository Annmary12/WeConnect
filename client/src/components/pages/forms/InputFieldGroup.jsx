import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description renders input field
 * @method InputFieldGroup
 *
 * @param { string } type - takes type, onchange value, name, label, icon of an input field
 *
 * @returns { void }
 */
const InputFieldGroup = ({
  type, onChange, value, name, label, icon
}) => (
  <div className="input-field">
    <i className="material-icons prefix">{icon}</i>
    <input
      id="icon_prefix"
      type={ type }
      value={ value }
      onChange={ onChange }
      name={ name }
      required
      />
    <label htmlFor="icon_prefix" className="active">{label}</label>
  </div>
);

InputFieldGroup.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default InputFieldGroup;

