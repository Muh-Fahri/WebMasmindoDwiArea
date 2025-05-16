import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavbarHijau from "../Component/navbarHijau";

function BeritaSelengkapnya() {
    const { uuid } = useParams(); // ambil UUID dari URL
    const [berita, setBerita] = useState(null); // bukan array, tapi satu objek

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
                                <h2 className="text-uppercase text-secondary">Berita</h2>
                            </div>
                        </div>
                        <div className="row p-5">
                            <div className="col-auto">
                                <div className="garis-berita"></div>
                            </div>
                            <div className="col-md-4 d-flex flex-column justify-content-between">
                                <div>
                                    <ul className="list-unstyled">
                                        <li><a href="/berita" className="fs-1 text-black text-decoration-none fw-bold">Masmindo dalam berita</a></li>
                                        <li><a href="/instagram" className="fs-1 text-black text-decoration-none">Instagram</a></li>
                                        <li><a href="" className="fs-1 text-black text-decoration-none">Youtube</a></li>
                                    </ul>
                                </div>
                                <div className="mt-auto pt-4">
                                    <p className="mb-1">{formatTanggal(berita.created_at)}</p>
                                    <h3 className="fw-bold display-6">{berita.judul_berita}</h3>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="card rounded-5 overflow-hidden" style={{ height: '100vh' }}>
                                    <img
                                        src={`http://127.0.0.1:8000/Berita/${berita.image_berita}`}
                                        alt={berita.judul_berita}
                                        className="img-fluid object-fit-cover rounded-5"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row p-5">
                            <div className="col">
                                <p className="fs-3">{berita.deskripsi_berita}</p>
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
