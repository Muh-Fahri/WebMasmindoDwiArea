import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarHijau from "../Component/navbarHijau";
import Aos from "aos";
import { useTranslation } from "react-i18next";

function Youtube() {

    const { t, i18n } = useTranslation();

    const [ytList, setYtList] = useState([]);
    useEffect(() => {
        getYtData();
        Aos.init({
            duration: 1000,
        })
    }, [])

    const getYtData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user/berita/youtube")
            setYtList(res.data.youtube);
        } catch (error) {
            alert("Gagal Mengambil Data");
        }
    }


    return (
        <div>
            <NavbarHijau />
            <div className="container-fluid pt-5 mt-5">
                <div className="row pt-5 mt-5">
                    <div className="col p-5">
                        <h2 className="text-uppercase fw-bold" style={{ color: '#115258' }}>{t('news_title')}</h2>
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-auto d-none d-sm-block">
                        <div className="garis-berita"></div>
                    </div>
                    <div className="col-md-4">
                        {/* Nav */}
                        <ul className="list-unstyled">
                            <li>
                                <a href="/berita" className="fs-1 text-black text-decoration-none">{t('news_in_masmindo')}</a>
                            </li>
                            <li>
                                <a href="/instagram" className="fs-1 text-black text-decoration-none">Instagram</a>
                            </li>
                            <li>
                                <a href="/youtube" className="fs-1 text-decoration-none berita-active">Youtube</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col p-3" >
                                {
                                    ytList.length > 0 ? (
                                        ytList.map((youtube) => (
                                            <div className="col-12 p-3" data-aos="fade-down">
                                                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '1rem' }}>
                                                    <iframe
                                                        className="rounded-5 rounded-sm-none"
                                                        src={youtube.linkYoutube}
                                                        title="YouTube video player"
                                                        style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            width: '100%',
                                                            height: '100%',
                                                            border: 0,
                                                        }}
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        referrerPolicy="strict-origin-when-cross-origin"
                                                        allowFullScreen
                                                    />
                                                </div>
                                            </div>

                                        ))
                                    ) : (
                                        <h1>Loading</h1>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Youtube;