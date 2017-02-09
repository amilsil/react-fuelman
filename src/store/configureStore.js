import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import { helloSaga } from '../saga/helloSaga';

export default function configureStore(initialState) {
    let sagaMiddleware = createSagaMiddleware();
    
    let store = createStore(
        rootReducer,
        initialState
    );

    //sagaMiddleware.run(helloSaga);
    
    return store;
}