import { combineReducers } from 'redux';

// Reducers
import auth from './app/authReducer';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
