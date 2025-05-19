import React, { useState, useEffect } from "react";
import NavSide from "./navSide";
import axios from "axios";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import NoData from "../Error/NoData";
import handleUnauthorized from "./unouthorized";



function Lingkungan() {
    useEffect(() => {
        getDeskripData();
    }, []);

    useEffect(() => {
        getImgLingData();
    }, []);

    // var untuk membuat data
    const [deskripsi, setDeskripsiHalaman] = useState("");
    const handleUnauthorized = () => {
        window.location.href = '/Login-admin-123'
    };


    // untuk mengambil data
    const [deskripList, setDeskripList] = useState([]);
    const [imgList, setImgList] = useState([]);
    const token = localStorage.getItem('token');


    // modal edit form
    const [editDeskripsiModal, setEditDeskripsiModal] = useState(false);
    const [editDokumentasiModal, setEditDokumentasiModal] = useState(false);
    const [editId, setEditId] = useState("");
    const [imgLing, setImgLing] = useState("");
    const [editDeskr, setEditDeskr] = useState("");

    const getDeskripData = async () => {
        try {
            const desLing = await axios.get("http://127.0.0.1:8000/api/admin/esg/lingkungan/deskripLingkungan/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            // console.log(desLing.data);
            setDeskripList(desLing.data.deskrip);
        } catch (error) {
            handleUnauthorized(error);
        }
    }


    const getImgLingData = async () => {
        try {
            const imgLing = await axios.get("http://127.0.0.1:8000/api/admin/esg/lingkungan/imgLingkungan/", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // console.log(imgLing.data);
            setImgList(imgLing.data.imgLing);
        } catch (error) {
            handleUnauthorized(error);
        }
    }

    const editDokData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image_lingkungan', imgLing); // gunakan nama yang sama seperti yang Laravel harapkan

        try {
            await axios.post(`http://127.0.0.1:8000/api/admin/esg/lingkungan/imgLingkungan/${editId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            setImgLing(null);
            alert('Data Dokumentasi Berhasil diubah');
            setEditDokumentasiModal(false);
            getImgLingData();
        } catch (error) {
            console.error(error.response?.data || error.message);
            alert('Gagal mengubah data');
        }
    };

    const opendEditModal = (dok) => {
        setEditDokumentasiModal(true);
        setEditId(dok.uuid);
    }

    // handle img
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImgLing(file);
    };

    const openEditModal = (deskrLing) => {
        setEditDeskripsiModal(true);
        setEditId(deskrLing.uuid);
        setEditDeskr(deskrLing.deskripsi_halaman);
    }


    const editDeskData = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/admin/esg/lingkungan/deskripLingkungan/${editId}`, {
                deskripsi_halaman: editDeskr
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setEditDeskripsiModal(false);
            getDeskripData();
            alert('Data Berhasil Diperbarui');
        } catch (error) {
            alert('Gagal Mengedit Data');
        }
    }

    const addDeskData = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/admin/esg/lingkungan/deskripLingkungan', {
                deskripsi_halaman: deskripsi,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            setDeskripsiHalaman("");
            alert('Berhasil Menginput Data');
            getDeskripData();
        } catch (error) {
            alert('Gagal Menginput Data');
        };
    }

    const addDokumentasi = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image_lingkungan', imgLing);

        try {
            await axios.post("http://127.0.0.1:8000/api/admin/esg/lingkungan/imgLingkungan", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setImgLing("");
            alert('Berhasil Menambahkan Data');
            getImgLingData();
        } catch (error) {
            alert('Gagal Menambahkan Data');
        }
    };

    const deleteDeskripData = async (uuid) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/admin/esg/lingkungan/deskripLingkungan/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getDeskripData();
            alert('Berhasil Menghapus Data');
        } catch (error) {
            alert('Gagal Menghapus  Data');
        }
    };

    const deleteDokumentasi = async (uuid) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/admin/esg/lingkungan/imgLingkungan/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getImgLingData();
            alert('Berhasil Menghapus Data');
        } catch (error) {
            alert('Gagal Menghapus Data')
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
                                <div className="card p-3 bg-info text-white">
                                    <div className="mb-3">
                                        <h3>ESG Lingkungan Page</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card p-3 mt-5">
                                    <h4 className="text-success">Create Data Deskripsi</h4>
                                    <p><span className="text-info">Notice!</span> Hanya Bisa Menginput Satu Data Pada Deskripsi Halaman</p>
                                    <form onSubmit={addDeskData}>
                                        <div className="mb-3">
                                            <p>Deskripsi Halaman</p>
                                            <textarea rows="10" className="form-control" value={deskripsi} onChange={(e) => setDeskripsiHalaman(e.target.value)}></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <button className="btn btn-sm btn-primary">Add Data</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card p-3 mt-5 text-secondary">
                                    <h3>Data Deskripsi Halaman</h3>
                                    <table className="table">
                                        {deskripList.length > 0 && (
                                            <thead>
                                                <tr>
                                                    <th>Deskripsi Halaman</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </thead>
                                        )}
                                        <tbody>
                                            {deskripList.length > 0 ? (
                                                deskripList.map((deskrLing) => (
                                                    <tr key={deskrLing.uuid}>
                                                        <td>{deskrLing.deskripsi_halaman}</td>
                                                        <td>
                                                            <div className="row">
                                                                <div className="col d-flex gap-2">
                                                                    <button onClick={() => openEditModal(deskrLing)} className="btn btn-warning btn-sm">Edit</button>
                                                                    <button onClick={() => deleteDeskripData(deskrLing.uuid)} className="btn btn-s, btn-danger">Delete</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <NoData />
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* modal edit deskripsi */}
                <section>
                    {editDeskripsiModal && (
                        <div className="modal show fade d-block" tabIndex="-1">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <form onSubmit={editDeskData}>
                                        <div className="modal-header">
                                            <h5 className="modal-title">Edit Data Deskripsi</h5>
                                            <button type="button" className="btn-close" onClick={() => setEditDeskripsiModal(false)}></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="mb-3">
                                                <label className="form-label">Deskripsi Halaman</label>
                                                <textarea type="text" className="form-control" value={editDeskr} onChange={(e) => setEditDeskr(e.target.value)} rows="10"></textarea>
                                            </div>
                                            <div className="mb-3">
                                                <button className="btn btn-sm btn-primary">Simpan Perubahan</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card p-3 mt-5">
                                    <h3 className="text-success">Create Data Dokumentasi</h3>
                                    <form onSubmit={addDokumentasi}>
                                        <div className="mb-3">
                                            <p>Dokumentasi</p>
                                            <input type="file" className="form-control" onChange={handleFileChange} />
                                        </div>
                                        <div className="mb-3">
                                            <button className="btn btn-sm btn-primary">Add Data</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card p-3 mt-5 text-secondary">
                                    <h3>Data Dokumentasi Kegiatan</h3>
                                    <table className="table">
                                        {imgList.length > 0 && (
                                            <thead>
                                                <tr>
                                                    <th>Dokumentasi</th>
                                                    <th>Dibuat Pada</th>
                                                    <th>Diubah Pada</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </thead>
                                        )}
                                        <tbody>
                                            {imgList.length > 0 ? (
                                                imgList.map((dok) => (
                                                    <tr key={dok.uuid}>
                                                        <td>
                                                            <img src={`http://localhost:8000/Lingkungan/${dok.image_lingkungan}`} alt="" style={{ maxWidth: "20%" }} />
                                                        </td>
                                                        <td className="text-success">{moment(dok.created_at).format('DD-MM-YYYY')}</td>
                                                        <td className="text-success">{moment(dok.updated_at).format('DD-MM-YYYY')}</td>
                                                        <td>
                                                            <div className="row">
                                                                <div className="col d-flex gap-2">
                                                                    <button className="btn btn-sm btn-warning" onClick={() => opendEditModal(dok)}>Edit</button>
                                                                    <button className="btn btn-sm btn-danger" onClick={() => deleteDokumentasi(dok.uuid)}>Delete</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <NoData />
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* modal dokumentasi */}
                <section>
                    {editDokumentasiModal && (
                        <div className="modal show fade d-block" tabIndex="-1">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <form onSubmit={editDokData}>
                                        <div className="modal-header">
                                            <h5 className="modal-title">Edit Data Dokumentasi</h5>
                                            <button type="button" onClick={() => setEditDokumentasiModal(false)} className="btn-close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="mb-3">
                                                <label className="form-label">Dokumentasi</label>
                                                <input onChange={handleFileChange} type="file" className="form-control" />
                                            </div>
                                            <div className="mb-3">
                                                <button className="btn btn-sm btn-primary">Simpan Perubahan</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </div >
        </div >
    );
};

export default Lingkungan;