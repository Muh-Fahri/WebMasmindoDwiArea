import React, { useState, useEffect } from "react";
import NavSide from "./navSide";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import NoData from "../Error/NoData";
import handleUnauthorized from "./unouthorized";



function Berita() {

    const [judulBerita, setJudulBerita] = useState("");
    const [deskipBerita, setDeskripBerita] = useState("");
    const [imgBerita, setImgBerita] = useState("");
    const [beritaList, setBeritaList] = useState([]);
    const token = localStorage.getItem('token');

    // Modal 
    const [editModal, setEditModal] = useState(false);
    const [editId, setEditId] = useState("");
    const [editJudul, setEditJudul] = useState("");
    const [editDeskrip, setEditDeskrip] = useState("");
    const [editImg, setEditImg] = useState(null); // file object



    const getBeritaData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/admin/berita/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            // console.log(response.data);
            setBeritaList(response.data.berita);
        } catch (error) {
            handleUnauthorized(error);
        }
    }

    useEffect(() => {
        getBeritaData();
    }, []);

    const addBeritaData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('judul_berita', judulBerita);
        formData.append('deskripsi_berita', deskipBerita);
        formData.append('image_berita', imgBerita);

        try {
            await axios.post("http://127.0.0.1:8000/api/admin/berita", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data' // Pastikan ini ada
                }
            });
            setJudulBerita("");
            setDeskripBerita("");
            setImgBerita("");
            getBeritaData();
            alert("Berhasil Menambahkan Data");
        } catch (error) {
            alert("Gagal Menambahkan Data");
        }
    };



    const editBeritaData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('judul_berita', editJudul);
        formData.append('deskripsi_berita', editDeskrip);
        if (editImg) {
            formData.append('image_berita', editImg);
        }

        try {
            await axios.post(`http://127.0.0.1:8000/api/admin/berita/${editId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Reset form dan tutup modal
            setEditJudul("");
            setEditDeskrip("");
            setEditImg(null);
            setEditModal(false);
            getBeritaData();
            alert('Berita berhasil diubah');
        } catch (error) {
            console.error(error);
            alert('Gagal mengubah data');
        }
    };


    const deleteBeritaData = async (uuid) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/admin/berita/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getBeritaData();
            alert('Berhasil Menghapus Data');
        } catch (error) {
            alert('Gagal Menghapus Data');
        }
    }


    const openEditModal = (berita) => {
        setEditModal(true);
        setEditId(berita.uuid);
        setEditJudul(berita.judul_berita);
        setEditDeskrip(berita.deskripsi_berita);
    };



    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImgBerita(file);
    };



    return (
        <div>
            <NavSide />
            <div className="flex-grow-1 p-3">
                <div className="container">
                    <section>
                        <div className="card bg-info p-3 text-white">
                            <h3>Berita Page</h3>
                        </div>
                        <div className="card mt-5 p-3">
                            <h5>Tambahkan data</h5>
                            <form onSubmit={addBeritaData} encType="multipart/form-data">
                                <div className="p-2">
                                    <p>Judul Berita</p>
                                    <input type="text" className="form-control" value={judulBerita} onChange={(e) => setJudulBerita(e.target.value)} required />
                                </div>
                                <div className="p-2">
                                    <p>Deskrip Berita</p>
                                    <p className="text-danger">Hindari Mengupload Gambar Yang Memiliki Nama Dengan Karakter Unik</p>
                                    <textarea type="text" rows={20} className="form-control" value={deskipBerita} onChange={(e) => setDeskripBerita(e.target.value)}></textarea>
                                </div>
                                <div className="p-2">
                                    <p>Image Berita</p>
                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleFileChange}  // Event handler untuk menangani file yang dipilih
                                    />
                                </div>
                                <div className="p-2">
                                    <button className="btn btn-sm btn-secondary">Add Data</button>
                                </div>
                            </form>
                        </div>
                    </section>
                    <section>
                        <div className="row">
                            <div className="col">
                                <div className="card mt-5 p-3 bg-info">
                                    <div className="row">
                                        <div className="col text-white">
                                            <h3>Data</h3>
                                        </div>
                                    </div>
                                </div>
                                <table className="table">
                                    {beritaList.length > 0 && (
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Judul Berita</th>
                                                <th>Isi Berita</th>
                                                <th>Foto Berita</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                    )}
                                    <tbody>
                                        {beritaList.length > 0 ? (
                                            beritaList.map((berita, index) => (
                                                <tr key={berita.uuid}>
                                                    <td>{index + 1}</td>
                                                    <td>{berita.judul_berita}</td>
                                                    <td>{berita.deskripsi_berita}</td>
                                                    <td>
                                                        <img
                                                            src={`http://localhost:8000/Berita/${encodeURIComponent(berita.image_berita)}`}
                                                            alt="Gambar Berita"
                                                            style={{ width: "100px" }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <div className="row">
                                                            <div className="col d-flex gap-2">
                                                                <button className="btn btn-sm btn-warning" onClick={() => openEditModal(berita)}>Edit  <FontAwesomeIcon icon={faPencilAlt} />  </button>
                                                                <button className="btn btn-sm btn-danger" onClick={() => deleteBeritaData(berita.uuid)}>Delete <FontAwesomeIcon icon={faTrash} /></button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <div className="justify-content-center">
                                                <NoData />
                                            </div>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <section>
                        {editModal && (
                            <div className="modal show fade d-block" tabIndex="-1">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <form onSubmit={editBeritaData}>
                                            <div className="modal-header">
                                                <h5 className="modal-title">Edit Data Berita</h5>
                                                <button type="button" onClick={() => setEditModal(false)} className="btn-close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="mb-3">
                                                    <label className="form-label">Judul Berita</label>
                                                    <input
                                                        type="text"
                                                        value={editJudul}
                                                        onChange={(e) => setEditJudul(e.target.value)}
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Deskripsi Berita</label>
                                                    <textarea
                                                        value={editDeskrip}
                                                        onChange={(e) => setEditDeskrip(e.target.value)}
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Foto Berita</label>
                                                    <input
                                                        type="file"
                                                        onChange={(e) => setEditImg(e.target.files[0])}
                                                        className="form-control"
                                                    />
                                                </div>
                                                <button type="submit" className="btn btn-primary">Simpan Perubahan</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Berita;