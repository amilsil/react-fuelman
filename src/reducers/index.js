import courseReducer from './courseReducer';
import counterReducer from './counterReducer';

export default function combined (state = {}, action) {
    return {
        count: counterReducer(state.count, action),
        courses: courseReducer(state.courses, action)
    };
}
