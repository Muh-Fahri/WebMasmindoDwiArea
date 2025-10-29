import React, { useState, useEffect } from "react";
import NavSide from "./navSide";
import axios from "axios";
import moment from "moment";
import NoData from "../Error/NoData";
import handleUnauthorized from "./unouthorized";
import Swal from "sweetalert2";

function Sosial() {
    const [sosialList, setSosialList] = useState([]);
    const [imageSosial, setImageSosial] = useState("");
    const [kategori, setKategori] = useState("");
    const token = localStorage.getItem('token');
    const [editSosialModal, setEditSosialModal] = useState(false);
    const [editId, setEditid] = useState("");
    const [editImg, setEditImg] = useState(null);
    const [editKategori, setEditKategori] = useState("");

    useEffect(() => {
        getSosialData();
    }, []);

    const getSosialData = async (showLoading = true) => {
        if (showLoading) {
            Swal.fire({
                title: 'Memuat data...',
                text: 'Harap tunggu sebentar',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });
        }
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/admin/esg/sosial", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setSosialList(response.data.sosial);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal memuat data',
                text: error.response?.data?.message || error.message,
            });
        } finally {
            if (showLoading) Swal.close();
        }
    }

    const createSosialData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('imageSosial', imageSosial);
        formData.append('category', kategori);

        try {
            Swal.fire({
                title: 'Menyimpan data...',
                text: 'Harap tunggu sebentar',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });
            await axios.post("http://127.0.0.1:8000/api/admin/esg/sosial", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setImageSosial("");
            setKategori("");
            await getSosialData(false);
            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'Data berhasil ditambahkan.',
                showConfirmButton: false,
                timer: 1800
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal menyimpan data!',
                text: error.response?.data?.message || 'Terjadi kesalahan saat menyimpan data.',
                confirmButtonColor: '#d33',
            });
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImageSosial(file);
    };


    const editSosialData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('category', editKategori);
        if (editImg) {
            formData.append('imageSosial', editImg);
        }

        try {
            Swal.fire({
                title: 'Menyimpan data...',
                text: 'Harap tunggu sebentar',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });
            await axios.post(`http://127.0.0.1:8000/api/admin/esg/sosial/${editId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'multipart/form-data'
                }
            });
            setEditImg(null);
            setEditKategori("")
            openEditSosialModal(false);
            await getSosialData(false);
            Swal.close();
            await Swal.fire({
                icon: "success",
                title: "Berhasil!",
                text: "Data berhasil diperbarui.",
                showConfirmButton: false,
                timer: 1500,
            });

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Gagal memperbarui data",
                text: error.response?.data?.message || error.message,
            });
        }
    }

    const openEditSosialModal = (sosial) => {
        setEditSosialModal(true);
        setEditid(sosial.uuid);
    };

    const deleteSosialData = async (uuid) => {
        const confirmResult = await Swal.fire({
            title: 'Apakah Anda yakin?',
            text: 'Data ini akan dihapus secara permanen!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ya, hapus',
            cancelButtonText: 'Batal',
        });

        if (!confirmResult.isConfirmed) return;

        Swal.fire({
            title: 'Menghapus data...',
            text: 'Harap tunggu sebentar',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
        try {
            await axios.delete(`http://127.0.0.1:8000/api/admin/esg/sosial/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            await getSosialData(false);
            Swal.close()
            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'Data karir berhasil dihapus.',
                showConfirmButton: false,
                timer: 1800,
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal menghapus data!',
                text: error.response?.data?.message || error.message,
            });
        }
    }

    return (
        <div>
            <NavSide />
            <div className="flex-grow-1 p-3">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card text-white p-3" style={{ backgroundColor: '#F16022' }}>
                                    <h3>ESG Sosial Page</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card p-3 mt-5">
                                    <div className="mb-3">
                                        <h4 className="text-success">Create Data Sosial</h4>
                                    </div>
                                    <form onSubmit={createSosialData}>
                                        <div className="mb-3">
                                            <label className="form-label">Kategori</label>
                                            <select className="form-control" value={kategori} onChange={(e) => setKategori(e.target.value)}>
                                                <option value="">-- Pilih Kategori --</option>
                                                <option value="pengembanganMasyarakat">Pengembangan Masyarakat</option>
                                                <option value="pendidikan">Pendidikan</option>
                                                <option value="kesehatan">Kesehatan</option>
                                                <option value="infrastruktur">Infrastruktur</option>
                                                <option value="pemberdayaan">Pemberdayaan</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Dokumentasi</label>
                                            <input type="file" className="form-control" onChange={handleFileChange} />
                                        </div>
                                        <button className="btn btn-sm text-white p-2" style={{ backgroundColor: "#115258" }}>Add Data</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col">
                                <div className="card p-3">
                                    <div className="mb-3">
                                        <h3 className="text-secondary">Data</h3>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>No</th>
                                                    <th style={{ width: "100px" }}>Dokumentasi</th>
                                                    <th>Kategori</th>
                                                    <th>Dibuat Pada</th>
                                                    <th>Diubah Pada</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {sosialList.length > 0 ? (
                                                    sosialList.map((sosial, index) => (
                                                        <tr key={sosial.uuid}>
                                                            <td>{index + 1}</td>
                                                            <td className="text-center">
                                                                <img
                                                                    src={`http://localhost:8000/Sosial/${encodeURIComponent(sosial.imageSosial)}`}
                                                                    alt={`Dokumentasi kategori ${sosial.category}`}
                                                                    style={{ width: "80px", height: "auto", objectFit: "cover", borderRadius: "4px" }}
                                                                    className="img-fluid"
                                                                />
                                                            </td>
                                                            <td className="text-nowrap">{sosial.category}</td>
                                                            <td className="text-nowrap fs-7 fs-md-6">{moment(sosial.created_at).format('DD-MM-YYYY')}</td>
                                                            <td className="text-nowrap fs-7 fs-md-6">{moment(sosial.updated_at).format('DD-MM-YYYY')}</td>
                                                            <td>
                                                                <div className="d-flex flex-column flex-md-row gap-1">
                                                                    <button
                                                                        className="btn btn-warning btn-sm d-flex align-items-center justify-content-center gap-1"
                                                                        onClick={() => openEditSosialModal(sosial)}
                                                                    >
                                                                        <span className="d-none d-md-inline">Edit</span>
                                                                        <i className="fas fa-edit d-md-none"></i>
                                                                    </button>
                                                                    <button
                                                                        className="btn btn-danger btn-sm d-flex align-items-center justify-content-center gap-1"
                                                                        onClick={() => deleteSosialData(sosial.uuid)}
                                                                    >
                                                                        <span className="d-none d-md-inline">Delete</span>
                                                                        <i className="fas fa-trash d-md-none"></i>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="6" className="text-center text-muted py-3">
                                                            {typeof NoData === 'function' ? <NoData /> : 'Tidak ada data sosial.'}
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    {/* Modal edit data */}
                    {editSosialModal && (
                        <div className="modal show fade d-block" tabIndex="-1">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <form onSubmit={editSosialData}>
                                        <div className="modal-header">
                                            <h5 className="modal-tittle">Edit Data Sosial</h5>
                                            <button type="button" onClick={() => setEditSosialModal(false)} className="btn-close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="mb-3">
                                                <label className="form-label">Kategori</label>
                                                <select className="form-control" value={editKategori} onChange={(e) => setEditKategori(e.target.value)}>
                                                    <option value="">--Pilih Kategori--</option>
                                                    <option value="pengembanganMasyarakat">Pengembangan Masyarakat</option>
                                                    <option value="pendidikan">Pendidikan</option>
                                                    <option value="kesehatan">Kesehatan</option>
                                                    <option value="infrastruktur">Infrastruktur</option>
                                                    <option value="pemberdayaan">Pembeerdayaan</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Dokumentasi</label>
                                                <input type="file" onChange={(e) => setEditImg(e.target.files[0])} className="form-control" />
                                            </div>
                                            <div className="mb-3">
                                                <button className="btn btn-sm btn-primary">Add Data</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </div>
    )
}
export default Sosial;