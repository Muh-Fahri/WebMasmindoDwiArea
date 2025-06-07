import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar() {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };



    return (
        <div>
            <nav
                className="navbar navbar-user navbar-expand-lg"
                style={{
                    backgroundColor: "transparent",
                    position: 'absolute',
                    top: '20px',
                    left: 0,
                    width: '100%',
                    zIndex: 1050,
                }}
            >
                <div className="container-fluid p-5">
                    <div className="row align-items-center justify-content-between w-100">
                        <div className="col-md-2">
                            {/* Pastikan path gambar logo benar */}
                            <Link to="/"><img src="/Image/LoogMasmindo.webp" className="img-fluid navbar-brand w-100 h-auto" alt="Masmindo Logo" /></Link>
                        </div>
                        <div className="col-md-10">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav gap-5 ms-auto">
                                    <li className="nav-item">
                                        <NavLink
                                            to="/tentang"
                                            className={({ isActive }) =>
                                                // Menggunakan kelas nav-a secara default, dan nav-hijau-actv jika aktif
                                                "nav-link nav-a" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                            aria-current="page"
                                        >
                                            {/* UBAH KUNCI TERJEMAHAN DI SINI */}
                                            <h5 className="display-5 fw-medium fs-5 navbar-hijau">{t('about')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/bisnis"
                                            className={({ isActive }) =>
                                                "nav-link nav-a" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            {/* UBAH KUNCI TERJEMAHAN DI SINI */}
                                            <h5 className="display-5 fw-medium fs-5 navbar-hijau">{t('business')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/ESG"
                                            className={({ isActive }) =>
                                                "nav-link nav-a" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            {/* UBAH KUNCI TERJEMAHAN DI SINI */}
                                            <h5 className="display-5 fw-medium fs-5 navbar-hijau">{t('esg')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/berita"
                                            className={({ isActive }) =>
                                                "nav-link nav-a" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            {/* UBAH KUNCI TERJEMAHAN DI SINI */}
                                            <h5 className="display-5 fw-medium fs-5 navbar-hijau">{t('news')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/karir"
                                            className={({ isActive }) =>
                                                "nav-link nav-a" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            {/* UBAH KUNCI TERJEMAHAN DI SINI */}
                                            <h5 className="display-5 fw-medium fs-5 navbar-hijau">{t('career')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/kontak"
                                            className={({ isActive }) =>
                                                "nav-link nav-a" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            {/* UBAH KUNCI TERJEMAHAN DI SINI */}
                                            <h5 className="display-5 fw-medium fs-5 navbar-hijau">{t('contact')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            onClick={() => changeLanguage('en')}
                                            className={`btn btn-link nav-link ${i18n.language === 'en' ? 'nav-hijau-actv' : 'navbar-hijau'}`}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            EN
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            onClick={() => changeLanguage('id')}
                                            className={`btn btn-link nav-link ${i18n.language === 'id' ? 'nav-hijau-actv' : 'navbar-hijau'}`}
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

export default Navbar;