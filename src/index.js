import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './js/modules/maincomponent/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './js/reducers/rootReducer';
import reduxThunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './js/rootSaga/rootSaga'
import { composeWithDevTools } from 'remote-redux-devtools';

const sagaMiddleware = createSagaMiddleware();

const store = createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, reduxThunk)),
);

sagaMiddleware.run(rootSaga);

window.store = store;
ReactDOM.render(
    <Provider store={store}>
        <MainComponent/>
    </Provider>,
    document.getElementById('root')
);
