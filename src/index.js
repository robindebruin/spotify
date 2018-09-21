import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'


const counter = (state = 0, action) => {
    switch(action.type) {
    case 'INCREMENT':
       return state = state + 1;
    case 'DECREMENT':
       return state = state - 1;
    default:
       return state;
     }
    };

const store = createStore(counter);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
