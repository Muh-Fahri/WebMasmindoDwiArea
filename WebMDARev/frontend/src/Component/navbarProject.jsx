import React from "react";
import { Link } from "react-router-dom";

function NavbarProject() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#115258" }}>
                <div className="container-fluid p-5">
                    <div className="row align-items-center  w-100">
                        <div className="col-md-2">
                            <Link to="/" ><img src="/Image/MasmindoWhiteTxt.png" className="img-fluid navbar-brand w-100 h-auto" alt="Logo" /></Link>
                        </div>
                        <div className="col-auto">
                            <div className="garis-nav"></div>
                        </div>
                        <div className="col-md-1">
                            <Link to="/" ><img src="/Image/AwakMasLogo.webp" className="img-fluid navbar-brand w-100 h-auto" alt="Logo" /></Link>
                        </div>
                        <div className="col-md-10 ms-auto">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav gap-5 ms-auto"> {/* Tambah margin start (ms-4) */}
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="tentang">
                                            <h5 className="display-5 fw-medium fs-5 text-white">Tentang</h5>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="bisnis">
                                            <h5 className="display-5 fw-medium fs-5 text-white">Bisnis</h5>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="ESG">
                                            <h5 className="display-5 fw-medium fs-5 text-white">ESG</h5>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="berita">
                                            <h5 className="display-5 fw-medium fs-5 text-white">Berita</h5>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">
                                            <h5 className="display-5 fw-medium fs-5 text-white">Karir</h5>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <h5 className="display-5 fw-medium fs-5 text-white">Kontak</h5>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarProject;