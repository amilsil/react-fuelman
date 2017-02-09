import * as types from './actionTypes';

export function incrementCount() {
    return { type: types.INCREMENT_COUNT };
}

export function incrementCountAsync() {
    return { type: types.INCREMENT_COUNT_ASYNC };
}