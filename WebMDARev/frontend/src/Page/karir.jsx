import React from "react";
import NavbarProject from "../Component/navbarProject";
import Footer from "./fotter";
import { useTranslation } from "react-i18next";


function Karir() {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <NavbarProject />
            <section>
                <div className="bg-karir d-flex align-items-end" style={{ minHeight: '300px' }}>
                    <div className="container w-100">
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <h1 style={{ color: "#F16022" }} className="text-center mb-5">
                                    {t('career_start_here_title_part1')} <span className="text-white">{t('career_start_here_title_part2')}</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-10 mb-5">
                            <a href="/profesional" className="text-decoration-none">
                                <div className="card zoom-card">
                                    <div
                                        className="bg-card shadow d-flex align-items-center justify-content-center"
                                        style={{
                                            background: `linear-gradient(to right, rgba(1, 50, 51, 0.616), rgba(1, 50, 51, 0.616)), url("/Image/Background/profesional.webp")`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            height: "20vh",
                                            color: "white",
                                            textAlign: "center"
                                        }}
                                    >
                                        <h1 style={{ color: '#F16022' }}>
                                            {t('professional_staff_part1')} <span className="text-white">{t('professional_staff_part2')}</span>
                                        </h1>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-10">
                            <div className="card shadow zoom-card">
                                <a href="/magang" className="text-decoration-none">
                                    <div
                                        className="bg-card d-flex align-items-center justify-content-center"
                                        style={{
                                            background: `linear-gradient(to right, rgba(1, 50, 51, 0.616), rgba(1, 50, 51, 0.616)), url("/Image/Background/bg-test.webp")`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            height: "20vh",
                                            color: "white",
                                            textAlign: "center"
                                        }}
                                    >
                                        <h1 style={{ color: '#F16022' }}>
                                            {t('internship_program_part1')} <span className="text-white">{t('internship_program_part2')}</span>
                                        </h1>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid p-5 mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h5>{t('join_masmindo_title')}</h5>
                            <p>{t('join_masmindo_desc1')}</p>
                            <p>{t('join_masmindo_desc2')}</p>
                            <p>{t('join_masmindo_desc3')}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Karir;