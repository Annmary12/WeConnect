import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class FlashMessage extends Component{
    render() {
        const { id, text, type } = this.props.message;
        return(
            <div className={classnames('alert', {
                'alert-success': type === 'success',
                'alert-danger': type === 'error'
            })}>
            {text} 
            </div>
        );
    }
}

FlashMessage.propTypes = {
    message: PropTypes.object.isRequired
}

export default FlashMessage;