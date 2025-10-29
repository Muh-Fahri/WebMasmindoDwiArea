import React, { useState, useEffect } from "react";
import NavSide from "./navSide";
import axios from "axios";
import NoData from "../Error/NoData";
import handleUnauthorized from "./unouthorized";
import { useTranslation } from "react-i18next";
import DOMPurify from 'dompurify';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from "sweetalert2";



function Berita() {

    const [judulBerita, setJudulBerita] = useState("");
    const [judulBeritaEn, setJudulBeritaEn] = useState("");
    const [deskipBeritaEn, setDeskripBeritaEn] = useState("");
    const [deskipBerita, setDeskripBerita] = useState("");
    const [imgBerita, setImgBerita] = useState("");
    const [beritaList, setBeritaList] = useState([]);
    const token = localStorage.getItem('token');
    const { t, i18n } = useTranslation();

    // Modal 
    const [editModal, setEditModal] = useState(false);
    const [editId, setEditId] = useState("");
    const [editJudul, setEditJudul] = useState({ judul_berita_id: '', judul_berita_en: '' });
    const [editDeskrip, setEditDeskrip] = useState({ deskripsi_berita_id: '', deskripsi_berita_en: '' });
    const [editImg, setEditImg] = useState(null);



    const getBeritaData = async (showLoading = true) => {
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
            const response = await axios.get('http://127.0.0.1:8000/api/admin/berita/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setBeritaList(response.data.berita);
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
    useEffect(() => {
        getBeritaData();
    }, []);

    const addBeritaData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('judul_berita_id', judulBerita);
        formData.append('judul_berita_en', judulBeritaEn);
        formData.append('deskripsi_berita_id', deskipBerita);
        formData.append('deskripsi_berita_en', deskipBeritaEn);
        formData.append('image_berita', imgBerita);

        try {
            Swal.fire({
                title: 'Menyimpan data...',
                text: 'Harap tunggu sebentar',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });
            await axios.post("http://127.0.0.1:8000/api/admin/berita", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            setJudulBerita("");
            setJudulBeritaEn("");
            setDeskripBerita("");
            setDeskripBeritaEn("");
            setImgBerita("");
            await getBeritaData(false);
            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'Data tata kelola berhasil ditambahkan.',
                showConfirmButton: false,
                timer: 1800
            });
        } catch (error) {
            alert("Gagal Menambahkan Data");
        }
    };



    const editBeritaData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('judul_berita_id', editJudul.judul_berita_id);
        formData.append('judul_berita_en', editJudul.judul_berita_en);
        formData.append('deskripsi_berita_id', editDeskrip.deskripsi_berita_id);
        formData.append('deskripsi_berita_en', editDeskrip.deskripsi_berita_en);
        if (editImg) {
            formData.append('image_berita', editImg);
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
            await axios.post(`http://127.0.0.1:8000/api/admin/berita/${editId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            setEditJudul({ judul_berita_id: '', judul_berita_en: '' });
            setEditDeskrip({ deskripsi_berita_id: '', deskripsi_berita_en: '' });
            setEditImg(null);
            setEditModal(false);
            await getBeritaData(false);
            Swal.close();
            await Swal.fire({
                icon: "success",
                title: "Berhasil!",
                text: "Data alamat berhasil diperbarui.",
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
    };



    const deleteBeritaData = async (uuid) => {
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
            await axios.delete(`http://127.0.0.1:8000/api/admin/berita/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            await getBeritaData(false);
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


    function openEditModal(berita) {
        setEditJudul({
            judul_berita_id: berita.judul_berita_id,
            judul_berita_en: berita.judul_berita_en,
        });
        setEditDeskrip({
            deskripsi_berita_id: berita.deskripsi_berita_id,
            deskripsi_berita_en: berita.deskripsi_berita_en,
        });
        setEditImg(null);
        setEditId(berita.uuid);
        setEditModal(true);
    }



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
                        <div className="card p-3 text-white" style={{ backgroundColor: '#F16022' }}>
                            <h3>{t('berita_page_header_title')}</h3>
                        </div>
                        <div className="card mt-5 p-3">
                            <h5>{t('add_data_title')}</h5>
                            <form onSubmit={addBeritaData} encType="multipart/form-data">
                                <div className="p-2">
                                    <p>{t('berita_title_id_label')}</p>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={judulBerita}
                                        onChange={(e) => setJudulBerita(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="p-2">
                                    <p>{t('berita_title_en_label')}</p>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={judulBeritaEn}
                                        onChange={(e) => setJudulBeritaEn(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="p-2">
                                    <p>{t('berita_description_id_label')}</p>
                                    <p className="text-danger">{t('berita_image_warning')}</p>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={deskipBerita}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setDeskripBerita(data);
                                        }}
                                    />
                                </div>
                                <div className="p-2">
                                    <p>{t('berita_description_en_label')}</p>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={deskipBeritaEn}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setDeskripBeritaEn(data);
                                        }}
                                    />
                                </div>
                                <div className="p-2">
                                    <p>{t('berita_image_label')}</p>
                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <div className="p-2">
                                    <button className="btn btn-sm btn-secondary">{t('button_add_data')}</button>
                                </div>
                            </form>
                        </div>
                    </section>
                    <section>
                        <div className="row">
                            <div className="col">
                                <div className="card mt-5 p-3" style={{ backgroundColor: '#115258' }}>
                                    <div className="row">
                                        <div className="col text-white">
                                            <h3>{t('berita_data_header_title')}</h3> {/* Terjemahan untuk "Data" */}
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table mt-5">
                                        <thead className="table-light">
                                            <tr>
                                                <th>{t('table_no')}</th>
                                                <th>{t('table_berita_title_id')}</th>
                                                <th>{t('table_berita_title_en')}</th>
                                                <th>{t('table_berita_content_id')}</th>
                                                <th>{t('table_berita_content_en')}</th>
                                                <th>{t('table_berita_photo')}</th>
                                                <th>{t('table_action')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {beritaList.length > 0 ? (
                                                beritaList.map((berita, index) => (
                                                    <tr key={berita.uuid}>
                                                        <td>{index + 1}</td>
                                                        <td style={{ maxWidth: '150px' }}>
                                                            <div className="text-truncate">{berita.judul_berita_id}</div>
                                                        </td>
                                                        <td style={{ maxWidth: '150px' }}>
                                                            <div className="text-truncate">{berita.judul_berita_en}</div>
                                                        </td>
                                                        <td style={{ maxWidth: '200px' }}>
                                                            <div
                                                                className="text-truncate"
                                                                style={{
                                                                    maxHeight: '3.6em',
                                                                    overflow: 'hidden',
                                                                    textOverflow: 'ellipsis',
                                                                    whiteSpace: 'normal',
                                                                    display: '-webkit-box',
                                                                    WebkitLineClamp: 3,
                                                                    WebkitBoxOrient: 'vertical'
                                                                }}
                                                                dangerouslySetInnerHTML={{ __html: berita.deskripsi_berita_id }}
                                                            />
                                                        </td>
                                                        <td style={{ maxWidth: '200px' }}>
                                                            <div
                                                                className="text-truncate"
                                                                style={{
                                                                    maxHeight: '3.6em',
                                                                    overflow: 'hidden',
                                                                    textOverflow: 'ellipsis',
                                                                    whiteSpace: 'normal',
                                                                    display: '-webkit-box',
                                                                    WebkitLineClamp: 3,
                                                                    WebkitBoxOrient: 'vertical'
                                                                }}
                                                                dangerouslySetInnerHTML={{ __html: berita.deskripsi_berita_en }}
                                                            />
                                                        </td>
                                                        <td>
                                                            <img
                                                                src={`http://localhost:8000/Berita/${encodeURIComponent(berita.image_berita)}`}
                                                                alt={t('alt_text_news_image')}
                                                                style={{ width: "80px", height: "auto", objectFit: "cover" }}
                                                            />
                                                        </td>
                                                        <td>
                                                            <div className="d-flex flex-column flex-md-row gap-1">
                                                                <button className="btn btn-sm btn-warning d-flex align-items-center justify-content-center gap-1" onClick={() => openEditModal(berita)}>
                                                                    <span className="d-none d-md-inline">{t('edit_button')}</span>
                                                                    <i className="fas fa-edit d-md-none"></i>
                                                                </button>
                                                                <button className="btn btn-sm btn-danger d-flex align-items-center justify-content-center gap-1" onClick={() => deleteBeritaData(berita.uuid)}>
                                                                    <span className="d-none d-md-inline">{t('delete_button')}</span>
                                                                    <i className="fas fa-trash d-md-none"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="7" className="text-center text-muted py-3">
                                                        <NoData />
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        {editModal && (
                            <div className="modal show fade d-block" tabIndex="-1">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <form onSubmit={editBeritaData} encType="multipart/form-data">
                                            <div className="modal-header">
                                                <h5 className="modal-title">{t('edit_news_modal_title')}</h5>
                                                <button type="button" onClick={() => setEditModal(false)} className="btn-close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="mb-3">
                                                    <label className="form-label">{t('news_title_id_label')}</label>
                                                    <input
                                                        type="text"
                                                        value={editJudul.judul_berita_id}
                                                        onChange={(e) => setEditJudul(prev => ({ ...prev, judul_berita_id: e.target.value }))}
                                                        className="form-control"
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">{t('news_title_en_label')}</label>
                                                    <input
                                                        type="text"
                                                        value={editJudul.judul_berita_en}
                                                        onChange={(e) => setEditJudul(prev => ({ ...prev, judul_berita_en: e.target.value }))}
                                                        className="form-control"
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">{t('news_description_id_label')}</label>
                                                    <CKEditor
                                                        editor={ClassicEditor}
                                                        data={editDeskrip.deskripsi_berita_id}
                                                        onChange={(event, editor) => {
                                                            const data = editor.getData();
                                                            setEditDeskrip(prev => ({ ...prev, deskripsi_berita_id: data }));
                                                        }}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">{t('news_description_en_label')}</label>
                                                    <CKEditor
                                                        editor={ClassicEditor}
                                                        data={editDeskrip.deskripsi_berita_en}
                                                        onChange={(event, editor) => {
                                                            const data = editor.getData();
                                                            setEditDeskrip(prev => ({ ...prev, deskripsi_berita_en: data }));
                                                        }}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">{t('news_image_label_edit')}</label>
                                                    <input
                                                        type="file"
                                                        onChange={(e) => setEditImg(e.target.files[0])}
                                                        className="form-control"
                                                    />
                                                </div>
                                                {editJudul.image_berita && (
                                                    <div className="mb-3">
                                                        <label className="form-label">{t('current_image_label')}</label><br />
                                                        <img
                                                            src={`http://localhost:8000/Berita/${encodeURIComponent(editJudul.image_berita)}`}
                                                            alt="Preview"
                                                            style={{ width: "150px", borderRadius: "5px" }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="modal-footer">
                                                <button type="submit" className="btn btn-primary">
                                                    {t('button_save_changes')}
                                                </button>
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