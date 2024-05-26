import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/Store.js'
import { Provider } from 'react-redux'
import '@fortawesome/fontawesome-free/css/all.min.css';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
