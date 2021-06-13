import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from "./reducers";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootReducer}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);