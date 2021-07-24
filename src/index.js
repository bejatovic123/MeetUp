import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css/';
import './app/layout/styles.css';
import App from './app/layout/App.jsx';
import reportWebVitals from './reportWebVitals';

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(<App />, rootEl);
}

if (module.hot) {
  module.hot.accept('./app/layout/App.jsx', function () {
    setTimeout(render);
  });
}
render();

//Hot Module Replacement (or HMR) is one of the most useful features offered by webpack. It allows all kinds of modules to be updated at runtime without the need for a full refresh
//refresuje sve promjene bez refresha u ovom slucaju App.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
