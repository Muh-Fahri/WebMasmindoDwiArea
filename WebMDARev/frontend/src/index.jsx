import React, { Suspense } from 'react'; // <<< Tambahkan 'Suspense' di sini
import ReactDOM from 'react-dom/client';
import AppRouter from './route';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'admin-lte/dist/css/adminlte.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'leaflet/dist/leaflet.css';

import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Suspense fallback={<div></div>}>
            <AppRouter />
        </Suspense>
    </React.StrictMode>
);