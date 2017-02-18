import * as types from './actionTypes';

export function createVehicle(name) {
    return { type: types.ADD_VEHICLE, name: name };
}

export function fetchVehiclesAsync() {
    return { type: types.VEHICLES_FETCH_ASYNC };
}