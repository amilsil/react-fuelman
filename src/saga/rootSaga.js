import { watchIncrementAsync } from './counterSaga';
import { watchVehiclesFetchAsync } from './vehicleSaga';

export default function* rootSaga() {
    yield [
        watchIncrementAsync(),
        watchVehiclesFetchAsync()
    ];
}