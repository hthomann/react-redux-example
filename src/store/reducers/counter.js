import * as actionTypes from '../actions';

const initialState = {
    counter: 0
};

// HAT: Here, prevState is the previous state.  It can be named anything we want.
// It is assigned 'initialState' the very first time the function is called.
const reducer = ( prevState = initialState, action ) => {
    console.log("counter: state: ")
    console.log(prevState);
    console.log("counter: action: ")
    console.log(action);
    switch ( action.type ) {
        case actionTypes.INCREMENT:
            // HAT: Here we are copying the prevState to a new object (i.e. newState).  
            // Then, we update the counter in the newState, and finally we return
            // the new object which then becomes the new state.  We do not want to 
            // directly modify the prevState, as React will not detect the change.
            // React only notices when an object ref changes, not individual fields.
            // Therefore, we should copy the previous state to a new Object, then
            // update the field(s) of interest, then return the new Object.
            // See my comments in result.js for more details.
            const newState = Object.assign({}, prevState);
            newState.counter = prevState.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                // HAT: The above was one way to create and return a new Object (why a new Object is
                // necessary was explained above).  To follow is another, and likely better (i.e. shorthand)
                // way of creating a new Object and then changing the field(s) of interest.  
                // The spread operator in this case tells JS to distribute all of the properties and values in
                // prevState into a new object, then add, if it doesn't exist, or replace if it does exist, the 
                // counter property.  This new Object is then returned.
                ...prevState,
                counter: prevState.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...prevState,
                counter: prevState.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...prevState,
                counter: prevState.counter - action.val
            }
    }
    return prevState;
};

export default reducer;