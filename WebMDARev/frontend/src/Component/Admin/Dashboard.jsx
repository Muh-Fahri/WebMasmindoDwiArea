import React from 'react';
import NavSide from './navSide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faNewspaper, faHashtag } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
    return (
        <div className="d-flex flex-column flex-md-row">
            {/* Sidebar */}
            <div style={{ width: '260px', flexShrink: 0 }} className="flex-grow-1 flex-md-grow-0">
                <NavSide />
            </div>

            {/* Konten Utama */}
            <div className="flex-grow-1 content px-3 px-md-5 pt-5 mt-5" style={{ overflowX: 'hidden' }}>
                <div className="row">
                    <div className="col">
                        <h1>Selamat datang di Dashboard!</h1>
                        <p>Ini adalah halaman utama setelah login.</p>
                    </div>
                </div>

                {/* 3 Box Atas */}
                <div className="row gy-4 gx-4">
                    <div className="col-12 col-md-4">
                        <div className="card p-4 shadow h-100">
                            <div className="card-body m-0 p-0">
                                <div className="row align-items-center"> {/* Tambah align-items-center agar icon dan text sejajar vertikal */}
                                    <div className="col">
                                        {/* h5: Default (xs) fs-6, md ke atas fs-5 (ukuran normal h5) */}
                                        <h5 className="fs-6 fs-md-5" style={{ color: '#115258' }}>Laporan Tahunan Terupload </h5>
                                        {/* h1: Default (xs) display-6, md ke atas display-4 (ukuran normal h1) */}
                                        <h1 className="display-6 display-md-4">5</h1>
                                    </div>
                                    <div className="col-auto">
                                        {/* Ikon: Default (xs) 50px, md ke atas 80px (ukuran normal) */}
                                        <FontAwesomeIcon icon={faBook} style={{ fontSize: "50px" }} className="fs-md-icon-80" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card p-4 shadow h-100">
                            <div className="card-body m-0 p-0">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5 className="fs-6 fs-md-5" style={{ color: '#115258' }}>Berita Terupload </h5>
                                        <h1 className="display-6 display-md-4">5</h1>
                                    </div>
                                    <div className="col-auto">
                                        <FontAwesomeIcon icon={faNewspaper} style={{ fontSize: "50px", color: "#115258" }} className="fs-md-icon-80" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card p-4 shadow h-100">
                            <div className="card-body m-0 p-0">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5 className="fs-6 fs-md-5" style={{ color: '#115258' }}>Instagram Terupload </h5>
                                        <h1 className="display-6 display-md-4">5</h1>
                                    </div>
                                    <div className="col-auto">
                                        <FontAwesomeIcon icon={faHashtag} style={{ fontSize: "50px", color: "#F16022" }} className="fs-md-icon-80" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ESG Section */}
                <div className="row mt-5">
                    <div className="col">
                        <div className="card p-4 shadow">
                            <div className="card-body m-0 p-0">
                                <div className="row">
                                    <div className="col">
                                        <h5>ESG (Environmental, Social, Governance)</h5> {/* Judul utama ESG tetap */}
                                    </div>
                                </div>

                                <div className="row mt-4 d-flex justify-content-center gy-4 gx-4">
                                    <div className="col-12 col-sm-6 col-lg-3">
                                        <div className="card p-3 p-md-4 text-white h-100" style={{ backgroundColor: '#F16022' }}>
                                            <div className="card-body m-0 p-0">
                                                {/* h5: Default (xs) fs-6, lg ke atas fs-5 */}
                                                <h5 className="fs-6 fs-lg-5">Enviro "Lingkungan"</h5>
                                                {/* p: Default (xs) small, lg ke atas tetap small atau bisa diatur fs-6 jika mau sedikit lebih besar */}
                                                <p className="small mb-2">Postingan Terupload Pada Halaman Enviro</p>
                                                {/* h1: Default (xs) display-6, lg ke atas display-4 */}
                                                <h1 className="display-6 display-lg-4">5</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-3">
                                        <div className="card p-3 p-md-4 text-white h-100" style={{ backgroundColor: '#F16022' }}>
                                            <div className="card-body m-0 p-0">
                                                <h5 className="fs-6 fs-lg-5">Social "Sosial"</h5>
                                                <p className="small mb-2">Postingan Terupload Pada Halaman Sosial</p>
                                                <h1 className="display-6 display-lg-4">5</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-3">
                                        <div className="card p-3 p-md-4 text-white h-100" style={{ backgroundColor: '#F16022' }}>
                                            <div className="card-body m-0 p-0">
                                                <h5 className="fs-6 fs-lg-5">Governance "Tata Kelola"</h5>
                                                <p className="small mb-2">Postingan Terupload Pada Halaman Tata Kelola</p>
                                                <h1 className="display-6 display-lg-4">5</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;