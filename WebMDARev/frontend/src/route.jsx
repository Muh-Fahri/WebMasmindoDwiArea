import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Page/Home";
import Login from "./Page/login";
import ProtectedRoute from "./protectedRoute";
import AdminPage from "./Page/Admin/admin";
import Tentang from "./Page/tentang";
import Bisnis from "./Page/bisnis";

function AppRouter() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/Login-admin-123" element={<Login />} />

                    <Route path="/admin/*"
                        element={<ProtectedRoute allowedroles={['admin']}>
                            <AdminPage />
                        </ProtectedRoute>}
                    />


                    {/* user */}
                    <Route path="/" element={<Home />} />
                    <Route path="tentang" element={<Tentang />} />
                    <Route path="bisnis" element={<Bisnis />} />

                </Routes>
            </Router>
        </div>
    )
}

export default AppRouter;