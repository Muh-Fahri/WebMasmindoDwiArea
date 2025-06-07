import React, { useState, useEffect } from "react";
import NavbarProject from "../Component/navbarProject";
import axios from "axios";
import Footer from "./fotter";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

function Bisnis() {
    const { t, i18n } = useTranslation();

    const [bisnisList, setBisnisList] = useState([]);

    useEffect(() => {
        getBisnisData();
        AOS.init({
            duration: 1000,
        });
    }, []);

    const getBisnisData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/bisnis");
            // Pastikan res.data.bisnisUser adalah array dan berisi data yang valid
            // Tambahkan logging untuk memeriksa data yang diterima
            console.log("Data bisnis dari API:", res.data.bisnisUser);
            setBisnisList(res.data.bisnisUser);
        } catch (error) {
            console.error("Error fetching bisnis data:", error); // Log error lebih detail
            alert(t('error_display'));
        }
    }

    return (
        <div>
            <NavbarProject />
            <section>
                <div className="bg-bisnis d-flex align-items-center">
                    <div className="container-fluid p-5" data-aos="fade-right">
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <h1 className="fw-bold text-break"
                                    style={{
                                        fontSize: 'clamp(2rem, 5vw, 5rem)',
                                        color: '#F16022',
                                    }}>
                                    {t('mining_title_part1')} <span style={{ color: "#115258" }}>{t('mining_title_part2')}</span>
                                </h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-white text-break"
                                    style={{
                                        fontSize: 'clamp(2rem, 5vw, 5rem)',
                                    }}>
                                    {t('mining_title_part3')}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid p-5">
                    <div className="row p-3 p-md-5 align-items-start">
                        {/* Gambar */}
                        <div className="col-12 col-md-auto mb-4 mb-md-0" data-aos="fade-right">
                            <img
                                className="img-fluid"
                                src="/Image/AwakMasCol.png"
                                alt="Logo"
                                style={{ width: "300px", height: "auto" }}
                            />
                        </div>

                        {/* Garis */}
                        <div className="d-none d-md-block col-md-auto">
                            <div className="garis-aw-p"></div>
                        </div>

                        {/* Deskripsi */}
                        <div className="col-12 col-md" data-aos="fade-down">
                            {bisnisList.length > 0 ? (
                                bisnisList.map((bisnis) => (
                                    <p style={{ whiteSpace: 'pre-line', textAlign: 'justify' }} key={bisnis.uuid} className="fs-3 fs-md-5">
                                        {i18n.language === 'id' ? bisnis.deskripsi_bisnis_id : bisnis.deskripsi_bisnis_en}
                                    </p>
                                ))
                            ) : (
                                <h5>{t('no_data')}</h5>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mt-5 " data-aos="fade-down" >
                    <div className="row mt-4">
                        {bisnisList.length > 0 ? (
                            <div className="col p-5">
                                {bisnisList.map((bisnis) => ( // <<< Perbaiki di sini (hapus satu kurung kurawal pembuka)
                                    // Hanya render iframe jika link_video tidak null/undefined
                                    bisnis.link_video ? (
                                        <div key={bisnis.uuid} className="responsive-iframe-container">
                                            <iframe
                                                className="rounded-5 shadow-lg"
                                                src={bisnis.link_video}
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    ) : null // Atau tampilkan pesan alternatif jika tidak ada video
                                ))} {/* <<< Perbaiki di sini (hapus satu kurung kurawal penutup) */}
                            </div>
                        ) : (
                            <div className="justify-content-center">
                                <h5>{t('no_data_yet')}</h5>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}
export default Bisnis;