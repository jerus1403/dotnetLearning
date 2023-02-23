import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.min.css';

import './app/layout/style.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { getStore } from './State/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = getStore();

root.render(
  <React.StrictMode>
    <Provider
      store={store}
      children={
        <BrowserRouter>
          <App />
        </BrowserRouter>
      }
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
