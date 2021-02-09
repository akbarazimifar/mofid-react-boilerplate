import { combineReducers } from 'redux';

// Reducers
import auth from '@pages/auth/auth/authReducers';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
