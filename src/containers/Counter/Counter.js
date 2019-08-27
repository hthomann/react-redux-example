import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render() {
        let msgToRemove;
        if (this.props.storedResults.length > 0) {
            msgToRemove = "Click on a stored value to remove it.";
        }
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <p>{msgToRemove}</p>
                
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

// HAT: We give this funtion (see 'connect' below) to Redux and it is called 
// when the state is updated.   
const mapStateToProps = theState => {
    console.log('Counter.mapStateToProps: ')
    console.log(theState)
    return {
        // HAT: here we assign the props 'ctr' and 'storedResults' to the 
        // cooresponding state maintained by Redux, when it changes.
        ctr: theState.ctr.counter,
        storedResults: theState.res.results
    }
};

// HAT: Here we are 'dispatching' actions.  So, for example, search this class
// for 'onIncrementCounter'.  Doing so we'll see that 'onIncrementCounter' is 
// assigned to the increment button.  Redux will map a dispatch call to the 
// 'onIncrementCounter' prop.  Therefore, when the increment button is called, 
// the 'onIncrementCounter' function is called which in turn calls the Redux
// dispatch function, which then causes the 'reducers' to be called, which 
// ultimately updates the state.
const mapDispatchToProps = dispatch => {
    console.log('Counter.mapStateToProps: ');
    console.log(dispatch)
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCounter: () => dispatch({ type: actionTypes.ADD, val: 10 }),
        onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, val: 15 }),
        onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);