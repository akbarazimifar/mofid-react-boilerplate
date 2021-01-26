import { all } from 'redux-saga/effects';

// Sagas
import authSaga from './app/authSaga';

const rootSaga = function* rootSagas() {
  yield all([authSaga()]);
};

export default rootSaga;
