import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarHijau from "../Component/navbarHijau";
import Footer from "./fotter";
import AOS from "aos";
import { NavLink } from "react-router-dom";
import Laporan from "./laporan";
import { useTranslation } from "react-i18next";
import DOMPurify from 'dompurify';



function ESG() {

    const [deskripLingkunganList, setDeskripLingkunganList] = useState([]);
    const [imgLingList, setImgLingList] = useState([]);
    const [isLoadingDeskripLingkungan, setIsLoadingDeskripLingkungan] = useState(true); // <--- TAMBAHKAN INI
    const [isLoadingImgLing, setIsLoadingImgLing] = useState(true);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        getdeskripLingkungan();
        getImgLingData();
        AOS.init({
            duration: 1000,
        });
    }, []);
    const getdeskripLingkungan = async () => {
        console.log("getdeskripLingkungan: Memulai fetch...");
        setIsLoadingDeskripLingkungan(true);
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/esg/lingkungan/deskripLingkungan");
            setDeskripLingkunganList(res.data.deskripLingkunan);
        } catch (error) {
            console.error("Error Pada Pengambilan Data Deskripsi Lingkungan:", error);
            alert(t("error_fetch_description"));
            setDeskripLingkunganList([]);
        } finally {
            console.log("getdeskripLingkungan: Selesai fetch. isLoadingDeskripLingkungan diset ke false.");
            setIsLoadingDeskripLingkungan(false);
        }
    }
    const getImgLingData = async () => {
        try {
            setIsLoadingImgLing(true);
            const res = await axios.get("http://127.0.0.1:8000/api/user/esg/lingkungan/imgLingkungan");
            setImgLingList(res.data.imgLing);
        } catch (error) {
            alert(t("error_fetch_images"));
            setImgLingList([]);
        } finally {
            setIsLoadingImgLing(false);
        }
    }

    return (
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
                                    <NavLink to="/ESG" className="active-esg text-decoration-none text-center">
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
                                    <NavLink to="/tata-kelola" className="text-decoration-none text-center">
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
                    <div className="row" data-aos="fade-right">
                        <div className="col p-5 d-none d-sm-block">
                            <img
                                className="img-fluid rounded-5 w-100"
                                style={{ maxHeight: "50vh", objectFit: 'cover' }}
                                src="/Image/Background/CampAwakMasJPEG.jpg"
                                alt=""
                            />
                        </div>
                        <div className="d-block d-sm-none">
                            <img
                                className="img-fluid rounded-5 w-100 h-auto"
                                src="/Image/Background/CampAwakMasJPEG.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="row">
                        {isLoadingDeskripLingkungan ? (
                            <div className="col-12 text-center py-5">
                                <h5>{t('loading_data')}</h5>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <>
                                {deskripLingkunganList.length > 0 ? (
                                    <>
                                        <div className="col-auto">
                                            <div className="row d-flex justify-content-center p-5">
                                                <div className="col-md-5" data-aos="fade-right">
                                                    <h1 className="display-5 fw-bold">
                                                        <span style={{ color: '#F16022' }}>{t('environmental_policy_title_part1')}</span>{' '}
                                                        <span style={{ color: '#115258' }}>{t('environmental_policy_title_part2')}</span>
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-auto d-none d-sm-block">
                                            <div className="garis-esg"></div>
                                        </div>

                                        <div className="col" data-aos="fade-down">
                                            {deskripLingkunganList.map((deskripLing) => (
                                                <div className="col" key={deskripLing.uuid}>
                                                    <p
                                                        style={{ whiteSpace: 'pre-line' }}
                                                        className="deskripsi-lingkungan"
                                                        dangerouslySetInnerHTML={{
                                                            __html: i18n.language === 'id'
                                                                ? DOMPurify.sanitize(deskripLing.deskripsi_halaman_id)
                                                                : DOMPurify.sanitize(deskripLing.deskripsi_halaman_en)
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <div className="col-12 text-center py-5">
                                        <h5 className="text-muted">{t('data_empty')}</h5>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </section>
            <section className="pt-5" data-aos="fade-right">
                <div className="container-fluid" data-aos="fade-right">
                    {imgLingList.length > 0 ? (
                        <div className="position-relative">
                            <button
                                className="btn btn-light position-absolute start-0 top-50 translate-middle-y z-3"
                                onClick={() => {
                                    document
                                        .getElementById("dokEsg-slider")
                                        .scrollBy({ left: -300, behavior: "smooth" });
                                }}
                            >
                                &#10094;
                            </button>

                            <div
                                id="dokEsg-slider"
                                className="overflow-auto px-5"
                                style={{ scrollBehavior: "smooth" }}
                            >
                                <div className="d-flex justify-content-center gap-3 flex-nowrap">
                                    {imgLingList.map((imgLing) => (
                                        <div
                                            className="flex-shrink-0 col-lg-6 col-md-8 col-sm-10 col-11"
                                            style={{ maxWidth: "600px" }}
                                            key={imgLing.uuid}
                                        >
                                            <div
                                                className="card rounded-5 responsive-height"
                                                style={{ height: "400px", overflow: "hidden" }}
                                            >
                                                <img
                                                    src={`http://localhost:8000/Lingkungan/${imgLing.image_lingkungan}`}
                                                    alt="Dokumen Lingkungan"
                                                    className="w-100 h-100 object-fit-cover"
                                                    style={{ objectFit: "cover" }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                className="btn btn-light position-absolute end-0 top-50 translate-middle-y z-3"
                                onClick={() => {
                                    document
                                        .getElementById("dokEsg-slider")
                                        .scrollBy({ left: 300, behavior: "smooth" });
                                }}
                            >
                                &#10095;
                            </button>
                        </div>
                    ) : (
                        <div className="text-center py-5">
                            <h5></h5>
                        </div>
                    )}
                </div>
            </section>
            <section className="pt-5">
                <Footer />
            </section>
        </div>
    )
}

export default ESG;