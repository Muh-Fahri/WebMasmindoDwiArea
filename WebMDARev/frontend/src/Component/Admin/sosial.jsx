import React, { useState, useEffect } from "react";
import NavSide from "./navSide";
import axios from "axios";
import moment from "moment";
import NoData from "../Error/NoData";

function Sosial() {
    const [sosialList, setSosialList] = useState([]);
    const [imageSosial, setImageSosial] = useState("");
    const [kategori, setKategori] = useState("");

    const token = localStorage.getItem('token');


    // modal
    const [editSosialModal, setEditSosialModal] = useState(false);
    const [editId, setEditid] = useState("");
    const [editImg, setEditImg] = useState(null);
    const [editKategori, setEditKategori] = useState("");

    useEffect(() => {
        getSosialData();
    }, []);

    const getSosialData = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/admin/esg/sosial", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setSosialList(response.data.sosial);
        } catch (error) {
            alert('Gagal Mengambil Data');
        }
    }

    const createSosialData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('imageSosial', imageSosial);
        formData.append('category', kategori);

        try {
            await axios.post("http://127.0.0.1:8000/api/admin/esg/sosial", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setImageSosial("");
            setKategori("");
            getSosialData();
            alert('Berhasil Membuat Data');
        } catch (error) {
            alert("Gagal Membuat Data");
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
            await axios.post(`http://127.0.0.1:8000/api/admin/esg/sosial/${editId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'multipart/form-data'
                }
            });
            setEditImg(null);
            setEditKategori("")
            getSosialData();
            alert('Berita Berhasil diubah');
        } catch (error) {
            alert('Gagal Mengubah Data');
        }
    }

    const openEditSosialModal = (sosial) => {
        setEditSosialModal(true);
        setEditid(sosial.uuid);
    };

    const deleteSosialData = async (uuid) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/admin/esg/sosial/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getSosialData();
            alert('Berhasil Menghapus Data');
        } catch (error) {
            alert("Gagal Menghapus Data");
        }
    }

    return (
        <div>
            <NavSide />
            <div className="flex-grow-1 p-3">
                {/* form membuat data */}
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card bg-info text-white p-3">
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
                                        <button className="btn btn-sm btn-primary">Add Data</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                {/* menampilkan data */}
                <section>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col">
                                <div className="card p-3">
                                    <div className="mb-3">
                                        <h3 className="text-secondary">Data</h3>
                                    </div>
                                    <table className="table">
                                        <thead>
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
                                                                src={`http://localhost:8000/Sosial/${sosial.imageSosial}`}
                                                                alt=""
                                                                style={{ width: "80px", height: "auto", objectFit: "cover", borderRadius: "4px" }}
                                                            />
                                                        </td>
                                                        <td>{sosial.category}</td>
                                                        <td>{moment(sosial.created_at).format('DD-MM-YYYY')}</td>
                                                        <td>{moment(sosial.updated_at).format('DD-MM-YYYY')}</td>
                                                        <td>
                                                            <div className="row">
                                                                <div className="col d-flex gap-2">
                                                                    <button className="btn btn-sm btn-warning" onClick={() => openEditSosialModal(sosial)}>Edit</button>
                                                                    <button className="btn btn-sm btn-danger" onClick={() => deleteSosialData(sosial.uuid)}>Delete</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td>No Data</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
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