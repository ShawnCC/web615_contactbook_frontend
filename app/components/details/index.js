'use strict';

import React from 'react';
import { connect } from 'react-redux'

class Details extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { reducer } = this.props;

        return (
            <div>
                <p><strong>Name:</strong> { reducer.contact.name }</p>
                <p><strong>Email:</strong> { reducer.contact.email }</p>
                <p><strong>Phone Number:</strong> { reducer.contact.phone_number }</p>
            </div>
        );
    }
}

Details.propTypes = {
    reducer: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        reducer: state.detailsReducer
    };
}

Details = connect(
    mapStateToProps
)(Details)

export default Details;