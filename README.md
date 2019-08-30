# react-redux-example

The basis of this example was taken from this Udemy course:

https://www.udemy.com/react-the-complete-guide-incl-redux

It consist of a simple counter where the state is stored in Redux.

To use it simply clone the code then do a 'npm install', then an 'nmp start'.  

The first thing to look at is redux-basics.js.  This simply uses 
Redux from a JS file that can be executed directly using Node.js; i.e.
no React necessary.

The rest of the app is a React app and demonstrates Redux usage in 
React.  The use of Redux is a bit different in React compared to 
the basic Node.js example where the basic Node.js example creates a
store, accesses the store, dispatches actions, and "reduces" the
actions all in one file.  In react we don't do everthing in one file
like that.
To start, check out index.js.  This is were we define our two 
reducers (combined into one reducer, more about this below).  
This is also where we create our store and
provide a 'Provider' component that uses the store.  This is done at
the root (upper) most part of our react app so the rest of the (children)
components can make use of the store.  
The next thing to look at is 'Counter.js' (not 'counter.js').  This is at 
the heart of our Redux usage.  There you will notice we do not have a
'state' object as we are used to.  Rather, we have a few Redux operations.
Namely, we have 'mapStateToProps' and 'mapDispatchToProps'.  This is the
way Redux will give us update state.  It basically uses the fields in
'mapStateToProps' to map state to component props.  'mapDispathToProps' is
our way to 'dispatch' actions to Redux.  Finally, we give these two functions
to Redux by calling 'connect'.  
Finally, we have two reducers, namely result.js and counter.js.  These 
are called when we 'dispatch' actions.  They will change state, as necessary
based on the recieved action, if the action is one in which it expects.
I've put a ton of details in these two classes regarding some array actions
taken which comes down to Immutability, and why editing the state in an
immutable way is very important.
