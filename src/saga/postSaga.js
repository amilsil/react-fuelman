import * as types from '../actions/actionTypes';
import { put, takeEvery, call } from 'redux-saga/effects';

function fetchPostsImpl() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json());
}

export function* fetchPosts() {
   try {
      const posts = yield call(fetchPostsImpl);
      yield put({ type: types.POSTS_FETCH_SUCCEEDED, posts: posts });
   }
   catch(e) {
       yield put({ type: types.POSTS_FETCH_FAILED, message: e.message });
   }
}

export function* fetchPostsAsync() {
    yield takeEvery(types.POSTS_FETCH_ASYNC, fetchPosts);
}
