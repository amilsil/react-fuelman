import * as type from '../actions/actionTypes';

export default function counterReducer(state = 0, action) {
    switch(action.type) {
        case type.INCREMENT_COUNT: 
            console.log('incrementing');
            return state + 1;
        default: 
            console.log('initial ' + state);
            return state;
    }
}