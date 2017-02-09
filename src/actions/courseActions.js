import * as types from './actionTypes';

// Use Action Creator 
export function createCourse(course) {
    return { type: types.CREATE_COURSE, course };
}