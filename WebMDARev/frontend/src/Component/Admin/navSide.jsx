import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faChartBar, faNewspaper, faTree, faMapMarkerAlt, faImages, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

function NavSide() {
    const [showSidebar, setShowSidebar] = useState(false);
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div>
            <section>
                <button className="btn btn-dark d-md-none m-2" onClick={() => setShowSidebar(!showSidebar)}>
                    ☰ {t('menu_button')}
                </button>
                <div className={`sidebar text-white p-3 ${showSidebar ? 'd-block' : 'd-none'} d-md-block`}
                    style={{ width: '250px', height: '100vh', position: 'fixed', zIndex: 1050, overflowY: 'auto', backgroundColor: '#013233' }}>

                    <div className="row justify-content-center">
                        <div className="col-8">
                            <img
                                className="w-100 img-fluid"
                                src="/Image/AwakMasLogo.png"
                                alt="Logo Masmindo Gold"
                            />
                        </div>
                    </div>
                    <ul className="list-unstyled mt-4">
                        <li>
                            <NavLink
                                to="/admin"
                                end
                                className={({ isActive }) => "text-white text-decoration-none d-block py-2 px-3" + (isActive ? " sidebar-active-link" : " hover-bg")}>
                                <FontAwesomeIcon icon={faHouse} /> {t('dashboard')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/alamat" className={({ isActive }) => "text-white text-decoration-none d-block py-2 px-3" + (isActive ? " sidebar-active-link" : " hover-bg")}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> {t('address')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/karir" className={({ isActive }) => "text-white text-decoration-none d-block py-1 px-3" + (isActive ? " sidebar-active-link" : " hover-bg")}>
                                <FontAwesomeIcon icon={faUserPlus} />{t('karir_navside')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/carousel" className={({ isActive }) => "text-white text-decoration-none d-block py-2 px-3" + (isActive ? " sidebar-active-link" : " hover-bg")}>
                                <FontAwesomeIcon icon={faChartBar} /> {t('carousel')}
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
                                <FontAwesomeIcon icon={faImages} /> {t('media')}
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
                                <FontAwesomeIcon icon={faImages} /> {t('sectionTitle')}
                            </span>
                            <ul className="list-unstyled ps-4">
                                <li>
                                    <NavLink to="/admin/galeri" className={({ isActive }) => "text-white text-decoration-none d-block py-1 px-3" + (isActive ? " sidebar-active-link" : " hover-bg")}>
                                        ▸ {t('documentation')}
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="mt-auto p-3 border-top border-secondary">
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
                </div>
            </section>
        </div >
    );
};

export default NavSide;