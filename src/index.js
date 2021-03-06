import React from 'react';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {store} from "./app/store";
import * as ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <App/>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

