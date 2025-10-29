import React, { useState, useEffect } from "react";
import axios from "axios";
import NavSide from "./navSide";
import handleUnauthorized from "./unouthorized";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

function Youtube() {
    const [listYt, setListYt] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');
    const { t } = useTranslation();
    const [createLinkYt, setCreateLinkYt] = useState("");
    const [editYtModal, setEditYtModal] = useState(false);
    const [editId, setEditId] = useState("");
    const [editLinkYt, setEditLinkYt] = useState("");

    useEffect(() => {
        getYtData();
    }, [token]);

    const getYtData = async (showLoading = true) => {
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
            const res = await axios.get("http://127.0.0.1:8000/api/admin/youtube", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setListYt(res.data.youtube);
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal memuat data',
                text: error.response?.data?.message || error.message,
            });
        } finally {
            if (showLoading) Swal.close();
        }
    };

    const createYtData = async (e) => {
        e.preventDefault();
        if (!createLinkYt.trim()) {
            alert(t('invalid_youtube_link'));
            return;
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
            await axios.post("http://127.0.0.1:8000/api/admin/youtube", { linkYoutube: createLinkYt }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setCreateLinkYt("");
            await getYtData(false);
            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'Data berhasil ditambahkan.',
                showConfirmButton: false,
                timer: 1800
            });
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal menyimpan data!',
                text: error.response?.data?.message || 'Terjadi kesalahan saat menyimpan data.',
                confirmButtonColor: '#d33',
            });
        }
    };

    const openEditModal = (youtube) => {
        setEditYtModal(true);
        setEditId(youtube.uuid);
        setEditLinkYt(youtube.linkYoutube);
    };

    const editYtData = async (e) => {
        e.preventDefault();
        if (!editLinkYt.trim()) {
            alert(t('invalid_youtube_link'));
            return;
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
            await axios.post(`http://127.0.0.1:8000/api/admin/youtube/${editId}`, { linkYoutube: editLinkYt }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setEditYtModal(false);
            await getYtData(false);
            await Swal.fire({
                icon: "success",
                title: "Berhasil!",
                text: "Data berhasil diperbarui.",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Gagal memperbarui data",
                text: err.response?.data?.message || err.message,
            });
        }
    };

    const deleteDataYt = async (uuid) => {
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
            await axios.delete(`http://127.0.0.1:8000/api/admin/youtube/delete/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            await getYtData(false);
            Swal.close()
            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'Data karir berhasil dihapus.',
                showConfirmButton: false,
                timer: 1800,
            });
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal menghapus data!',
                text: error.response?.data?.message || error.message,
            });
        }
    };

    return (
        <div style={{ display: 'flex' }}>
            <NavSide />
            <div className="flex-grow-1 p-3">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card text-white p-3" style={{ backgroundColor: '#F16022' }}>
                                    <h3>{t('youtube_page_title')}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <div className="card p-3">
                                    <div className="mb-3">
                                        <h3 className="text-success">{t('create_youtube_data_title')}</h3>
                                    </div>
                                    <form onSubmit={createYtData}>
                                        <div className="mb-3">
                                            <label htmlFor="youtubeFrameLink" className="form-label">{t('youtube_link_frame_label')}</label>
                                            <input
                                                value={createLinkYt}
                                                onChange={(e) => setCreateLinkYt(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="youtubeFrameLink"
                                                placeholder="e.g., https://www.youtube.com/embed/VIDEO_ID"
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <button type="submit" className="btn btn-sm p-2 text-white" style={{ backgroundColor: '#115258' }}>{t('add_youtube_data_button')}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col">
                                <div className="card p-3">
                                    <h3 className="text-secondary">{t('youtube_video_data_title')}</h3>
                                    <div className="mt-3">
                                        {loading ? (
                                            <div className="text-center py-5">
                                                <i className="fas fa-spinner fa-spin me-2"></i>
                                                {t('loading_message')}
                                            </div>
                                        ) : error ? (
                                            <div className="alert alert-danger">{error.message || "Failed to load data."}</div>
                                        ) : listYt.length > 0 ? (
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                                {listYt.map((youtube) => (
                                                    <div key={youtube.uuid} className="col">
                                                        <div className="card h-100">
                                                            <div className="embed-responsive embed-responsive-16by9" style={{ height: '200px' }}>
                                                                <iframe
                                                                    className="embed-responsive-item"
                                                                    src={youtube.linkYoutube.includes("watch?v=") ? youtube.linkYoutube.replace("watch?v=", "embed/") : youtube.linkYoutube}
                                                                    title="YouTube video player"
                                                                    frameBorder="0"
                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                                    allowFullScreen
                                                                    style={{ width: '100%', height: '100%' }}
                                                                ></iframe>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="d-flex flex-column flex-md-row gap-2 mt-2">
                                                                    <button
                                                                        className="btn btn-sm btn-warning d-flex align-items-center justify-content-center gap-1"
                                                                        onClick={() => openEditModal(youtube)}
                                                                    >
                                                                        <span className="d-none d-md-inline">{t('edit_button')}</span>
                                                                        <i className="fas fa-edit d-md-none"></i>
                                                                    </button>
                                                                    <button
                                                                        className="btn btn-sm btn-danger d-flex align-items-center justify-content-center gap-1"
                                                                        onClick={() => deleteDataYt(youtube.uuid)}
                                                                    >
                                                                        <span className="d-none d-md-inline">{t('delete_button_short')}</span>
                                                                        <i className="fas fa-trash d-md-none"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="row">
                                                <div className="col text-center text-muted py-5">
                                                    <h4>{t('no_youtube_data')}</h4>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {editYtModal && (
                    <div className="modal show fade d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <form onSubmit={editYtData}>
                                    <div className="modal-header">
                                        <h5 className="modal-title">{t('edit_youtube_link_title')}</h5>
                                        <button type="button" onClick={() => setEditYtModal(false)} className="btn-close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label htmlFor="modalYoutubeLink" className="label-form">{t('youtube_link_frame_label')}</label>
                                            <input
                                                value={editLinkYt}
                                                onChange={(e) => setEditLinkYt(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="modalYoutubeLink"
                                                placeholder="e.g., https://www.youtube.com/embed/VIDEO_ID"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary btn-sm">{t('update_button')}</button>
                                        <button type="button" className="btn btn-secondary btn-sm" onClick={() => setEditYtModal(false)}>{t('close_button')}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Youtube;