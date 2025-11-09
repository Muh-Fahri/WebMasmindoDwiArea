import React, { useEffect, useState } from "react";
import NavbarHijau from "../Component/navbarHijau";
import Laporan from "./laporan";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "./fotter";
import axios from "axios";
import Swal from "sweetalert2";




function TataKelola() {
    const [kodeEtikList, setKodeEtik] = useState([]);
    const [kebijakanPelaporList, setKebijakanPelapor] = useState([]);
    const [keberagamanList, setKeberagaman] = useState([]);
    const [antiSuapList, setAntiSuap] = useState([]);



    const getAllDataTataKelola = async () => {
        Swal.fire({
            title: 'Memuat data...',
            text: 'Harap tunggu sebentar',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
        try {
            const [kebPelaporRes, kodeEtikRes, keberagamanRes, antiSuapRes] = await Promise.all([
                axios.get('http://127.0.0.1:8000/api/user/tataKelola/kebijakanPelapor'),
                axios.get('http://127.0.0.1:8000/api/user/tataKelola/kodeEtik'),
                axios.get('http://127.0.0.1:8000/api/user/tataKelola/kebijakanKeberagaman'),
                axios.get('http://127.0.0.1:8000/api/user/tataKelola/antiSuap'),
            ]);
            setKebijakanPelapor(kebPelaporRes.data.kebijakanPelapor);
            setKodeEtik(kodeEtikRes.data.kodeEtik);
            setKeberagaman(keberagamanRes.data.keberagaman);
            setAntiSuap(antiSuapRes.data.antiSuap);
            Swal.close();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal memuat data',
                text: error.message,
            });
            setAntiSuap([]);
            setKeberagaman([]);
            setKebijakanPelapor([]);
            setKodeEtik([]);
        }
    }


    useEffect(() => {
        getAllDataTataKelola();
    }, [])

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
                                    src="/Image/Background/bg-mda.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        {kodeEtikList.length > 0 ? (
                            kodeEtikList.map((item) => (
                                <div className="row align-items-center mb-5" key={item.id}>
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <div
                                            className="card shadow-sm border-0"
                                            style={{ width: "300px", height: "300px", overflow: "hidden" }}
                                        >
                                            <img
                                                src={`http://127.0.0.1:8000/TataKelola/image/${item.fotoSampul}`}
                                                alt={item.category}
                                                className="w-100 h-100"
                                                style={{ objectFit: "cover" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h1 className="fw-bold" style={{ color: "#F16022" }}>
                                            {item.category === 'kodeEtik' ? 'Kode Etik' : item.category}
                                        </h1>
                                        <p
                                            dangerouslySetInnerHTML={{ __html: item.deskripKebijakan }}
                                        />

                                        <a
                                            href={`http://127.0.0.1:8000/TataKelola/pdf/${item.pdf}`}
                                            className="btn btn-secondary rounded-5 border-0 shadow-none"
                                            target="_blank"
                                            style={{ backgroundColor: '#F16022' }}
                                        >
                                            {t('lihat_pdfButton')}
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="row">
                                <div className="col">

                                </div>
                            </div>
                        )}




                        {/* kebijakan pelapor */}
                        {kebijakanPelaporList.length > 0 ? (
                            kebijakanPelaporList.map((lapor) => (
                                <div className="row align-items-center mb-5">
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
                                                src={`http://127.0.0.1:8000/TataKelola/image/${lapor.fotoSampul}`}
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
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: lapor.deskripKebijakan
                                            }}
                                        />
                                        <a href={`http://127.0.0.1:8000/TataKelola/pdf/${lapor.pdf}`} className="btn btn-secondary rounded-5 shadow-none border-0" style={{ backgroundColor: '#F16022' }}>
                                            Lihat PDF
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="row">
                                <div className="col">
                                </div>
                            </div>
                        )}

                        {/* kebijakan keberagaman */}
                        {keberagamanList.length > 0 ? (
                            keberagamanList.map((keberagaman) => (
                                <div className="row align-items-center mb-5">
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
                                                src={`http://127.0.0.1:8000/TataKelola/image/${keberagaman.fotoSampul}`}
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
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: keberagaman.deskripKebijakan
                                            }}
                                        />
                                        <a href={`http://127.0.0.1:8000/TataKelola/pdf/${keberagaman.pdf}`} className="btn btn-secondary rounded-5 shadow-none border-0" style={{ backgroundColor: '#F16022' }}>
                                            Lihat PDF
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="row">
                                <div className="col">

                                </div>
                            </div>
                        )}


                        {/* Kebijakan anti suap dan anti korupsi */}
                        {antiSuapList.length > 0 ? (
                            antiSuapList.map((antiSuap) => (
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
                                                src={`http://127.0.0.1:8000/TataKelola/image/${antiSuap.fotoSampul}`}
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
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: antiSuap.deskripKebijakan
                                            }}
                                        />
                                        <a href={`http://127.0.0.1:8000/TataKelola/pdf/${antiSuap.pdf}`} className="btn btn-secondary rounded-5 shadow-none border-0" style={{ backgroundColor: '#F16022' }}>
                                            Lihat PDF
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="row">
                                <div className="col">

                                </div>
                            </div>
                        )}
                    </div>
                </section>
                <section className="pt-5">
                    <Footer />
                </section>
            </div >
        </div >
    )
}

export default TataKelola;