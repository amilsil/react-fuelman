import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import { helloSaga } from '../saga/helloSaga';
import { watchIncrementAsync } from '../saga/counterSaga';

export default function configureStore(initialState) {
    let sagaMiddleware = createSagaMiddleware();
    
    let store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(watchIncrementAsync);
    
    return store;
}