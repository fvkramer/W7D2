import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  const greeting = <h1>Todos App</h1>;
  ReactDOM.render(greeting, document.getElementById("content"));
});