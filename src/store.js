// createStore initializes a store
//applyMiddleware because we will be bringing in the thunk middleware
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// No need to add './reducers/index.js cause webpack automatically search for the index file
import rootReducer from './reducers';

//The createStore method takes in initialState as a parameter
const initialState = {};

const middleware = [thunk];

//compose allow us to insert more than one parameter
//We are using the spread operator to spread the middleware array incase we add more values to the array
const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__(),
	),
);

export default store;
