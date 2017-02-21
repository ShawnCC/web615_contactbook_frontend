'use strict';

// Include any necessary libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// Include root component
import Index from './components/index';

// Import main reducer
import reducers from './reducers';

let store = createStore(reducers);

// Render our root component to the provided element
ReactDOM.render(
<Provider store={ store }>
    <Index/>
</Provider>, document.getElementById('app'));