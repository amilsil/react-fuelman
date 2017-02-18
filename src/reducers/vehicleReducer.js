import * as types from '../actions/actionTypes';

export default function vehicleReducer(state = {}, action) {
    switch(action.type) {
        case types.VEHICLES_FETCH_SUCCESS:
            return Object.assign({}, state, { vehicles: action.vehicles, selectedIndex: 1 });
        case types.ADD_VEHICLE: 
            let newVehicle = { id: state.vehicles.length + 2, name: action.name, refills: [] };
            return Object.assign({}, state, { vehicles: [...state.vehicles, newVehicle ] });
        default: 
            return state;
    }
}