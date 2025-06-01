import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from "./Page/Home";
import Login from "./Page/login";
import ProtectedRoute from "./protectedRoute";
import AdminPage from "./Page/Admin/admin";
import Tentang from "./Page/tentang";
import Bisnis from "./Page/bisnis";
import ESG from "./Page/esg";
import Sosial from "./Page/sosial";
import Berita from "./Page/berita";
import BeritaSelengkapnya from "./Page/beritaSelengkapnya";
import Instagram from "./Page/instagram";
import Youtube from "./Page/youtube";


function AppRouter() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/Login-admin-123" element={<Login />} />

                    <Route path="/admin/*"
                        element={<ProtectedRoute allowedroles={['admin']}>
                            <AdminPage />
                        </ProtectedRoute>} />


                    {/* user */}
                    <Route path="/" element={<Home />} />
                    <Route path="tentang" element={<Tentang />} />
                    <Route path="bisnis" element={<Bisnis />} />
                    <Route path="ESG" element={<ESG />} />
                    <Route path="ESG/sosial" element={<Sosial />} />
                    <Route path="berita" element={<Berita />} />
                    <Route path="/berita/selengkapnya/:uuid" element={<BeritaSelengkapnya />} />
                    <Route path="instagram" element={<Instagram />} />
                    <Route path="youtube" element={<Youtube />} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouter;