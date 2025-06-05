import React from "react";
import { Link, NavLink } from "react-router-dom";



function NavbarHijau() {

    return (

        <div>
            <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#115258" }}>
                <div className="container-fluid p-5">
                    <div className="row align-items-center justify-content-between w-100">
                        <div className="col-md-2">
                            {/* Link ke homepage tetap pakai Link biasa */}
                            <Link to="/" ><img src="/Image/MasmindoWhiteTxt.png" className="img-fluid navbar-brand w-100 h-auto" alt="Logo" /></Link>
                        </div>
                        <div className="col-md-10">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                {/* ms-auto untuk mendorong menu ke kanan */}
                                <ul className="navbar-nav gap-5 ms-auto">
                                    <li className="nav-item">
                                        {/* Gunakan NavLink dengan `activeClassName` (untuk React Router v5) atau `className` prop (untuk React Router v6) */}
                                        {/* Untuk React Router v6, className menerima fungsi yang mengembalikan string */}
                                        <NavLink
                                            to="/tentang"
                                            className={({ isActive }) =>
                                                "nav-link" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                            aria-current="page"
                                        >
                                            <h5 className="display-5 fw-medium fs-5 text-white">Tentang</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/bisnis"
                                            className={({ isActive }) =>
                                                "nav-link" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5 text-white">Bisnis</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/ESG"
                                            className={({ isActive }) =>
                                                "nav-link" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5 text-white">ESG</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/berita"
                                            className={({ isActive }) =>
                                                "nav-link" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5 text-white">Berita</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        {/* Perhatikan: Anda memiliki href kosong untuk Karir, pastikan ini mengarah ke path yang benar */}
                                        <NavLink
                                            to="/karir"
                                            className={({ isActive }) =>
                                                "nav-link" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5 text-white">Karir</h5>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        {/* Perhatikan: Anda memiliki href kosong untuk Kontak, pastikan ini mengarah ke path yang benar */}
                                        <NavLink
                                            to="/kontak"
                                            className={({ isActive }) =>
                                                "nav-link" + (isActive ? " nav-hijau-actv" : "")
                                            }
                                        >
                                            <h5 className="display-5 fw-medium fs-5 text-white">Kontak</h5>
                                        </NavLink>
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
