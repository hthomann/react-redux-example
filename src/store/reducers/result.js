import * as actionTypes from '../actions';

const initialState = {
    results: []
};

// HAT: Here, state is the previous state.  It can be named anything we want.
// It is assigned 'initialState' the very first time the function is called.
const reducer = (state = initialState, action) => {
    console.log("result: state: ")
    console.log(state);
    console.log("result: action: ")
    console.log(action);
    switch (action.type) {
        // HAT: The very important thing to note here is that the object returned is 
        // a copy, not a ref!!  We don't want to update the state, rather a copy of it.
        // See my comments in counter.js for details on why.  
        // Furthermore, we also need to keep in mind that we should consider if we need
        // to do a shallow or deep copy!!  When using the spread operate (...), it only
        // does a shallow copy.  In other words, since 'results' is an array,
        // when doing a spread the same result/ref is returned.  Therefore, we need
        // to make sure a new array is returned by using an array operator that
        // returns a new array (i.e see 'concat' and 'filter' usage below.)
        // These concepts are explained here:
        // https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
        case actionTypes.STORE_RESULT:
            return {
                // HAT: In counter.js I explain how the spread operator is distributing
                // all property and values from the old state into the new object that
                // will be returned.
                // Also added to the new object is a new 'result' array.  I say 'new'
                // because of the use of 'concat'.  One might be tempted to use 'push' 
                // to add the new value to the array.  However, 'push' will operate on 
                // the previous array.  We want to return a new array, not the old array 
                //reference, with the new entry added.   
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result })
            }
        case actionTypes.DELETE_RESULT:
            // HAT: Similar as to the STORE_RESULT above, we don't want to operate on the old
            // state (array), we need a new copy, and then operate on that.  Filter will return 
            // a new array.  Filter takes a function as an input, where the fuction is executed
            // on each element in the array.
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
};

export default reducer;