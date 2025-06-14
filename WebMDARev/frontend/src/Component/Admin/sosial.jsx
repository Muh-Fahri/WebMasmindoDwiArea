import React, { useState, useEffect } from "react";
import NavSide from "./navSide";
import axios from "axios";
import moment from "moment";
import NoData from "../Error/NoData";
import handleUnauthorized from "./unouthorized";

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
            handleUnauthorized(error);
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
            openEditSosialModal(false);
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
                {/* menampilkan data */}
                <section>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col">
                                <div className="card p-3">
                                    <div className="mb-3">
                                        <h3 className="text-secondary">Data</h3>
                                    </div>
                                    <div className="table-responsive"> {/* Tambahkan wrapper table-responsive di sini */}
                                        <table className="table">
                                            {/* Thead seharusnya selalu ada untuk struktur tabel yang valid */}
                                            <thead className="table-light"> {/* Opsional: tambahkan table-light untuk styling header */}
                                                <tr>
                                                    <th>No</th>
                                                    <th style={{ width: "100px" }}>Dokumentasi</th> {/* Pertahankan width di sini atau sesuaikan */}
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
                                                                    alt={`Dokumentasi kategori ${sosial.category}`}
                                                                    style={{ width: "80px", height: "auto", objectFit: "cover", borderRadius: "4px" }}
                                                                    className="img-fluid" /* Pastikan gambar responsif dalam kolom */
                                                                />
                                                            </td>
                                                            {/* Kategori bisa panjang, tambahkan text-truncate jika memungkinkan (tergantung konten) */}
                                                            <td className="text-nowrap">{sosial.category}</td>
                                                            {/* Tanggal: gunakan text-nowrap agar tidak terpotong baris, dan sesuaikan font size */}
                                                            <td className="text-nowrap fs-7 fs-md-6">{moment(sosial.created_at).format('DD-MM-YYYY')}</td>
                                                            <td className="text-nowrap fs-7 fs-md-6">{moment(sosial.updated_at).format('DD-MM-YYYY')}</td>
                                                            <td>
                                                                {/* Tombol aksi akan menumpuk di layar kecil */}
                                                                <div className="d-flex flex-column flex-md-row gap-1">
                                                                    <button
                                                                        className="btn btn-warning btn-sm d-flex align-items-center justify-content-center gap-1"
                                                                        onClick={() => openEditSosialModal(sosial)}
                                                                    >
                                                                        <span className="d-none d-md-inline">Edit</span>
                                                                        {/* Asumsi FontAwesomeIcon diimport, atau gunakan ikon Bootstrap/SVG */}
                                                                        {/* <FontAwesomeIcon icon={faPencilAlt} /> */}
                                                                        <i className="fas fa-edit d-md-none"></i> {/* Contoh ikon untuk mobile */}
                                                                    </button>
                                                                    <button
                                                                        className="btn btn-danger btn-sm d-flex align-items-center justify-content-center gap-1"
                                                                        onClick={() => deleteSosialData(sosial.uuid)}
                                                                    >
                                                                        <span className="d-none d-md-inline">Delete</span>
                                                                        {/* Asumsi FontAwesomeIcon diimport, atau gunakan ikon Bootstrap/SVG */}
                                                                        {/* <FontAwesomeIcon icon={faTrash} /> */}
                                                                        <i className="fas fa-trash d-md-none"></i> {/* Contoh ikon untuk mobile */}
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        {/* colSpan harus sesuai dengan jumlah kolom di thead (saat ini 6) */}
                                                        <td colSpan="6" className="text-center text-muted py-3">
                                                            {/* Menampilkan komponen NoData atau teks fallback */}
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