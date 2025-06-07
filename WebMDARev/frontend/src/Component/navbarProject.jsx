import React from "react";
import { Link, NavLink } from "react-router-dom"; // <<< Import NavLink
import { useTranslation } from 'react-i18next'; // <<< Import useTranslation hook

function NavbarProject() {
    const { t, i18n } = useTranslation(); // Dapatkan fungsi t dan instance i18n

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Fungsi untuk mengubah bahasa
    };

    return (
        <div>
            {/* Ubah ini jika Anda ingin navbar ini fixed/absolute seperti contoh sebelumnya */}
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#115258" }}>
                <div className="container-fluid p-5">
                    <div className="row align-items-center w-100">
                        <div className="col-md-2">
                            <Link to="/">
                                <img src="/Image/MasmindoWhiteTxt.png" className="img-fluid navbar-brand w-100 h-auto" alt="Masmindo Logo" />
                            </Link>
                        </div>
                        <div className="col-auto">
                            <div className="garis-nav"></div> {/* Pastikan gaya untuk ini ada di CSS Anda */}
                        </div>
                        <div className="col-md-1">
                            <Link to="/">
                                <img src="/Image/AwakMasLogo.png" className="img-fluid navbar-brand w-100 h-auto" alt="AwakMas Logo" />
                            </Link>
                        </div>
                        <div className="col-md-auto ms-auto"> {/* Mengubah col-md-10 menjadi col-md-auto untuk penyesuaian lebar */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav gap-5"> {/* Menghilangkan ms-auto di sini karena sudah di col-md-auto */}
                                    <li className="nav-item">
                                        <NavLink
                                            to="/tentang"
                                            className={({ isActive }) =>
                                                "nav-link" + (isActive ? " nav-hijau-actv" : " text-white")
                                            }
                                            aria-current="page"
                                        >
                                            <h5 className="display-5 fw-medium fs-5">{t('about')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/bisnis"
                                            className={({ isActive }) =>
                                                "nav-link" + (isActive ? " nav-hijau-actv" : " text-white")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5">{t('business')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/ESG"
                                            className={({ isActive }) =>
                                                "nav-link" + (isActive ? " nav-hijau-actv" : " text-white")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5">{t('esg')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/berita"
                                            className={({ isActive }) =>
                                                "nav-link" + (isActive ? " nav-hijau-actv" : " text-white")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5">{t('news')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/karir"
                                            className={({ isActive }) =>
                                                "nav-link" + (isActive ? " nav-hijau-actv" : " text-white")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5">{t('career')}</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/kontak"
                                            className={({ isActive }) =>
                                                "nav-link" + (isActive ? " nav-hijau-actv" : " text-white")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5">{t('contact')}</h5>
                                        </NavLink>
                                    </li>

                                    {/* Tombol Pengganti Bahasa */}
                                    <li className="nav-item ms-3">
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

export default NavbarProject;