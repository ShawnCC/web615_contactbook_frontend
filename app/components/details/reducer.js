'use strict';

const defaultState = {
    contact: {}
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_CONTACT': {
            return {
                contact: action.payload.contact
            };
        }
        default: {
            return state;
        }
    }
}

export default reducer