import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavSide from "./navSide";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import NoData from "../Error/NoData";


function Bisnis() {
    const [linkYt, setLinkYt] = useState("");
    const [deskrip, setDeskrip] = useState("");
    const [bisnisList, setBisnisList] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    // modal
    const [editModal, setEditModal] = useState(false);
    const [editId, setEditId] = useState("");
    const [editLink, setEditLink] = useState("");
    const [editDeskrip, setEditDeskrip] = useState("");

    const getBisnisData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/admin/bisnis', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setBisnisList(response.data.bisnis);
        } catch (error) {
            alert('Gagal Mengambil Data');
        }
    };

    useEffect(() => {
        getBisnisData();
    }, []);

    const addBisnisPage = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/admin/bisnis", {
                link_video: linkYt,
                deskripsi_bisnis: deskrip,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }

            });
            setLinkYt("");
            setDeskrip("");
            alert('Berhasil Menginput Data')
            getBisnisData();

        } catch (error) {
            alert('Gagal Menambahkan Data');
        }
    }

    const deleteBisnisData = async (uuid) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/admin/bisnis/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getBisnisData();
            alert('Berhasil Menghapus Data')
        } catch (error) {
            alert('Gagal Menghapus Data');
        }
    }


    const openEditModal = (bisnis) => {
        setEditModal(true);
        setEditId(bisnis.uuid);
        setEditLink(bisnis.link_video);
        setEditDeskrip(bisnis.deskripsi_bisnis);
    };


    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/admin/bisnis/${editId}`, {
                link_video: editLink,
                deskripsi_bisnis: editDeskrip,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setEditModal(false);
            getBisnisData();
            alert('Data berhasil diperbarui');
        } catch (error) {
            alert('Gagal mengedit data');
        }
    };



    return (
        <div>
            <NavSide />
            <div className="content" style={{ marginLeft: '260px', padding: '20px' }}>
                <section>
                    <div className="container-fluid p-3">
                        <div className="row">
                            <div className="col">
                                <div className="card bg-info p-3">
                                    <h3 className="text-white">Bisnis Page</h3>
                                </div>
                                <div className="card mt-5 p-5">
                                    <h3>Create Bisnis Page</h3>
                                    <form onSubmit={addBisnisPage}>
                                        <div className="p-3">
                                            <p>Link Youtube</p>
                                            <input type="text" className="form-control" value={linkYt} onChange={(e) => setLinkYt(e.target.value)} required />
                                        </div>
                                        <div className="p-3">
                                            <p>Deskripsi Halaman</p>
                                            <textarea type="text" className="form-control" value={deskrip} onChange={(e) => setDeskrip(e.target.value)} required></textarea>
                                        </div>
                                        <button className="btn btn-primary btn-sm">Add Data</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="p-3 container-fluid">
                        <div className="card bg-info p-3">
                            <h3 className="text-white">Data</h3>
                        </div>
                        <table className="table mt-5">
                            {bisnisList.length > 0 && (
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Link Youtube</th>
                                        <th>Deskripsi Halaman</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                            )}
                            <tbody>
                                {bisnisList.length > 0 ? (
                                    bisnisList.map((bisnis, index) => (
                                        <tr key={bisnis.uuid}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <iframe
                                                    width="200"
                                                    height="113"
                                                    src={bisnis.link_video.replace("watch?v=", "embed/")}
                                                    title="YouTube video"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            </td>
                                            <td>{bisnis.deskripsi_bisnis}</td>
                                            <td>
                                                <div className="row">
                                                    <div className="col d-flex gap-3">
                                                        <button className="btn btn-sm btn-warning d-flex align-items-center gap-1" onClick={() => openEditModal(bisnis)}>
                                                            Edit <FontAwesomeIcon icon={faPencilAlt} />
                                                        </button>
                                                        <button className="btn btn-sm d-flex align-items-center gap-1 btn-danger" onClick={() => deleteBisnisData(bisnis.uuid)}>Delete <FontAwesomeIcon icon={faTrash} /></button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <NoData />
                                    </tr>
                                )}
                            </tbody>
                        </table>

                    </div>
                </section>
                <section>
                    {editModal && (
                        <div className="modal show fade d-block" tabIndex="-1">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <form onSubmit={handleEditSubmit}>
                                        <div className="modal-header">
                                            <h5 className="modal-title">Edit Data Bisnis</h5>
                                            <button type="button" className="btn-close" onClick={() => setEditModal(false)}></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="mb-3">
                                                <label className="form-label">Link Youtube</label>
                                                <input type="text" className="form-control" value={editLink} onChange={(e) => setEditLink(e.target.value)} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Deskripsi</label>
                                                <textarea className="form-control" value={editDeskrip} onChange={(e) => setEditDeskrip(e.target.value)}></textarea>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={() => setEditModal(false)}>Tutup</button>
                                            <button type="submit" className="btn btn-primary">Simpan Perubahan</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </div >
    )
}
export default Bisnis;