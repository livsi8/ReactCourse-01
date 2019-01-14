import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './js/modules/maincomponent/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './js/reducers/rootReducer';
import reduxThunk from 'redux-thunk'

// const myCustomMiddleWare = store => {
//     return function (next) {
//         return function(action) {
//             console.log('trigger', action);
//             const result = next(action);
//             console.log('store after changing', store.getState());
//             return next(action);
//         }
//     }
// }

const store = createStore (
    rootReducer,
    applyMiddleware(reduxThunk)
    // applyMiddleware(myCustomMiddleWare)
);

window.store = store;
ReactDOM.render(
    <Provider store={store}>
        <MainComponent/>
    </Provider>,
    document.getElementById('root')
);