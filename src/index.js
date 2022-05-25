// modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './static/css/styles.css';

// pages
import HomePage from './static/pages/homepage';
import TopBar from './static/pages/topbar';
import BottomBar from './static/pages/buttombar';
import SignUp from './static/pages/signup';
import SignIn from './static/pages/signin';
import MyAccount from './static/pages/myaccount';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<><TopBar /><HomePage /><BottomBar /></>} />
    <Route path="/signup" element={<><TopBar /> <SignUp /></>} />
    <Route path="/login" element={<><TopBar /> <SignIn /></>} />
    <Route path="/myaccount" element={<><TopBar /><MyAccount/><BottomBar /></>} />
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
