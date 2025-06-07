import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom'; // Import NavLink untuk highlight aktif
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faChartBar, faNewspaper, faTree, faGlobe } from "@fortawesome/free-solid-svg-icons"; // Tambah faGlobe untuk icon bahasa
import { useTranslation } from 'react-i18next'; // Import useTranslation

function NavSide() {
    const [showSidebar, setShowSidebar] = useState(false);
    const { t, i18n } = useTranslation(); // Inisialisasi useTranslation

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div>
            {/* Tombol toggle untuk mobile */}
            <button className="btn btn-dark d-md-none m-2" onClick={() => setShowSidebar(!showSidebar)}>
                ☰ {t('menu_button')} {/* Terjemahkan teks tombol menu */}
            </button>

            {/* Sidebar */}
            <div className={`sidebar bg-dark text-white p-3 ${showSidebar ? 'd-block' : 'd-none'} d-md-block`}
                style={{ width: '250px', height: '100vh', position: 'fixed', zIndex: 1050, overflowY: 'auto' }}> {/* Tambah overflowY */}

                <div className="row justify-content-center">
                    <div className="col-8">
                        {/* Pastikan path gambar logo '/Image/LogoMasmindoGold.webp' benar */}
                        <img className="w-100 img-fluid" src="/Image/LogoMasmindoGold.webp" alt="Logo" />
                    </div>
                </div>
                <ul className="list-unstyled mt-4">
                    <li>
                        {/* Gunakan NavLink untuk highlight halaman aktif */}
                        <NavLink to="/admin" className={({ isActive }) => "text-white text-decoration-none d-block py-2 px-3" + (isActive ? " sidebar-active-link" : " hover-bg")}>
                            <FontAwesomeIcon icon={faHouse} /> {t('dashboard')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/bisnis" className={({ isActive }) => "text-white text-decoration-none d-block py-2 px-3" + (isActive ? " sidebar-active-link" : " hover-bg")}>
                            <FontAwesomeIcon icon={faChartBar} /> {t('business')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/berita" className={({ isActive }) => "text-white text-decoration-none d-block py-2 px-3" + (isActive ? " sidebar-active-link" : " hover-bg")}>
                            <FontAwesomeIcon icon={faNewspaper} /> {t('news')}
                        </NavLink>
                    </li>
                    <li>
                        {/* Span untuk menu induk yang tidak memiliki rute sendiri */}
                        <span className="text-white text-decoration-none d-block py-2 px-3">
                            <FontAwesomeIcon icon={faTree} /> {t('esg')}
                        </span>
                        <ul className="list-unstyled ps-4">
                            <li>
                                <NavLink to="/admin/esg/lingkungan" className={({ isActive }) => "text-white text-decoration-none d-block py-1 px-3" + (isActive ? " sidebar-active-link" : " hover-bg")}>
                                    ▸ {t('environment_esg')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/esg/sosial" className={({ isActive }) => "text-white text-decoration-none d-block py-1 px-3" + (isActive ? " sidebar-active-link" : " hover-bg")}>
                                    ▸ {t('social_esg')}
                                </NavLink>
                            </li>
                            <li>
                                {/* Perhatikan, ini sebelumnya mengarah ke /admin/esg/sosial, saya asumsikan harusnya ke /admin/esg/governance */}
                                <NavLink to="/admin/esg/tata-kelola" className={({ isActive }) => "text-white text-decoration-none d-block py-1 px-3" + (isActive ? " sidebar-active-link" : " hover-bg")}>
                                    ▸ {t('governance_esg')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/laporan_keberlanjutan" className={({ isActive }) => "text-white text-decoration-none d-block py-1 px-3" + (isActive ? " sidebar-active-link" : " hover-bg")}>
                                    ▸ {t('sustainability_report_sidebar')}
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className="text-white text-decoration-none d-block py-2 px-3">
                            <FontAwesomeIcon icon={faTree} /> {t('media')}
                        </span>
                        <ul className="list-unstyled ps-4">
                            <li>
                                <NavLink to="/admin/instagram" className={({ isActive }) => "text-white text-decoration-none d-block py-1 px-3" + (isActive ? " sidebar-active-link" : " hover-bg")}>
                                    ▸ {t('instagram')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/youtube" className={({ isActive }) => "text-white text-decoration-none d-block py-1 px-3" + (isActive ? " sidebar-active-link" : " hover-bg")}>
                                    ▸ {t('youtube')}
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className="text-white text-decoration-none d-block py-2 px-3">
                            <FontAwesomeIcon icon={faTree} /> Galeri
                        </span>
                        <ul className="list-unstyled ps-4">
                            <li>
                                <NavLink to="/admin/galeri" className={({ isActive }) => "text-white text-decoration-none d-block py-1 px-3" + (isActive ? " sidebar-active-link" : " hover-bg")}>
                                    ▸ Dokumentasi
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/youtube" className={({ isActive }) => "text-white text-decoration-none d-block py-1 px-3" + (isActive ? " sidebar-active-link" : " hover-bg")}>
                                    ▸ Video
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>

                {/* Tombol EN dan ID di bagian bawah sidebar */}
                <div className="mt-auto p-3 border-top border-secondary"> {/* mt-auto untuk dorong ke bawah */}
                    <div className="d-flex justify-content-center gap-3">
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`btn btn-sm btn-outline-light ${i18n.language === 'en' ? 'active' : ''}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => changeLanguage('id')}
                            className={`btn btn-sm btn-outline-light ${i18n.language === 'id' ? 'active' : ''}`}
                        >
                            ID
                        </button>
                    </div>
                </div>

            </div >
        </div >
    );
};

export default NavSide;