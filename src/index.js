import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import registerServiceWorker from './registerServiceWorker';
import Card from './Card';
import 'tachyons';
import {robots}  from './robots';





const root = ReactDOM.createRoot( document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>

      <Card id = {robots[1].id} name = {[1].name} username = {[1].username} email = {[1].email}/>
      <Card id = {robots[2].id} name = {[2].name} username = {[2].username} email = {[2].email}/>
      <Card id = {robots[3].id} name = {[3].name} username = {[3].username} email = {[3].email}/>
      <Card id = {robots[4].id} name = {[4].name} username = {[4].username} email = {[4].email}/>
      <Card id = {robots[5].id} name = {[5].name} username = {[5].username} email = {[5].email}/>

      
    </div>



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
