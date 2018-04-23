import React, { Component } from 'react';
import FlashMessage from './FlashMessage';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MessageList extends Component {
    render() {
        const messages = this.props.messages.map(message => 
        <FlashMessage key={message.id} message={message} />
        );
        return (
            <div>{messages}</div>
        );
    }
}

MessageList.propTypes = {
    messages: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps)(MessageList);

