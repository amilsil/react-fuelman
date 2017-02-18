import * as types from '../actions/actionTypes';

export default function vehicleReducer(state = [], action) {
    switch(action.type) {
        case types.VEHICLES_FETCH_SUCCESS:
            return [...action.vehicles];
        case types.ADD_VEHICLE: 
            let newVehicle = { id: state.length + 2, name: action.name, refills: [] };
            return [...state, newVehicle];
        default: 
            return state;
    }
}