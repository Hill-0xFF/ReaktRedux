import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';

import './css/style.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
    </Router>
    
  </React.StrictMode>
);
