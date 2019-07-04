import React from 'react';
import App from '../App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import TodoReducer from '../reducers/todoReducer';
import thunk from 'redux-thunk';

const store = createStore(
    TodoReducer, applyMiddleware(thunk)
);

function StoreProvider() {
    return (
        <Provider store={store}>
            <App />
        </Provider>);
}

export default StoreProvider;