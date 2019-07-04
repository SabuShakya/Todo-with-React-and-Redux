import React from 'react';
import App from '../App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TodoReducer from '../reducers/todoReducer';

const store = createStore(
    TodoReducer
);

function StoreProvider() {
    return (
        <Provider store={store}>
            <App />
        </Provider>);
}

export default StoreProvider;