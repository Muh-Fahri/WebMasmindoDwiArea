import React from "react";
import { Link } from "react-router-dom";



function Navbar() {

    return (

        <div>
            <nav className="navbar navbar-user navbar-expand-lg fixed-top ">
                <div className="container-fluid p-5">
                    <div className="row align-items-center justify-content-between w-100">
                        <div className="col-md-2">
                            <Link to="/" ><img src="/Image/LoogMasmindo.webp" className="img-fluid navbar-brand w-100 h-auto" alt="Logo" /></Link>
                        </div>
                        <div className="col-md-10">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav gap-5 ms-auto"> {/* Tambah margin start (ms-4) */}
                                    <li className="nav-item">
                                        <a className="nav-link nav-a" aria-current="page" href="tentang">
                                            <h5 className="display-5 fw-medium fs-5">Tentang</h5>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link nav-a" href="bisnis">
                                            <h5 className="display-5 fw-medium fs-5">Bisnis</h5>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link nav-a" href="ESG">
                                            <h5 className="display-5 fw-medium fs-5">ESG</h5>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link nav-a" href="berita">
                                            <h5 className="display-5 fw-medium fs-5">Berita</h5>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link nav-a" href="">
                                            <h5 className="display-5 fw-medium fs-5">Karir</h5>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link nav-a" href="#">
                                            <h5 className="display-5 fw-medium fs-5">Kontak</h5>
                                        </a>
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
