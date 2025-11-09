import React, { useState, useEffect } from "react";
import NavbarHijau from "../Component/navbarHijau";
import Footer from "./fotter";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

function Profesional() {
    const [listProfesional, setListProfesional] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { t, i18n } = useTranslation();

    const getDataKarir = async () => {
        Swal.fire({
            title: 'Memuat data...',
            text: 'Harap tunggu sebentar',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/karir");
            setListProfesional(res.data.karir);
            Swal.close();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal memuat data',
                text: error.message,
            });
        }
    };

    useEffect(() => {
        getDataKarir();
    }, []);

    const lang = i18n.language;

    return (
        <div>
            <NavbarHijau />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 p-5">
                            <div className="row">
                                <div className="col mb-5">
                                    <h1 style={{ color: '#F16022' }}>{t('professional_staff')}</h1>
                                </div>
                            </div>
                        </div>

                        {listProfesional && listProfesional.length > 0 ? (
                            listProfesional.map((profesi) => (
                                <div className="col-12 p-5" key={profesi.uuid}>
                                    <a href={`/karir/detail/${profesi.uuid}`} className="text-decoration-none">
                                        <div
                                            className="card rounded-0 shadow-none zoom-card"
                                            style={{
                                                border: 'none',
                                                borderBottom: '2px solid rgb(104, 104, 104)',
                                                transition: 'transform 0.3s ease',
                                            }}
                                        >
                                            <div className="card-body">
                                                <h5 className="text-muted">{profesi.nama_perusahaan}</h5>
                                                <p className="fs-2">{profesi[`posisi_${lang}`]}</p>
                                                <h5 className="text-muted">{profesi[`lokasi_${lang}`]}</h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))
                        ) : (
                            <h5 className="text-muted text-center">{t('no_data_magang')}</h5>
                        )}
                    </div>

                    <div className="row p-5">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <p className="text-center m-0 p-0">
                                                {t('send_cv_message')} <strong>recruitment@ptmasmindo.co.id</strong>
                                            </p>
                                        </div>
                                    </div>
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
    );
}

export default Profesional;