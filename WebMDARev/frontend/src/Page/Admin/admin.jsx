import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../Component/Admin/Dashboard";
import Bisnis from "../../Component/Admin/bisnis";
import Berita from "../../Component/Admin/berita";
import Lingkungan from "../../Component/Admin/Lingkungan";
import Sosial from "../../Component/Admin/sosial";
import Instagram from "../../Component/Admin/instagram";
import Youtube from "../../Component/Admin/youtube";

function AdminPage() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="bisnis" element={<Bisnis />} />
                <Route path="berita" element={<Berita />} />
                <Route path="/esg/lingkungan" element={<Lingkungan />} />
                <Route path="/esg/sosial" element={<Sosial />} />
                <Route path="instagram" element={<Instagram />} />
                <Route path="youtube" element={<Youtube />} />

            </Routes>
        </div>
    )
}

export default AdminPage;