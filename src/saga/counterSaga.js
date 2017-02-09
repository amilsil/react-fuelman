import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import * as type from '../actions/actionTypes';

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: type.INCREMENT_COUNT });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(type.INCREMENT_COUNT_ASYNC, incrementAsync);
}