import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import reducer from './app/reducers';
import saga from './app/saga';
import { Provider } from "react-redux";
import composeWithDevTools from 'redux-devtools-extension';


const sagaMiddleware = createSagaMiddleware();

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our reducer above and middleware

const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

// run the saga
sagaMiddleware.run(watcherSaga);

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

// run the saga
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();




