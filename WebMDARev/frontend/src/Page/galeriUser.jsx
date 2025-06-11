import React, { useState, useEffect } from "react";
import NavbarHijau from "../Component/navbarHijau";
import { useTranslation } from "react-i18next";
import Footer from "./fotter";
import axios from "axios";
import DOMPurify from 'dompurify';


function GaleriUser() {

    const [t, i18n] = useTranslation();
    const [galeriList, setGaleriList] = useState([]);
    // const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCaption, setSelectedCaption] = useState("");
    const [selectedData, setSelectedData] = useState(null);

    const getGaleriData = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/user/dokumentasi');
            setGaleriList(res.data.galeri);
            getGaleriData();
        } catch (error) {
            alert('Server Error');
        }
    }

    useEffect(() => {
        getGaleriData();
    }, []);
    useEffect(() => {
        if (galeriList.length > 0 && !selectedData) {
            setSelectedData(galeriList[0]);
        }
    }, [galeriList]);


    return (
        <div>
            <NavbarHijau />
            <section>
                <div className="container-fluid">
                    <div className="row pt-5 mt-5">
                        <div className="col p-5">
                            <h2 className="text-uppercase fw-bold" style={{ color: '#115258' }}>{t('news_title')}</h2>
                        </div>
                    </div>
                    <div className="row p-5"> {/* p-5 tetap untuk desktop, akan di-override di CSS jika perlu */}
                        <div className="col-12 col-md-3"> {/* col-12: di HP akan 100% lebar, col-md-3: di desktop 3 kolom */}
                            <div className="d-flex align-items-start">
                                <div className="garis-berita me-3"></div>
                                <ul className="list-unstyled">
                                    <li>
                                        {/* fs-1: ukuran default untuk desktop, fs-3: override untuk mobile */}
                                        <a href="/berita" className="fs-1 text-black text-decoration-none fs-sm-3">{t('news_in_masmindo')}</a>
                                    </li>
                                    <li>
                                        <a href="/instagram" className="fs-1 text-black text-decoration-none fs-sm-3">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="/youtube" className="fs-1 text-black text-decoration-none fs-sm-3">Youtube</a>
                                    </li>
                                    <li>
                                        <a href="/dokumentasi" className="fs-1 text-decoration-none berita-active fs-sm-3">{t('documentation_title')}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* foto */}
                        <div className="col-12 col-md-9"> {/* col-12: di HP akan 100% lebar, col-md-9: di desktop 9 kolom */}
                            {galeriList.length > 0 ? (
                                <div className="row">
                                    {/* col-12: di HP akan 100% lebar, col-md-7: di desktop 7 kolom */}
                                    <div className="col-12 col-md-7 mb-4 p-0">
                                        <div className="position-relative foto-utama-galeri-hp" style={{ width: '100%', height: '500px' }}>
                                            {/* Tinggi 500px tetap untuk desktop, akan di-override oleh CSS di media query untuk HP */}
                                            {selectedData && (
                                                <>
                                                    <div
                                                        className="w-100 h-100"
                                                        style={{
                                                            backgroundImage:
                                                                `linear-gradient(to right, rgba(241, 96, 34, 0.73), rgba(241, 96, 34, 0)),
                                                     url('http://localhost:8000/Galeri/${encodeURIComponent(selectedData.foto_galeri)}')
                                                    `,
                                                            backgroundSize: 'cover',
                                                            backgroundPosition: 'center',
                                                            transition: 'opacity 0.5s ease-in-out',
                                                            opacity: selectedData ? 1 : 0.5,
                                                        }}
                                                        role="img"
                                                        aria-label={i18n.language === 'id' ? selectedData.deskrip_id : selectedData.deskrip_en}
                                                    />
                                                    <h5
                                                        className="position-absolute bottom-0 start-0 p-3 text-white"
                                                        style={{
                                                            background: 'rgba(17, 82, 88, 0.86)',
                                                            fontWeight: 'bold',
                                                        }}
                                                        dangerouslySetInnerHTML={{
                                                            __html: DOMPurify.sanitize(
                                                                i18n.language === 'id'
                                                                    ? selectedData.deskrip_id
                                                                    : selectedData.deskrip_en
                                                            )
                                                        }}
                                                    />
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-5 mt-4 mt-md-0"> {/* mt-4: margin-top di HP, mt-md-0: hilangkan margin di desktop */}
                                        <div
                                            id="thumbnailScroll"
                                            className="d-flex flex-md-column px-3 py-2 overflow-auto" // overflow-auto untuk scroll di HP
                                            style={{
                                                // Atur properti untuk desktop secara default
                                                overflowY: 'auto', // Untuk desktop (vertikal)
                                                overflowX: 'hidden', // Untuk desktop
                                                scrollBehavior: 'smooth',
                                                whiteSpace: 'normal', // Untuk desktop
                                                gap: '0.5rem',
                                                maxHeight: '450px', // Untuk desktop
                                                width: '260px', // Untuk desktop
                                            }}
                                        >
                                            {galeriList.map((item, index) => (
                                                <div
                                                    className="card flex-shrink-0"
                                                    style={{ width: '100%', flexShrink: 0 }} // Lebar 100% untuk desktop, akan di-override di CSS untuk HP
                                                    key={index}
                                                >
                                                    <img
                                                        src={`http://localhost:8000/Galeri/${encodeURIComponent(item.foto_galeri)}`}
                                                        className="card-img-top"
                                                        alt={`Foto ${index + 1}`}
                                                        style={{ objectFit: 'cover', height: '80px', cursor: 'pointer' }}
                                                        onClick={() => setSelectedData(item)}
                                                    />
                                                    <div
                                                        className="card-body text-white"
                                                        style={{
                                                            backgroundColor: '#115258',
                                                            padding: '0.5rem',
                                                        }}
                                                    >
                                                        <h6
                                                            className="card-title"
                                                            style={{ fontSize: '0.7rem', marginBottom: '0' }}
                                                            dangerouslySetInnerHTML={{
                                                                __html: i18n.language === 'id'
                                                                    ? DOMPurify.sanitize(item.deskrip_id)
                                                                    : DOMPurify.sanitize(item.deskrip_en)
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <h1>No data</h1>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default GaleriUser;