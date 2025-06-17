import React, { useState, useEffect } from "react";
import NavbarProject from "../Component/navbarProject";
import axios from "axios";
import Footer from "./fotter";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import DOMPurify from 'dompurify';

function Bisnis() {
    const { t, i18n } = useTranslation();

    const [bisnisList, setBisnisList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getBisnisData();
        AOS.init({
            duration: 1000,
        });
    }, []);

    const getBisnisData = async () => {
        try {
            setIsLoading(true);
            const res = await axios.get("http://127.0.0.1:8000/api/user/bisnis");
            setBisnisList(res.data.bisnisUser);
        } catch (error) {
            alert(t('error_display'));
            setBisnisList([]);
        } finally {
            setIsLoading(false);
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
            {bisnisList && bisnisList.length > 0 ? (
                <>
                    <div className="col-12 col-md-auto mb-4 mb-md-0" data-aos="fade-right">
                        <img
                            className="img-fluid"
                            src="/Image/AwakMasCol.png"
                            alt="Logo"
                            style={{ width: "300px", height: "auto" }}
                        />
                    </div>
                    <div className="d-none d-md-block col-md-auto">
                        <div className="garis-aw-p"></div>
                    </div>
                    <div className="col-12 col-md" data-aos="fade-down">
                        {bisnisList.map((bisnis) => (
                            <p
                                style={{ whiteSpace: 'pre-line', textAlign: 'justify' }}
                                key={bisnis.uuid}
                                className="fs-3 fs-md-5"
                                dangerouslySetInnerHTML={{
                                    __html: i18n.language === 'id'
                                        ? DOMPurify.sanitize(bisnis.deskripsi_bisnis_id)
                                        : DOMPurify.sanitize(bisnis.deskripsi_bisnis_en)
                                }}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <div className="col text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col p-5">
                                <h5 className="text-center text-muted">{t('data_empty')}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <section>
                <div className="container px-md-5 px-3 mt-5" data-aos="fade-down" >
                    <div className="row mt-4">
                        {isLoading ? (
                            <div className="col text-center py-5">
                            </div>
                        ) : bisnisList && bisnisList.length > 0 ? (
                            <div className="col p-5 px-md-5 px-3">
                                {bisnisList.map((bisnis) => (
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
                                    ) : null
                                ))}
                            </div>
                        ) : (
                            <div className="col text-center">
                                <h5></h5>
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