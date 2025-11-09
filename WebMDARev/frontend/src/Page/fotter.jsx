import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DOMPurify from 'dompurify';
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";



function Footer() {

    const [alamatDataList, setAlamatData] = useState([]);
    const [t, i18n] = useTranslation();



    const getAlamatData = async () => {
        Swal.fire({
            title: 'Memuat data...',
            text: 'Harap tunggu sebentar',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/user/maps');
            setAlamatData(res.data.maps);
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
        getAlamatData();
    }, []);

    return (
        <div>
            <section style={{ backgroundColor: '#013233' }} className="py-5">
                <div className="container-fluid p-4 p-md-5">
                    <div className="row text-white flex-column flex-md-row">
                        <div className="col-12 col-md-6 mb-4 mb-md-0">
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="text-uppercase text-white fs-4 fs-md-3 mb-4">PT Masmindo Dwi Area</h3>
                                </div>
                            </div>
                            <div className="row">
                                {alamatDataList.length > 0 ? (
                                    alamatDataList.map((alamat) => (
                                        <div className="col-12 col-md-6 mb-3">
                                            <Link className="text-white text-decoration-none" to={alamat.link_alamat} target="_blank" rel="noopener noreferrer">
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
                                    <div></div>
                                )}
                            </div>
                        </div>
                        <div className="col-auto d-none d-md-flex justify-content-center align-items-center px-4">
                            <div className="garis-putih" style={{ height: '100%', width: '1px', backgroundColor: 'white' }}></div>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center mt-4 mt-md-0">
                            <div className="text-center">
                                <img className="img-fluid" src="/logoMDAWhite.png" alt="Logo Masmindo Dwi Area" style={{ maxHeight: '300px', maxWidth: '300px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Footer;