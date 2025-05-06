import React, { useState, useEffect } from "react";
import axios from "axios";
import NavSide from "./navSide";

function Youtube() {
    const [listYt, setListYt] = useState([]);
    const [createLinkYt, setCreateLinkYt] = useState("");
    const token = localStorage.getItem('token');


    // modal
    const [editYtModal, setEditYtModal] = useState(false);
    const [editId, setEditId] = useState("");
    const [editLinkYt, setEditLinkYt] = useState("");


    useEffect(() => {
        getYtData();
    }, []);

    const getYtData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/admin/youtube", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setListYt(res.data.youtube);
        } catch (error) {
            alert('Gagal Mengambil Data');
        }
    };

    const createYtData = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/admin/youtube", {
                linkYoutube: createLinkYt
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCreateLinkYt("")
            getYtData();
            alert("Berhasil Menambahkan Data");
        } catch (error) {
            alert("Gagal Menambahkan data");
        }
    };

    const openEditModal = (youtube) => {
        setEditYtModal(true);
        setEditId(youtube.uuid);
        setEditLinkYt(youtube.linkYoutube);
    };

    const editYtData = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://127.0.0.1:8000/api/admin/youtube/${editId}`, {
                linkYoutube: editLinkYt
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setEditYtModal(false);
            getYtData();
            alert('Berhasil Edit Data');
        } catch (error) {
            alert("Gagal Mengedit Data");
        }
    };

    const deleteDataYt = async (uuid) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/admin/youtube/delete/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getYtData();
            alert("Berhasil Menghapus Data");
        } catch (error) {
            alert('Gagal Menghapus Data');
        }
    };



    return (
        <div>
            <NavSide />
            <div className="flex-grow-1 p-3">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card bg-info text-white p-3">
                                    <h3>Halaman Youtube</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <div className="card p-3">
                                    <div className="mb-3">
                                        <h3 className="text-success">Create Data</h3>
                                    </div>
                                    <form onSubmit={createYtData}>
                                        <div className="mb-3">
                                            <label className="form-label">Link Frame Youtube</label>
                                            <input value={createLinkYt} onChange={(e) => setCreateLinkYt(e.target.value)} type="text" className="form-control" required />
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
                {/* menampilkan data */}
                <section>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col">
                                <div className="card p-3">
                                    <h3 className="text-secondary">Data</h3>
                                    <div className="mt-3">
                                        {listYt.length > 0 ? (
                                            <div className="row">
                                                {listYt.map((youtube) => (
                                                    <div key={youtube.uuid} className="col">
                                                        <iframe width="560" height="315" src={youtube.linkYoutube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                        <div className="row">
                                                            <div className="col mb-3 d-flex gap-2">
                                                                <button className="btn-sm btn-warning btn" onClick={() => openEditModal(youtube)}>Edit</button>
                                                                <button className="btn btn-sm btn-danger" onClick={() => deleteDataYt(youtube.uuid)} >Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="row">
                                                <div className="col">
                                                    <h1>no Dta</h1>
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    {/* edit */}
                    {
                        editYtModal && (
                            <div className="modal show fade d-block" tabIndex="-1">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <form onSubmit={editYtData}>
                                            <div className="modal-header">
                                                <h5>Edit Link Youtube</h5>
                                                <button type="button" onClick={() => setEditYtModal(false)} className="btn-close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="mb-3">
                                                    <label className="label-form">Link Youtube</label>
                                                    <input value={editLinkYt} onChange={(e) => setEditLinkYt(e.target.value)} type="text" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <button className="btn btn-primary btn-sm">Add Data</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </section>
            </div>
        </div>
    )
}

export default Youtube;