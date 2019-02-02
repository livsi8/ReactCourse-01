import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './js/modules/mainComponent/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './js/reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './js/rootSaga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

window.store = store;
const container = document.getElementById('root');
ReactDOM.render(
    <Provider store = {store}>
        <MainComponent/>
    </Provider>,
    container
);