import * as types from '../actions/actionTypes';

export default function vehicleReducer(state = {}, action) {
    switch(action.type) {
        case '@@INIT':
            return { vehicles: [], selectedVehicle: null };
        case types.VEHICLES_FETCH_SUCCESS:
            return Object.assign({}, state, { vehicles: action.vehicles, selectedVehicle: action.vehicles[0] });
        case types.VEHICLE_ADD: 
            let newVehicle = { id: state.vehicles.length + 2, name: action.name, refills: [] };
            return Object.assign({}, state, { vehicles: [...state.vehicles, newVehicle ] });
        case types.VEHICLE_SELECTED:
            return Object.assign({}, state, { selectedVehicle: action.vehicle });
        default: 
            return state;
    }
}