import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

// In development mode, lets add the necessary property to allow a user
// to use the Redux DevTools to view the store.  Viewing the store
// is a really nice option when debugging store issues, or just to 
// be able to see when the store changes or validate it.  See:
// https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = (process.env.NODE_ENV === 'development')
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
