import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../Component/Admin/Dashboard";
import Bisnis from "../../Component/Admin/bisnis";
import Berita from "../../Component/Admin/berita";
import Lingkungan from "../../Component/Admin/Lingkungan";
import Sosial from "../../Component/Admin/sosial";
import Instagram from "../../Component/Admin/instagram";
import Youtube from "../../Component/Admin/youtube";
import PDF from "../../Component/Admin/pdf";
import Galeri from "../../Component/Admin/galeri";
import Alamat from "../../Component/Admin/alamat";
import Carousel from "../../Component/Admin/carousel";
import AdminKarir from "../../Component/Admin/adminKarir";
import AdminKontak from "../../Component/Admin/adminKontak";



function AdminPage() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="bisnis" element={<Bisnis />} />
                <Route path="berita" element={<Berita />} />
                <Route path="esg/lingkungan" element={<Lingkungan />} />
                <Route path="esg/sosial" element={<Sosial />} />
                <Route path="instagram" element={<Instagram />} />
                <Route path="youtube" element={<Youtube />} />
                <Route path="laporan_keberlanjutan" element={<PDF />} />
                <Route path="galeri" element={<Galeri />} />
                <Route path="alamat" element={<Alamat />} />
                <Route path="carousel" element={<Carousel />} />
                <Route path='karir' element={<AdminKarir />} />
                <Route path="kontak" element={<AdminKontak />} />

            </Routes>
        </div>
    )
}

export default AdminPage;