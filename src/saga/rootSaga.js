import { watchIncrementAsync } from './counterSaga';

export default function* rootSaga() {
    yield [
        watchIncrementAsync()
    ];
}