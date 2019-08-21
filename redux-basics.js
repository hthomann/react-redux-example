// HAT: This file is a very basic redux example.  Simply execute this file
// using Node.js, it is seperate from React to show now the basics work.
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer - a reducer receives state and actions when the user
// dispatches and action.
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};

// Store - this basically creats our store, giving it our reducer.
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
