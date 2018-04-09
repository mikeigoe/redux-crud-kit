import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './rootReducer';
import App from './app/App';
import './index.css';

const store = createStore(
  rootReducer
);

ReactDOM.render(<App />, document.getElementById('app'));