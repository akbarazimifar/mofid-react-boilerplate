import { combineReducers } from 'redux';

// Reducers
import auth from '@pages/auth/auth/auth-reducers';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
