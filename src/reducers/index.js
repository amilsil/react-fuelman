import { combineReducers } from 'redux';
// Call this courses to increase readability at component level
import courseReducer from './courseReducer';
import counterReducer from './counterReducer';

export default function combined (state = {}, action) {
    return {
        count: counterReducer(state.count, action),
        courses: courseReducer(state.courses, action)
    }
}
