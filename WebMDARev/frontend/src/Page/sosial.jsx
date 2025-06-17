import React, { useState, useEffect } from "react";
import NavbarHijau from "../Component/navbarHijau";
import { data, NavLink } from "react-router-dom";
import Footer from "./fotter";
import axios from "axios";
import NoData from "../Component/Error/NoData";
import Laporan from "./laporan";
import { duration } from "moment";
import AOS from "aos";
import { useTranslation } from "react-i18next";


function Sosial() {
    const [masyarakatList, setMasyarakatList] = useState([]);
    const [kesehatanList, setKesehatanList] = useState([]);
    const [infraList, setInfraList] = useState([]);
    const [pemberdayaanList, setPemberdayaanList] = useState([]);
    const { t, i18n } = useTranslation();

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        getMasyarakatData();
        getKesehatanData();
        AOS.init({
            duration: 1000,
        })
        getInfrastrukturData();
        getPemberdayaan();
    }, []);



    const getMasyarakatData = async () => {
        setLoading(true);
        setError(null)
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/esg/sosial/pengembanganMasyarakat");
            setMasyarakatList(res.data.sosialMasyarakat);
            getMasyarakatData();
        } catch (error) {
            alert("Gagal Mengambil Data Sosial Masyarakat");
        }
    }

    const getKesehatanData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/esg/sosial/kesehatan");
            setKesehatanList(res.data.sosialKesehatan);
            getKesehatanData();
        } catch (error) {
            alert("Gagal Mengambil Data Sosial Kesehtan");
        }
    }

    const getInfrastrukturData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/esg/sosial/infrastruktur");
            setInfraList(res.data.sosialInfra);
            getInfrastrukturData();
        } catch (error) {
            alert("Gagal Mengambil Data Program Infrastruktur");
        }
    }
    const getPemberdayaan = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/esg/sosial/pemberdayaan");
            setPemberdayaanList(res.data.sosialPemberdayaan);
        } catch (error) {
            alert("Gagal Mengambil Data Program Pemberdayaan Masyarakat");
        }
    }



    return (
        <div>
            <NavbarHijau />
            <section>
                <div className="bg-esg d-flex justify-content-center align-items-end" style={{ minHeight: '100vh' }}>
                    <div className="container mb-5">
                        <div className="row text-center">
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
                                    <NavLink to="/ESG/sosial" className="active-esg text-decoration-none text-center">
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
                <div className="container-fluid p-5">
                    <div className="row" >
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
                    <div className="row" data-aos="fade-down">
                        <div className="col-md-4">
                            <div className="row d-flex justify-content-center p-2">
                                <div className="col-md-8">
                                    <h1 className="display-5 fw-bold" style={{ color: '#F16022' }}>{t('community_dev_program_title_part1')} <span style={{ color: "#115258" }}>{t('community_dev_program_title_part2')}</span></h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto d-none d-sm-block">
                            <div className="garis-esg"></div>
                        </div>
                        <div className="col">
                            <p className="fs-3">{t('community_dev_program_desc')}</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-5">
                    <div className="position-relative">
                        {masyarakatList.length > 0 && (
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
                        )}
                        <div
                            id="dokEsg-slider"
                            className="overflow-auto px-5"
                            style={{ scrollBehavior: "smooth" }}
                        >
                            <div className="d-flex justify-content-center gap-3 flex-nowrap">
                                {
                                    masyarakatList.map((masyarakat) => (
                                        <div
                                            key={masyarakat.uuid}
                                            className="flex-shrink-0 col-lg-6 col-md-8 col-sm-10 col-11"
                                            data-aos="fade-right"
                                            style={{ maxWidth: "600px", minWidth: "300px" }}
                                        >
                                            <div
                                                className="card rounded-5 responsive-height"
                                                style={{ height: "400px", overflow: "hidden" }}
                                            >
                                                <img
                                                    src={`http://127.0.0.1:8000/Sosial/${encodeURIComponent(masyarakat.imageSosial)}`}
                                                    alt="Laporan 2020"
                                                    className="w-100 h-100 object-fit-cover"
                                                />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        {
                            setMasyarakatList.length > 0 && (
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
                            )
                        }
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid p-5">
                    <div className="row" data-aos="fade-down">
                        <div className="col-md-4">
                            <div className="row d-flex justify-content-center p-2">
                                <div className="col-md-8" >
                                    <h1 className="display-5 fw-bold" style={{ color: '#F16022' }}>{t('health_program_title_part1')} <span style={{ color: '#115258' }}>{t('health_program_title_part2')}</span></h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto d-none d-sm-block">
                            <div className="garis-esg"></div>
                        </div>
                        <div className="col">
                            <p className="fs-3">{t('health_program_desc')}</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-5">
                    <div className="position-relative">
                        {kesehatanList.length > 0 && (
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
                        )}
                        <div
                            id="dokEsg-slider"
                            className="overflow-auto px-5"
                            style={{ scrollBehavior: "smooth" }}
                        >
                            <div className="d-flex justify-content-center gap-3 flex-nowrap">
                                {
                                    kesehatanList.length > 0 ? (
                                        kesehatanList.map((kesehatan) => (
                                            <div key={kesehatan.uuid}
                                                className="flex-shrink-0 col-lg-6 col-md-8 col-sm-10 col-11"
                                                data-aos="fade-right"
                                                style={{ maxWidth: "600px" }}>
                                                <div className="card rounded-5 responsive-height"
                                                    style={{ height: "400px", overflow: "hidden" }}>
                                                    <img src={`http://127.0.0.1:8000/Sosial/${encodeURIComponent(kesehatan.imageSosial)}`} alt="Laporan 2020" className="w-100 h-100 object-fit-cover" />
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div></div>
                                    )
                                }
                            </div>
                        </div>

                        {kesehatanList.length > 0 && (
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
                        )}
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid p-5">
                    <div className="row" data-aos="fade-down">
                        <div className="col-md-4">
                            <div className="row d-flex justify-content-center p-2">
                                <div className="col-md-8" >
                                    <h1 className="display-5 fw-bold" style={{ color: '#F16022' }}>{t('infrastructure_program_title_part1')} <span style={{ color: '#115258' }}>{t('infrastructure_program_title_part2')}</span></h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto d-none d-sm-block">
                            <div className="garis-esg"></div>
                        </div>
                        <div className="col">
                            <p className="fs-3">{t('infrastructure_program_desc')}</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-5">
                    <div className="position-relative">
                        {infraList.length > 0 && (
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
                        )}
                        <div
                            id="dokEsg-slider"
                            className="overflow-auto px-5"
                            style={{ scrollBehavior: "smooth" }}
                        >
                            <div className="d-flex justify-content-center gap-3 flex-nowrap">
                                {
                                    infraList.length > 0 ? (
                                        infraList.map((infra) => (
                                            <div
                                                key={infra.uuid}
                                                className="flex-shrink-0 col-lg-6 col-md-8 col-sm-10 col-11"
                                                style={{ maxWidth: "600px" }}
                                                data-aos="fade-right"
                                            >
                                                <div
                                                    className="card rounded-5 responsive-height"
                                                    style={{ height: "400px", overflow: "hidden" }}
                                                >
                                                    <img
                                                        src={`http://127.0.0.1:8000/Sosial/${encodeURIComponent(infra.imageSosial)}`}
                                                        alt="Laporan 2020"
                                                        className="w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div></div>
                                    )
                                }
                            </div>
                        </div>

                        {
                            infraList.length > 0 && (
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
                            )
                        }
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid p-5">
                    <div className="row" data-aos="fade-down">
                        <div className="col-md-4">
                            <div className="row d-flex justify-content-center p-2">
                                <div className="col-md-8">
                                    <h1 className="display-5 fw-bold" style={{ color: '#F16022' }}>
                                        {t('community_empowerment_program_title_part1')} <span style={{ color: '#115258' }}>{t('community_empowerment_program_title_part2')}</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto d-none d-sm-block">
                            <div className="garis-esg"></div>
                        </div>
                        <div className="col">
                            <p className="fs-3">{t('community_empowerment_program_desc')}</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid pt-5 position-relative">
                    {pemberdayaanList.length > 0 && (
                        <button
                            className="btn btn-light position-absolute start-0 top-50 translate-middle-y z-3"
                            style={{ zIndex: 10 }}
                            onClick={() => {
                                document.getElementById("dokEsg-slider")
                                    .scrollBy({ left: -300, behavior: "smooth" });
                            }}
                        >
                            &#10094;
                        </button>
                    )}

                    <div
                        id="dokEsg-slider"
                        className="d-flex gap-3 justify-content-center flex-nowrap overflow-auto px-5"
                        style={{ scrollBehavior: "smooth" }}
                    >
                        {
                            pemberdayaanList.length > 0 ? (
                                pemberdayaanList.map((pemberdayaan) => (
                                    <div
                                        key={pemberdayaan.uuid}
                                        className="flex-shrink-0 col-lg-6 col-md-8 col-sm-10 col-11"
                                        data-aos="fade-right"
                                        style={{ maxWidth: "600px" }}
                                    >
                                        <div
                                            className="card rounded-5 responsive-height"
                                            style={{ height: "400px", overflow: "hidden" }}
                                        >
                                            <img
                                                src={`http://127.0.0.1:8000/Sosial/${encodeURIComponent(pemberdayaan.imageSosial)}`}
                                                alt="Laporan 2020"
                                                className="w-100 h-100"
                                                style={{ objectFit: "cover" }}
                                            />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center w-100">

                                </div>
                            )
                        }
                    </div>

                    {pemberdayaanList.length > 0 && (
                        <button
                            className="btn btn-light position-absolute end-0 top-50 translate-middle-y z-3"
                            style={{ zIndex: 10 }}
                            onClick={() => {
                                document.getElementById("dokEsg-slider")
                                    .scrollBy({ left: 300, behavior: "smooth" });
                            }}
                        >
                            &#10095;
                        </button>
                    )}
                </div>
            </section>
            <section className="pt-5">
                <Footer />
            </section>
        </div >
    )
}
export default Sosial;


