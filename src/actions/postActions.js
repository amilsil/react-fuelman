import * as types from './actionTypes';

// Use Action Creator 
export function fetchPosts() {
    return { type: types.POSTS_FETCH_ASYNC };
}