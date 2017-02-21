'use strict';

const defaultState = {
    contacts: [{
        id: 1,
        name: 'Contact 1',
        phone_number: '555 555 5555'
    },
    {
        id: 2,
        name: 'Contact 2',
        phone_number: '555 555 5555'
    },
    {
        id: 3,
        name: 'Contact 3',
        phone_number: '555 555 5555'
    }]
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export default reducer