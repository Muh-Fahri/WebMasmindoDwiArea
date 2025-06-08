import React, { useState, useEffect } from "react";
import NavSide from "./navSide";
import axios from "axios";
import EmbedInstagram from "./embedIg";
import NoData from "../Error/NoData";
import handleUnauthorized from "./unouthorized";

function Instagram() {
    const [instagramList, setInstagramList] = useState([]);
    const [linkIg, setLinkIg] = useState("");
    const token = localStorage.getItem('token');

    // modal
    const [editIgModal, setEditIgModal] = useState(false);
    const [editId, setEditId] = useState("");
    const [modlLinkIg, setModlLinkIg] = useState("");

    // Tambah state untuk loading dan error (optional)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (window.instgrm && window.instgrm.Embeds) {
            window.instgrm.Embeds.process();
        }
    }, []);

    useEffect(() => {
        getInstagramData();
    }, []);

    // Fungsi untuk handle error 401

    const createInstagramData = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/admin/instagram", {
                linkInstagram: linkIg
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setLinkIg("");
            getInstagramData();
            alert("Berhasil Menambahkan Data");
        } catch (error) {
            alert("Error");
        }
    };

    const getInstagramData = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/admin/instagram", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setInstagramList(res.data.instagram);
            setLoading(false);
        } catch (error) {
            handleUnauthorized(error);
        }
    };

    const updateInstagramData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('linkInstagram', modlLinkIg);

        try {
            await axios.post(`http://127.0.0.1:8000/api/admin/instagram/${editId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            setModlLinkIg("");
            setEditIgModal(false);
            getInstagramData();
            alert('Edit Data Sukses');
        } catch (error) {
            if (error.response && error.response.status === 401) {
                handleUnauthorized();
            } else {
                alert('Gagal Mengubah Data');
            }
        }
    };

    const openEditModalIg = (instagram) => {
        setEditIgModal(true);
        setEditId(instagram.uuid);
        setModlLinkIg(instagram.linkInstagram);
    }

    const deleteInstagramData = async (uuid) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/admin/instagram/delete/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getInstagramData();
            alert('Berhasil Menghapus Data');
        } catch (error) {
            if (error.response && error.response.status === 401) {
                handleUnauthorized();
            } else {
                alert('Gagal Menghapus Data');
            }
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
                                <div className="card text-white p-3" style={{ backgroundColor: '#F16022' }}>
                                    <h3>Halaman Instagram</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <div className="card p-3">
                                    <h3 className="text-secondary">Create Data</h3>
                                    <form onSubmit={createInstagramData}>
                                        <div className="mb-3">
                                            <label className="form-label">Link Intagram</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={linkIg}
                                                onChange={(e) => setLinkIg(e.target.value)}
                                            />
                                        </div>
                                        <button className="btn btn-sm text-white p-2" style={{ backgroundColor: '#115258' }}>Add Data</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col">
                                <div className="card p-3">
                                    <div className="mb-5">
                                        <h3 className="text-secondary">Data Postingan</h3>
                                    </div>
                                    {loading && <div>Loading...</div>}
                                    {!loading && !error && (instagramList.length > 0 ? (
                                        <div className="row">
                                            {instagramList.map((instagram) => (
                                                <div key={instagram.uuid} className="col-md-4 mb-4">
                                                    <EmbedInstagram url={instagram.linkInstagram} />
                                                    <div className="mt-2">
                                                        <button className="btn btn-sm btn-warning me-2" onClick={() => openEditModalIg(instagram)}>Edit</button>
                                                        <button className="btn btn-sm btn-danger" onClick={() => deleteInstagramData(instagram.uuid)}>Delete</button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <NoData />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    {editIgModal && (
                        <div className="modal show fade d-block" tabIndex="-1">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <form onSubmit={updateInstagramData}>
                                        <div className="modal-header">
                                            <h5 className="modal-title">Edit Data</h5>
                                            <button type="button" className="btn-close" onClick={() => setEditIgModal(false)}></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="mb-3">
                                                <label className="form-label">Link Instagram</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={modlLinkIg}
                                                    onChange={(e) => setModlLinkIg(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="submit" className="btn btn-primary">Update</button>
                                            <button type="button" className="btn btn-secondary" onClick={() => setEditIgModal(false)}>Tutup</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}

export default Instagram;
