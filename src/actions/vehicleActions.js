import * as types from './actionTypes';

export function createVehicle(name) {
    return { type: types.VEHICLE_ADD, name: name };
}

export function selectVehicle(vehicle) {
    return { type: types.VEHICLE_SELECTED, vehicle: vehicle };
}

export function fetchVehiclesAsync() {
    return { type: types.VEHICLES_FETCH_ASYNC };
}