import React from "react";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div>
            <section style={{ backgroundColor: '#747474' }} className="py-5"> {/* Tambah py-5 untuk padding vertikal */}
                <div className="container-fluid p-4 p-md-5"> {/* Kurangi padding di mobile, normal di md ke atas */}
                    <div className="row text-white flex-column flex-md-row"> {/* Buat flex-column di mobile, flex-row di md ke atas */}

                        {/* Kolom Kiri (Informasi Kontak) */}
                        <div className="col-12 col-md-6 mb-4 mb-md-0"> {/* Ambil lebar penuh di mobile, setengah di md ke atas */}
                            <div className="row">
                                <div className="col-12"> {/* Ambil lebar penuh di mobile */}
                                    <h3 className="text-uppercase text-white fs-4 fs-md-3 mb-4">PT Masmindo Dwi Area</h3> {/* Perkecil font di mobile, normal di md ke atas */}
                                </div>
                            </div>
                            {/* Office */}
                            <div className="row"> {/* Hapus mt-5 di row ini, pakai mt-3 per item */}
                                <div className="col-12 col-md-6 mb-3"> {/* Ambil setengah lebar di md, penuh di mobile */}
                                    <Link className="text-white text-decoration-none" to={"https://maps.app.goo.gl/YOUR_JAKARTA_MAP_LINK_HERE"} target="_blank" rel="noopener noreferrer"> {/* Ganti dengan link Google Maps asli */}
                                        <h5 className="fs-6 fs-md-5">Jakarta Office</h5> {/* Perkecil font di mobile, normal di md ke atas */}
                                        <p className="fs-7 fs-md-6 mb-0"> {/* Perkecil font di mobile, normal di md ke atas */}
                                            Graha Mitra, 10th Floor Unit 1002 <br />
                                            Jl. Gatot Subroto Kav. 21 <br />
                                            DKI Jakarta 12930, Indonesia
                                        </p>
                                    </Link>
                                </div>
                                <div className="col-12 col-md-6 mb-3">
                                    <Link className="text-white text-decoration-none" to={"https://maps.app.goo.gl/YOUR_SITE_MAP_LINK_HERE"} target="_blank" rel="noopener noreferrer"> {/* Ganti dengan link Google Maps asli */}
                                        <h5 className="fs-6 fs-md-5">Site Office</h5>
                                        <p className="fs-7 fs-md-6 mb-0">
                                            Desa Rante Balla <br />
                                            Kec. Latimojong, Kabupaten Luwu <br />
                                            Sulawesi Selatan, Indonesia
                                        </p>
                                    </Link>
                                </div>
                            </div>
                            <div className="row mt-md-3"> {/* Tambahkan margin top di md ke atas untuk baris ini */}
                                <div className="col-12 col-md-6 mb-3">
                                    <a className="text-white text-decoration-none" href="https://maps.app.goo.gl/Sd5k71o3BoWdF6mA7" target="_blank" rel="noopener noreferrer">
                                        <h5 className="fs-6 fs-md-5">Representative Office</h5>
                                        <p className="fs-7 fs-md-6 mb-0">
                                            Jl. Sawerigading, Balo-Balo <br />
                                            Kec. Belopa, Kabupaten Luwu <br />
                                            Sulawesi Selatan
                                        </p>
                                    </a>
                                </div>
                                <div className="col-12 col-md-6 mb-3">
                                    <Link className="text-white text-decoration-none">
                                        <h5 className="fs-6 fs-md-5">Hubungi Kami</h5>
                                        <p className="fs-7 fs-md-6 mb-0">(021)2525255</p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Garis Pemisah (Hanya Muncul di Tablet/Desktop) */}
                        <div className="col-auto d-none d-md-flex justify-content-center align-items-center px-4"> {/* col-auto, d-none di mobile, d-md-flex di md ke atas */}
                            <div className="garis-putih" style={{ height: '100%', width: '1px', backgroundColor: 'white' }}></div> {/* Definisi gaya garis langsung */}
                        </div>

                        {/* Kolom Kanan (Logo) */}
                        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center mt-4 mt-md-0"> {/* Full width di mobile, lebih kecil di md, tengah di mobile/desktop */}
                            <div className="text-center"> {/* Tambahkan text-center untuk menengahkan logo di mobile */}
                                <img className="img-fluid" src="/logoMDAWhite.png" alt="Logo Masmindo Dwi Area" style={{ maxHeight: '300px', maxWidth: '300px' }} /> {/* Atur max-height/width untuk kontrol ukuran */}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;