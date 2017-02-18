import counterReducer from './counterReducer';
import vehicleReducer from './vehicleReducer';

export default function combined (state = {}, action) {
    return {
        count: counterReducer(state.count, action),
        vehicles: vehicleReducer(state.vehicles, action)
    };
}
