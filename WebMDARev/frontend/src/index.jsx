import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './route';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/adminlte.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// JS
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />);


