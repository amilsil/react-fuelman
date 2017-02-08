import { combineReducers } from 'redux';
// Call this courses to increase readability at component level
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses
});

export default rootReducer;
