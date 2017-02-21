'use strict';

import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { setContact } from './actions';

class Contact extends React.Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * 
     */
    handleClick(e) {
        e.preventDefault();

        const { contact } = this.props;

        // this.props.dispatch(setContact({
        //     contact
        // }));

        this.context.store.dispatch(setContact({
            contact
        }));
    }

    render() {
        // Grab the contact property from the props object which is provided by
        // the parent component. Google "Object destructuring" if you are
        // unfamilair with this syntax
        const { contact, reducer } = this.props;

        let cssClasses = 'list-group-item';

        if (contact.id === reducer.contact.id) {
            cssClasses += ' active';
        }
        
        /**
         * Print out the properties of the contact to the list item
         */
        return (
            <a href="#" className={ cssClasses } onClick={ this.handleClick }>{ contact.name } - { contact.phone_number }</a>
        );
    }
}

Contact.propTypes = {
    contact: React.PropTypes.object.isRequired
};

Contact.contextTypes = {
    store: React.PropTypes.object
};

function mapStateToProps(state) {
    return {
        reducer: state.contactReducer
    };
}

Contact = connect(
    mapStateToProps
)(Contact)

export default Contact;