import React, { useEffect, useState } from "react";
import NavSide from "./navSide";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function AdminKontak() {
    const Token = localStorage.getItem('token');
    const [kontakList, setKontakList] = useState([]);

    const getKontakData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/admin/kontak/', {
                headers: {
                    Authorization: `Bearer ${Token}`
                }
            });
            setKontakList(response.data.kontak);
        } catch (error) {
            alert(error);
        }
    }

    const deleteKontakData = async (uuid) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/admin/kontak/delete/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${Token}`
                }
            });
            getKontakData();
        } catch (error) {
            alert('gagal menghapus data');
        }
    }

    useEffect(() => {
        getKontakData();

        const interval = setInterval(() => {
            getKontakData();
        }, 1000);

        return () => clearInterval(interval);

    }, []);
    return (
        <div>
            <div className="d-flex flex-column flex-md-row">
                <NavSide />
            </div>
            <div className="container py-4">
                <section>
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
                                    <div className="card border-0 rounded-4 shadow-sm position-relative">
                                        <div className="card-body">
                                            <div className="row align-items-center gy-3">
                                                {/* Foto profil */}
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
                                                            src="/Image/Profile/userProfile.png"
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

                                                {/* Tombol titik tiga (dropdown menu) */}
                                                <div className="col-auto ms-auto">
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn btn-danger btn-sm"
                                                            type="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"


                                                        >
                                                            <FontAwesomeIcon className="submit fs-5" icon={faTrash} />
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <button
                                                                    className="dropdown-item text-danger"
                                                                    onMouseDown={(e) => e.stopPropagation()}
                                                                    onClick={() => deleteKontakData(kontak.uuid)}
                                                                >
                                                                    <i className="bi bi-trash me-2"></i> Hapus
                                                                </button>

                                                            </li>
                                                        </ul>
                                                    </div>
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





