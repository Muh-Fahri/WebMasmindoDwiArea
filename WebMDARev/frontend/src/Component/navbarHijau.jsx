import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";


function NavbarHijau() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (

        <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#115258" }}>
                <div className="container-fluid p-5">
                    <div className="row align-items-center justify-content-between w-100">
                        <div className="col-md-2">
                            {/* Link ke homepage tetap pakai Link biasa */}
                            {/* Pastikan path gambar logo '/Image/MasmindoWhiteTxt.png' benar */}
                            <Link to="/" ><img src="/Image/MasmindoWhiteTxt.png" className="img-fluid navbar-brand w-100 h-auto" alt="Masmindo Logo" /></Link>
                        </div>
                        <div className="col-md-10">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                {/* Ganti warna ikon toggler agar terlihat di latar belakang gelap jika perlu */}
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                {/* ms-auto untuk mendorong menu ke kanan */}
                                <ul className="navbar-nav gap-5 ms-auto">
                                    <li className="nav-item">
                                        <NavLink
                                            to="/tentang"
                                            className={({ isActive }) =>
                                                // Tambahkan text-white default, dan nav-hijau-actv jika aktif
                                                "nav-link text-white" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                            aria-current="page"
                                        >
                                            {/* PERBAIKAN KUNCI TERJEMAHAN: dari 'nav_about' menjadi 'about' */}
                                            <h5 className="display-5 fw-medium fs-5">{t('about')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/bisnis"
                                            className={({ isActive }) =>
                                                "nav-link text-white" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            {/* PERBAIKAN KUNCI TERJEMAHAN: dari 'nav_business' menjadi 'business' */}
                                            <h5 className="display-5 fw-medium fs-5">{t('business')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/ESG"
                                            className={({ isActive }) =>
                                                "nav-link text-white" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            {/* PERBAIKAN KUNCI TERJEMAHAN: dari 'nav_esg' menjadi 'esg' */}
                                            <h5 className="display-5 fw-medium fs-5">{t('esg')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/berita"
                                            className={({ isActive }) =>
                                                "nav-link text-white" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            {/* PERBAIKAN KUNCI TERJEMAHAN: dari 'nav_news' menjadi 'news' */}
                                            <h5 className="display-5 fw-medium fs-5">{t('news')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/karir"
                                            className={({ isActive }) =>
                                                "nav-link text-white" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            {/* PERBAIKAN KUNCI TERJEMAHAN: dari 'nav_career' menjadi 'career' */}
                                            <h5 className="display-5 fw-medium fs-5">{t('career')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/kontak"
                                            className={({ isActive }) =>
                                                "nav-link text-white" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            {/* PERBAIKAN KUNCI TERJEMAHAN: dari 'nav_contact' menjadi 'contact' */}
                                            <h5 className="display-5 fw-medium fs-5">{t('contact')}</h5>
                                        </NavLink>
                                    </li>
                                    {/* Tombol ganti bahasa juga menggunakan text-white default */}
                                    <li className="nav-item">
                                        <button
                                            onClick={() => changeLanguage('en')}
                                            className={`btn btn-link nav-link ${i18n.language === 'en' ? 'nav-hijau-actv' : 'text-white'}`}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            EN
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            onClick={() => changeLanguage('id')}
                                            className={`btn btn-link nav-link ${i18n.language === 'id' ? 'nav-hijau-actv' : 'text-white'}`}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            ID
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarHijau;
