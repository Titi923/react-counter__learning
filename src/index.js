import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// stuff imported by me
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* Decided  to render on the root div, the Counters component, which is the main app in this project */}
    <Counters />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
