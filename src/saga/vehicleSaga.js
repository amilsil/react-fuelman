import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import * as type from '../actions/actionTypes';
import * as vehicleApi from '../api/vehicleApi';

export function* fetchVehiclesAsync() {
  yield delay(1000);
  yield put({ type: type.VEHICLES_FETCH_SUCCESS, vehicles: vehicleApi.getAllVehicles() });
}

export function* watchVehiclesFetchAsync() {
  yield takeEvery(type.VEHICLES_FETCH_ASYNC, fetchVehiclesAsync);
}