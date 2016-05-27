import { createStore, compose } from 'redux';
import{ sycnHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the route reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//Create an object for the default dataconst defaultState = { 
const defaultState = {    
        posts,
        comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;