import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavbarHijau from "../Component/navbarHijau";
import { useTranslation } from "react-i18next";

function BeritaSelengkapnya() {
    const { uuid } = useParams(); // ambil UUID dari URL
    const [berita, setBerita] = useState(null); // bukan array, tapi satu objek
    const { i18n } = useTranslation();

    useEffect(() => {
        getSelengkapnyaData();
    }, []);

    const getSelengkapnyaData = async () => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/api/user/berita/selengkapnya/${uuid}`);
            setBerita(res.data.selengkapnya);
        } catch (error) {
            alert("Gagal Mengambil Data");
        }
    };

    const formatTanggal = (tanggalString) => {
        const tanggal = new Date(tanggalString);
        const options = {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };
        return tanggal.toLocaleDateString('id-ID', options);
    };

    return (
        <div>
            <NavbarHijau />
            {
                berita ? (
                    <div className="container-fluid pt-5 mt-5">
                        <div className="row pt-5 mt-5">
                            <div className="col p-5">
                                <h2 className="text-uppercase fw-bold" style={{ color: '#115258' }}>Berita</h2>
                            </div>
                        </div>
                        <div className="row p-5">
                            <div className="col-auto d-none d-sm-block">
                                <div className="garis-berita"></div>
                            </div>
                            <div className="col-md-4 d-flex flex-column justify-content-between">
                                <div>
                                    <ul className="list-unstyled">
                                        <li><a href="/berita" className="fs-1 text-decoration-none berita-active">Masmindo dalam berita</a></li>
                                        <li><a href="/instagram" className="fs-1 text-black text-decoration-none">Instagram</a></li>
                                        <li><a href="" className="fs-1 text-black text-decoration-none">Youtube</a></li>
                                    </ul>
                                </div>
                                <div className="mt-auto pt-4">
                                    <p className="mb-1">{formatTanggal(berita.created_at)}</p>
                                    <h3 className="fw-bold display-6">{i18n.language === 'id' ? berita.judul_berita_id : berita.judul_berita_en}</h3>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="card rounded-5 overflow-hidden responsive-image-container" style={{ height: '100vh' }}>
                                    <img
                                        src={`http://localhost:8000/Berita/${encodeURIComponent(berita.image_berita)}`}
                                        alt="Image"
                                        className="img-fluid object-fit-cover rounded-5"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="row p-5 d-flex justify-content-center">
                            <div className="col-12 col-md-8">
                                <p style={{ whiteSpace: 'pre-line', textAlign: 'justify' }} className="fs-5 fs-md-3">{i18n.language === 'id' ? berita.deskripsi_berita_id : berita.deskripsi_berita_en}</p>
                            </div>
                        </div>

                    </div>
                ) : (
                    <h1 className="text-center my-5">Loading data...</h1>
                )
            }
        </div>
    );

}

export default BeritaSelengkapnya;
