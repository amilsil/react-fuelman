import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';

export default function configureStore(initialState) {
    let sagaMiddleware = createSagaMiddleware();
    
    let store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga);
    
    return store;
}