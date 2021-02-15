import { all } from 'redux-saga/effects';

// Sagas
import authSaga from '@pages/auth/auth/auth-sagas';

const rootSaga = function* rootSagas() {
  yield all([authSaga()]);
};

export default rootSaga;
