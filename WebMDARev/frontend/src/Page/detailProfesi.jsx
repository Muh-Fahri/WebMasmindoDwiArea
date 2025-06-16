import React, { useState, useEffect } from "react";
import NavbarHijau from "../Component/navbarHijau";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DOMPurify from "dompurify";

function DetailProfesi() {
    const [profesiDet, setProfesiDet] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { uuid } = useParams();
    const { t, i18n } = useTranslation();

    const getDataKarirDetail = async () => {
        try {
            setIsLoading(true);
            const res = await axios.get(`http://127.0.0.1:8000/api/user/karir/selengkapnya/${uuid}`);
            setProfesiDet(res.data.karir);
        } catch (error) {
            alert(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getDataKarirDetail();
    }, []);

    const lang = i18n.language;

    return (
        <div>
            <NavbarHijau />
            <section>
                <div className="container p-5">
                    {isLoading ? (
                        <div className="col-12 text-center py-5">
                            <h5>{t('loading_data')}</h5>
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : profesiDet ? (
                        <>
                            <div className="row">
                                <div className="col mb-5">
                                    <h5>{t('about_job')} {profesiDet[`posisi_${lang}`]}</h5>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(profesiDet[`deskripsi_${lang}`] || '<p>' + t('no_description') + '</p>')
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
                                            __html: DOMPurify.sanitize(profesiDet[`syarat_${lang}`] || '<p>' + t('no_requirements') + '</p>')
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
                        </>
                    ) : (
                        <p className="text-center">{t('data_not_found')}</p>
                    )}
                </div>
            </section>
        </div>
    );
}

export default DetailProfesi;