import React, { Suspense } from 'react'; // <<< Tambahkan 'Suspense' di sini
import ReactDOM from 'react-dom/client';
import AppRouter from './route';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// CSS
// import 'bootstrap/dist/css/bootstrap.min.css'; // Sudah diimpor di atas
import 'admin-lte/dist/css/adminlte.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// JS
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'leaflet/dist/leaflet.css'; // Ini adalah CSS, bukan JS

import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <<< BUNGKUS DENGAN <Suspense> */}
        <Suspense fallback={<div>Loading translations...</div>}>
            <AppRouter />
        </Suspense>
    </React.StrictMode>
);