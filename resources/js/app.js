require('./bootstrap');

// import Alpine from 'alpinejs';

// window.Alpine = Alpine;

// Alpine.start();

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
    BrowserRouter
  } from "react-router-dom";
import HomeForm from './Components/home/HomeForm';
import LoginForm from './Components/Login/LoginForm';
import RegisterForm from './Components/Register/RegisterForm'
import RequestService from './Service/RequestService';

export default function App() {
    var request = new RequestService;
    const navigate = useNavigate();

    return (
        <Routes>
            <Route exact path="/" element={ <HomeForm /> } />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
        </Routes>
    );

}

if (document.getElementById('app')) {
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
}
