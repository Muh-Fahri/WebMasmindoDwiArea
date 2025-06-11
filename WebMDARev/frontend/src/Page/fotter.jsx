import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DOMPurify from 'dompurify';
import { useTranslation } from "react-i18next";



function Footer() {

    const [alamatDataList, setAlamatData] = useState([]);
    const [t, i18n] = useTranslation();



    const getAlamatData = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/user/maps');
            setAlamatData(res.data.maps);
            getAlamatData();
        } catch (error) {
            alert(error);
        }

    };

    useEffect(() => {
        getAlamatData();
    }, []);

    return (
        <div>
            <section style={{ backgroundColor: '#747474' }} className="py-5"> {/* Tambah py-5 untuk padding vertikal */}
                <div className="container-fluid p-4 p-md-5"> {/* Kurangi padding di mobile, normal di md ke atas */}
                    <div className="row text-white flex-column flex-md-row"> {/* Buat flex-column di mobile, flex-row di md ke atas */}

                        {/* Kolom Kiri (Informasi Kontak) */}
                        <div className="col-12 col-md-6 mb-4 mb-md-0"> {/* Ambil lebar penuh di mobile, setengah di md ke atas */}
                            <div className="row">
                                <div className="col-12"> {/* Ambil lebar penuh di mobile */}
                                    <h3 className="text-uppercase text-white fs-4 fs-md-3 mb-4">PT Masmindo Dwi Area</h3> {/* Perkecil font di mobile, normal di md ke atas */}
                                </div>
                            </div>
                            {/* Office */}
                            <div className="row"> {/* Hapus mt-5 di row ini, pakai mt-3 per item */}
                                {alamatDataList.length > 0 ? (
                                    alamatDataList.map((alamat) => (
                                        <div className="col-12 col-md-6 mb-3"> {/* Ambil setengah lebar di md, penuh di mobile */}
                                            <Link className="text-white text-decoration-none" to={alamat.link_alamat} target="_blank" rel="noopener noreferrer"> {/* Ganti dengan link Google Maps asli */}
                                                <p
                                                    className="m-4"
                                                    dangerouslySetInnerHTML={{
                                                        __html: i18n.language === 'id'
                                                            ? DOMPurify.sanitize(alamat.nama_alamat_id)
                                                            : DOMPurify.sanitize(alamat.nama_alamat_en)
                                                    }}


                                                />
                                            </Link>
                                        </div>
                                    ))
                                ) : (
                                    <p>No Data</p>
                                )}
                            </div>
                        </div>
                        <div className="col-auto d-none d-md-flex justify-content-center align-items-center px-4"> {/* col-auto, d-none di mobile, d-md-flex di md ke atas */}
                            <div className="garis-putih" style={{ height: '100%', width: '1px', backgroundColor: 'white' }}></div> {/* Definisi gaya garis langsung */}
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center mt-4 mt-md-0"> {/* Full width di mobile, lebih kecil di md, tengah di mobile/desktop */}
                            <div className="text-center"> {/* Tambahkan text-center untuk menengahkan logo di mobile */}
                                <img className="img-fluid" src="/logoMDAWhite.png" alt="Logo Masmindo Dwi Area" style={{ maxHeight: '300px', maxWidth: '300px' }} /> {/* Atur max-height/width untuk kontrol ukuran */}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;