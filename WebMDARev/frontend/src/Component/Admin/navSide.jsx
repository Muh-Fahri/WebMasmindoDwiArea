import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faChartBar, faNewspaper, faTree } from "@fortawesome/free-solid-svg-icons";


function NavSide() {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div>
            <button className="btn btn-dark d-md-none m-2" onClick={() => setShowSidebar(!showSidebar)}>
                ☰ Menu
            </button>

            {/* Sidebar */}
            <div className={`sidebar bg-dark text-white p-3 ${showSidebar ? 'd-block' : 'd-none'} d-md-block`}
                style={{ width: '250px', height: '100vh', position: 'fixed', zIndex: 1050 }}>

                <div className="row justify-content-center">
                    <div className="col-8">
                        <img className="w-100 img-fluid" src="/Image/LogoMasmindoGold.webp" alt="Logo" />
                    </div>
                </div>
                <ul className="list-unstyled mt-4">
                    <li>
                        <Link to="/admin" className="text-white text-decoration-none d-block py-2 px-3 hover-bg">
                            <FontAwesomeIcon icon={faHouse} /> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/bisnis" className="text-white text-decoration-none d-block py-2 px-3 hover-bg">
                            <FontAwesomeIcon icon={faChartBar} /> Bisnis
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/berita" className="text-white text-decoration-none d-block py-2 px-3 hover-bg">
                            <FontAwesomeIcon icon={faNewspaper} /> Berita
                        </Link>
                    </li>
                    <li>
                        <span className="text-white text-decoration-none d-block py-2 px-3">
                            <FontAwesomeIcon icon={faTree} /> ESG
                        </span>
                        <ul className="list-unstyled ps-4">
                            <li>
                                <Link to="/admin/esg/lingkungan" className="text-white text-decoration-none d-block py-1 px-3 hover-bg">
                                    ▸ Lingkungan
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/esg/sosial" className="text-white text-decoration-none d-block py-1 px-3 hover-bg">
                                    ▸ Sosial
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/esg/sosial" className="text-white text-decoration-none d-block py-1 px-3 hover-bg">
                                    ▸ Tata Kelola
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/laporan_keberlanjutan" className="text-white text-decoration-none d-block py-1 px-3 hover-bg">
                                    ▸ Laporan
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className="text-white text-decoration-none d-block py-2 px-3">
                            <FontAwesomeIcon icon={faTree} /> Media
                        </span>
                        <ul className="list-unstyled ps-4">
                            <li>
                                <Link to="/admin/instagram" className="text-white text-decoration-none d-block py-1 px-3 hover-bg">
                                    ▸ Instagram
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/youtube" className="text-white text-decoration-none d-block py-1 px-3 hover-bg">
                                    ▸ Youtube
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div >
        </div >
    );
};

export default NavSide;