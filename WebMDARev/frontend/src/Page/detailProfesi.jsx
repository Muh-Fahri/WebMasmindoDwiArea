import React, { useState, useEffect } from "react";
import NavbarHijau from "../Component/navbarHijau";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DOMPurify from "dompurify";
import Swal from "sweetalert2";

function DetailProfesi() {
    const [profesiDet, setProfesiDet] = useState(null);
    const { uuid } = useParams();
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    const getDataKarirDetail = async () => {
        Swal.fire({
            title: 'Memuat data...',
            text: 'Harap tunggu sebentar',
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading(),
        });
        try {
            const res = await axios.get(`http://127.0.0.1:8000/api/user/karir/selengkapnya/${uuid}`);
            setProfesiDet(res.data.karir);
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
        getDataKarirDetail();
    }, [uuid]);

    // Render null sampai data siap
    if (!profesiDet) return null;

    return (
        <div>
            <NavbarHijau />
            <section>
                <div className="container p-5">
                    <div className="row">
                        <div className="col mb-5">
                            <h5>{t('about_job')} {profesiDet[`posisi_${lang}`]}</h5>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(profesiDet[`deskripsi_${lang}`] || `<p>${t('no_description')}</p>`)
                                }}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <p>{t('job_requirements')}</p>
                            </div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(profesiDet[`syarat_${lang}`] || `<p>${t('no_requirements')}</p>`)
                                }}
                            />
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col">
                            <p>{t('deadline')}: {profesiDet.deadline || t('not_specified')}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <p className="m-0 p-0">
                                        {t('send_cv')} <strong>rekruitment@masmindo.co.id</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DetailProfesi;
