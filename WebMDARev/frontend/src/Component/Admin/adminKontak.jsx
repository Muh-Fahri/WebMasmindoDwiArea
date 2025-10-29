import React, { useEffect, useState } from "react";
import NavSide from "./navSide";
import axios from "axios";
import Swal from "sweetalert2";

function AdminKontak() {
    const Token = localStorage.getItem('token');
    const [kontakList, setKontakList] = useState([]);

    const getKontakData = async () => {
        Swal.fire({
            title: 'Memuat data...',
            text: 'Harap tunggu sebentar',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/admin/kontak/', {
                headers: {
                    Authorization: `Bearer ${Token}`
                }
            });
            setKontakList(response.data.kontak);
            Swal.close();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal memuat data',
                text: error.response?.data?.message || error.message,
            });
        }
    }

    useEffect(() => {
        getKontakData();
    }, []);
    return (
        <div>
            <div className="d-flex flex-column flex-md-row">
                <NavSide />
            </div>

            <div className="container py-4">
                <section>
                    {/* Header */}
                    <div className="row">
                        <div className="col pt-3">
                            <div className="card border-0 shadow-none" style={{ backgroundColor: '#F16022' }}>
                                <div className="card-body text-center text-md-start">
                                    <h1 className="text-white fs-3 fs-md-1">Pesan Masuk</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    {kontakList.length > 0 ? (
                        kontakList.map((kontak, index) => (
                            <div className="row mt-3" key={index}>
                                <div className="col">
                                    <div className="card border-0 rounded-4 shadow-sm">
                                        <div className="card-body">
                                            <div className="row align-items-center gy-3">
                                                <div className="col-12 col-sm-auto d-flex justify-content-center justify-content-sm-start">
                                                    <div
                                                        style={{
                                                            width: "80px",
                                                            height: "80px",
                                                            borderRadius: "50%",
                                                            overflow: "hidden",
                                                        }}
                                                    >
                                                        <img
                                                            src="/Image/Background/CampAwakMasJPEG.jpg"
                                                            alt="Profil"
                                                            className="w-100 h-100"
                                                            style={{ objectFit: "cover" }}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Info kontak */}
                                                <div className="col">
                                                    <p className="text-secondary fw-semibold mb-1">{kontak.name}</p>
                                                    <p className="fw-bold text-secondary mb-1">{kontak.subject}</p>
                                                    <p className="mb-1 text-muted">
                                                        <small>No Telp: {kontak.noTelp}</small>
                                                    </p>
                                                    <p className="mb-0">{kontak.pesan}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-5">
                            <h5 className="text-muted">Belum ada pesan masuk</h5>
                        </div>
                    )}
                </section>
            </div>
        </div>
    )
}
export default AdminKontak;





