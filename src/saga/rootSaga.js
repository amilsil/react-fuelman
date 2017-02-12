import { watchIncrementAsync } from './counterSaga';
import { fetchPostsAsync } from './postSaga';

export default function* rootSaga() {
    yield [
        watchIncrementAsync(),
        fetchPostsAsync()
    ];
}