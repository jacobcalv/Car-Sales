//dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
//App
import App from './App';
//indexes
import rootReducer from './reducers'
//styling
import 'bulma/css/bulma.css';
import './styles.scss';
//Store
const store = createStore(rootReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, rootElement);
