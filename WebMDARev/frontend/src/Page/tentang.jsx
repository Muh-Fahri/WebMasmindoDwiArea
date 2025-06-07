import React, { useEffect } from "react";
import NavbarHijau from "../Component/navbarHijau";
import Footer from "./fotter";
import AOS from "aos";
import { useTranslation } from "react-i18next";


function Tentang() {

    const { t, i18n } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
    }, []);

    return (
        <div>
            <NavbarHijau />
            <section>
                <div className="img-tentang d-flex align-items-center">
                    <div className="container" data-aos="fade-down">
                        <div className="row">
                            <div className="col txt-bg-tentang">
                                <h1 className="text-white display-2">{t('ready_to_be')}</h1>
                                <h1 className="display-2 fw-bold" style={{ color: "#B9A34B" }}>{t('produser_emas')}</h1>
                                <h1 className="text-white display-2">{t('leading')}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid p-5 px-3 px-md-5">
                    <div className="row">
                        <div className="col p-3 p-md-5" data-aos="fade-right">
                            <div className="row">
                                <div className="col">
                                    <h3 className="text-md-start text-center d-none d-md-block">{t('mda_spirit_contribution')}</h3>
                                    <h3 className="text-center d-md-none fs-6">{t('mda_spirit_contribution')}</h3>

                                    <h1
                                        className="text-uppercase fw-bold display-3 d-none d-md-block"
                                        style={{ color: "#B9A34B" }}
                                    >
                                        {t('golden_indonesia')}
                                    </h1>
                                    <h1
                                        className="text-uppercase fw-bold fs-3 text-center d-md-none"
                                        style={{ color: "#B9A34B" }}
                                    >
                                        {t('golden_indonesia')}
                                    </h1>
                                </div>
                            </div>

                            <div className="row mt-4 mt-md-5">
                                <div className="col">
                                    {/* Desktop Paragraph */}
                                    <p className="fs-4 d-none d-md-block">
                                        {t('mda_project_desc')}
                                    </p>

                                    {/* Mobile Paragraph */}
                                    <p className="fs-6 d-md-none text-center">
                                        {t('mda_project_desc')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ backgroundColor: "#B9A34B" }}>
                <div className="container-fluid p-5">
                    <div className="row">
                        <div className="col p-5" data-aos="fade-down">

                            {/* Desktop besar */}
                            <div className="d-none d-lg-flex row">
                                <div className="col-lg-4 p-3 text-start">
                                    <h1 className="text-white display-3 fw-bold m-0">
                                        {t('best_mining_practices_title')}
                                    </h1>
                                </div>
                                <div className="col-lg-8 p-3">
                                    <p className="fs-4 text-white">
                                        {t('best_mining_practices_desc')}
                                    </p>
                                </div>
                            </div>

                            {/* Tablet dan mobile */}
                            <div className="d-lg-none">
                                <h3 className="text-white fw-bold mb-3 text-start">
                                    {t('best_mining_practices_title')}
                                </h3>
                                <p className="text-white text-start">
                                    {t('best_mining_practices_desc')}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid p-5" style={{ backgroundColor: '#f8f9fa' }}>
                    <div className="container">
                        {/* Teks judul - lebarnya sama dengan cards */}
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-9">
                                <h5 className="fw-semibold text-secondary">
                                    {t('vision_mission_values')}
                                </h5>
                            </div>
                        </div>

                        {/* Cards */}
                        <div className="row justify-content-center g-4">
                            <div className="col-md-4">
                                <div
                                    className="card p-4 rounded-5 h-100"
                                    data-aos="fade-right"
                                    style={{ backgroundColor: '#115258' }}
                                >
                                    <h1 className="text-white display-6 fw-bold text-uppercase mb-3">
                                        {t('vision_title')}
                                    </h1>
                                    <p className="text-white fs-6">
                                        {t('vision_desc')}
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div
                                    className="card p-4 rounded-5 h-100"
                                    data-aos="fade-down"
                                    style={{ backgroundColor: '#115258' }}
                                >
                                    <h1 className="text-white display-6 fw-bold text-uppercase mb-3">
                                        {t('mission_title')}
                                    </h1>
                                    <p className="text-white fs-6 mb-0">
                                        {t('mission_intro')}
                                        <ul className="ps-3 mt-2">
                                            <li>{t('mission_point1')}</li>
                                            <li>{t('mission_point2')}</li>
                                            <li>{t('mission_point3')}</li>
                                            <li>{t('mission_point4')}</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
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
export default Tentang;