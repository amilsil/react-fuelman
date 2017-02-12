import expect from 'expect';
import { expectSaga } from 'redux-saga-test-plan';
import { fetchPostsAsync } from './saga/postSaga';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).toEqual(true);
    });
});

it('just works!', () => {
  return expectSaga(fetchPostsAsync)
    // assert that the saga will eventually yield `put`
    // with the expected action
    //.put({ type: 'POSTS_FETCH_SUCCEEDED'})

    .dispatch({ type: 'POSTS_FETCH_ASYNC' })

    // run it
    .run();
});