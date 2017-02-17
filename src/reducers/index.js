import counterReducer from './counterReducer';

export default function combined (state = {}, action) {
    return {
        count: counterReducer(state.count, action)
    };
}
