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

// Take our reducers and run it through the createStore method, this is what we
// will pass to the root component of our app
let store = createStore(reducers);

// Render our root component to the provided element
ReactDOM.render(
// Wrap our application in the prodiver component, passing the store we created
// to it. This will expose the store to all of our components
<Provider store={ store }>
    <Index/>
</Provider>, document.getElementById('app'));