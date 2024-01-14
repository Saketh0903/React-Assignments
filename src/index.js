import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import RootComponent from './components/React JS Assignment 7/RootComponent';
import AddUser from './components/React JS Assignment 7/AddUser';
import Store from './components/ContextAPI/Store';
import UsersStore from './components/ContextAPI 2/Store';
import FormDemo2 from './components/FormDemo/FormDemo2';
import Parent from './components/Props/Parent';
import Parent1 from './components/Props/Parent1';
import Users from './components/React JS Assignment 5/Users';
import UserForm from './components/React JS Assignment 6/UserForm';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
