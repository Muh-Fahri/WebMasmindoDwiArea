import React, { useState, useEffect } from "react";
import NavbarHijau from "../Component/navbarHijau";
import Footer from "./fotter";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

function Magang() {
    const [listMagang, setListMagang] = useState([]);
    const { t, i18n } = useTranslation();

    const getDataKarir = async () => {
        Swal.fire({
            title: "Memuat data...",
            text: "Harap tunggu sebentar",
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/magang");
            setListMagang(res.data.karir);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Gagal Memuat Data",
                text: "Terjadi kesalahan pada server.",
            });
        }
    };

    useEffect(() => {
        getDataKarir();
    }, []);

    const currentLang = i18n.language;

    return (
        <div>
            <NavbarHijau />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 p-5">
                            <div className="row">
                                <div className="col mb-5">
                                    <h1 style={{ color: '#F16022' }}>{t('internship_program')}</h1>
                                </div>
                            </div>
                        </div>

                        {listMagang && listMagang.length > 0 ? (
                            listMagang.map((magang) => (
                                <div className="col-12 p-5" key={magang.uuid}>
                                    <a href={`/karir/detail/${magang.uuid}`} className="text-decoration-none">
                                        <div
                                            className="card rounded-0 shadow-none zoom-card"
                                            style={{
                                                border: 'none',
                                                borderBottom: '2px solid rgb(104, 104, 104)',
                                                transition: 'transform 0.3s ease',
                                            }}
                                        >
                                            <div className="card-body">
                                                <h5 className="text-muted">{magang.nama_perusahaan}</h5>
                                                <p className="fs-2">{currentLang === 'en' ? magang.posisi_en : magang.posisi_id}</p>
                                                <h5 className="text-muted">{currentLang === 'en' ? magang.lokasi_en : magang.lokasi_id}</h5>
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
                                                {t('send_cv_message',)} recruitment@ptmasmindo.co.id
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
export default Magang;
