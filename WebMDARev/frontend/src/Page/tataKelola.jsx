import React from "react";
import NavbarHijau from "../Component/navbarHijau";
import Laporan from "./laporan";
import { NavLink } from "react-router-dom";
import DOMPurify from 'dompurify';
import { useTranslation } from "react-i18next";
import Footer from "./fotter";



function TataKelola() {


    const { t, i18n } = useTranslation();
    return (
        <div>
            <div>
                <NavbarHijau />
                <section>
                    <div className="bg-esg d-flex justify-content-center align-items-end" style={{ minHeight: '100vh' }}>
                        <div className="container mb-5">
                            <div className="row text-center" data-aos="fade-down">
                                <div className="col p-5">
                                    <h1 className="display-1 fw-bold" style={{ color: "#F16022" }}>ESG</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Laporan />
                </section>
                <section className="p-5" data-aos="zoom-in-up">
                    <div className="container p-5">
                        <div className="row mt-5">
                            <div className="col">
                                <ul className="nav-esg list-unstyled d-flex flex-md-row flex-column align-items-center justify-content-center gap-3 gap-md-5 p-0 m-0">
                                    <li>
                                        <NavLink to="/ESG" className=" text-decoration-none text-center">
                                            <h1 className="text-black fw-light fs-5 fs-md-3">{t('esg_environment_nav')}</h1>
                                            <div className="garis-bawah-esg"></div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/ESG/sosial" className="text-decoration-none text-center">
                                            <h1 className="text-black fw-light fs-5 fs-md-3">{t('esg_social_nav')}</h1>
                                            <div className="garis-bawah-esg"></div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/tata-kelola" className="active-esg text-decoration-none text-center">
                                            <h1 className="text-black fw-light fs-5 fs-md-3">{t('esg_governance_nav')}</h1>
                                            <div className="garis-bawah-esg"></div>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-fluid p-5 px-md-5 px-3">
                        <div className="row">
                            <div className="col p-5 d-none d-sm-block">
                                <img
                                    className="img-fluid rounded-5 w-100"
                                    style={{ maxHeight: "50vh", objectFit: 'cover' }}
                                    src="/Image/Background/CampAwakMasJPEG.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 d-flex justify-content-center">
                                <div
                                    className="card shadow-sm border-0"
                                    style={{
                                        width: "300px",
                                        height: "300px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <img
                                        src="/Image/Background/bg-karir.webp"
                                        alt="Kode Etik"
                                        className="w-100 h-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <h1 className="fw-bold" style={{ color: "#F16022" }}>
                                    Kode Etik
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
                                    voluptatum, repellat impedit minima fuga ut aspernatur. Consectetur
                                    expedita laboriosam, saepe corporis commodi debitis quisquam
                                    reprehenderit consequatur, dolorem eum incidunt? Voluptas dolorem
                                    atque alias laborum! Quod, minus? Repudiandae deserunt cumque
                                    doloribus fuga, nam illo a. Recusandae corrupti quibusdam est eaque
                                    iusto.
                                </p>
                                <a href="#" className="btn btn-secondary rounded-5">
                                    Download PDF
                                </a>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6 d-flex justify-content-center">
                                <div
                                    className="card shadow-sm border-0"
                                    style={{
                                        width: "300px",
                                        height: "300px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <img
                                        src="/Image/Background/bg-karir.webp"
                                        alt="Kode Etik"
                                        className="w-100 h-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <h1 className="fw-bold" style={{ color: "#F16022" }}>
                                    Kebijakan Pelapor
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
                                    voluptatum, repellat impedit minima fuga ut aspernatur. Consectetur
                                    expedita laboriosam, saepe corporis commodi debitis quisquam
                                    reprehenderit consequatur, dolorem eum incidunt? Voluptas dolorem
                                    atque alias laborum! Quod, minus? Repudiandae deserunt cumque
                                    doloribus fuga, nam illo a. Recusandae corrupti quibusdam est eaque
                                    iusto.
                                </p>
                                <a href="#" className="btn btn-secondary rounded-5">
                                    Download PDF
                                </a>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6 d-flex justify-content-center">
                                <div
                                    className="card shadow-sm border-0"
                                    style={{
                                        width: "300px",
                                        height: "300px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <img
                                        src="/Image/Background/bg-karir.webp"
                                        alt="Kode Etik"
                                        className="w-100 h-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <h1 className="fw-bold" style={{ color: "#F16022" }}>
                                    Kebijakan Keberagaman
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
                                    voluptatum, repellat impedit minima fuga ut aspernatur. Consectetur
                                    expedita laboriosam, saepe corporis commodi debitis quisquam
                                    reprehenderit consequatur, dolorem eum incidunt? Voluptas dolorem
                                    atque alias laborum! Quod, minus? Repudiandae deserunt cumque
                                    doloribus fuga, nam illo a. Recusandae corrupti quibusdam est eaque
                                    iusto.
                                </p>
                                <a href="#" className="btn btn-secondary rounded-5">
                                    Download PDF
                                </a>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6 d-flex justify-content-center">
                                <div
                                    className="card shadow-sm border-0"
                                    style={{
                                        width: "300px",
                                        height: "300px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <img
                                        src="/Image/Background/bg-karir.webp"
                                        alt="Kode Etik"
                                        className="w-100 h-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <h1 className="fw-bold" style={{ color: "#F16022" }}>
                                    Kebijakan Anti Suap dan Anti Korupsi
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
                                    voluptatum, repellat impedit minima fuga ut aspernatur. Consectetur
                                    expedita laboriosam, saepe corporis commodi debitis quisquam
                                    reprehenderit consequatur, dolorem eum incidunt? Voluptas dolorem
                                    atque alias laborum! Quod, minus? Repudiandae deserunt cumque
                                    doloribus fuga, nam illo a. Recusandae corrupti quibusdam est eaque
                                    iusto.
                                </p>
                                <a href="#" className="btn btn-secondary rounded-5">
                                    Download PDF
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-5">
                    <Footer />
                </section>
            </div>
        </div>
    )
}

export default TataKelola;