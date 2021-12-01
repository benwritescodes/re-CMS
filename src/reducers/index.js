import { combineReducers } from 'redux';
import contactReducer from './contactReducer';

//There could be more than one reducer, so we combine the reducers here
/**If that is th case, we would have
 * export default combineReducers({ contact: contactReducer, value:anotherReducer }) */
export default combineReducers({ contact: contactReducer });
