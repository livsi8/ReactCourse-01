import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from '../../ReactCourse-01/src/js/modules/mainComponent/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './js/reducers/rootReducer'

const store = createStore(
    rootReducer
);

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <MainComponent/>
    </Provider>,
    document.getElementById('root')
)
