import React, { useState, useEffect } from "react";
import NavSide from "./navSide";
import axios from "axios";
import moment from "moment";
import NoData from "../Error/NoData";
import { useTranslation } from "react-i18next";
import DOMPurify from 'dompurify';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from "sweetalert2";



function Lingkungan() {
    useEffect(() => {
        getDeskripData();
    }, []);

    useEffect(() => {
        getImgLingData();
    }, []);

    const [deskripsi, setDeskripsiHalaman] = useState({
        deskripsi_halaman_id: "",
        deskripsi_halaman_en: ""
    });
    const handleUnauthorized = () => {
        window.location.href = '/Login-admin-123'
    };
    const [deskripList, setDeskripList] = useState([]);
    const [imgList, setImgList] = useState([]);
    const token = localStorage.getItem('token');
    const { t, i18n } = useTranslation();
    const [editDeskripsiModal, setEditDeskripsiModal] = useState(false);
    const [editDokumentasiModal, setEditDokumentasiModal] = useState(false);
    const [editId, setEditId] = useState("");
    const [imgLing, setImgLing] = useState("");
    const [editDeskrId, setEditDeskrId] = useState("");
    const [editDeskrEn, setEditDeskrEn] = useState("");


    const getDeskripData = async (showLoading = true) => {
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
            const desLing = await axios.get("http://127.0.0.1:8000/api/admin/esg/lingkungan/deskripLingkungan/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setDeskripList(desLing.data.deskrip);
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
    const getImgLingData = async () => {
        try {
            const imgLing = await axios.get("http://127.0.0.1:8000/api/admin/esg/lingkungan/imgLingkungan/", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setImgList(imgLing.data.imgLing);
            getImgLingData();
        } catch (error) {
            handleUnauthorized(error);
        }
    }
    const editDokData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image_lingkungan', imgLing);

        try {
            Swal.fire({
                title: 'Menyimpan data...',
                text: 'Harap tunggu sebentar',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });
            await axios.post(`http://127.0.0.1:8000/api/admin/esg/lingkungan/imgLingkungan/${editId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            setImgLing(null);
            setEditDokumentasiModal(false);
            await getImgLingData(false);
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
    const opendEditModal = (dok) => {
        setEditDokumentasiModal(true);
        setEditId(dok.uuid);
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImgLing(file);
    };

    const openEditModal = (deskrLing) => {
        setEditDeskripsiModal(true);
        setEditId(deskrLing.uuid);
        setEditDeskrId(deskrLing.deskripsi_halaman_id);
        setEditDeskrEn(deskrLing.deskripsi_halaman_en);
    };


    const editDeskData = async (e) => {
        e.preventDefault();
        try {
            Swal.fire({
                title: 'Menyimpan data...',
                text: 'Harap tunggu sebentar',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });
            await axios.put(`http://127.0.0.1:8000/api/admin/esg/lingkungan/deskripLingkungan/${editId}`, {
                deskripsi_halaman_id: editDeskrId,
                deskripsi_halaman_en: editDeskrEn
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setEditDeskripsiModal(false);
            await getDeskripData(false);
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

    const addDeskData = async (e) => {
        e.preventDefault();
        try {
            Swal.fire({
                title: 'Menyimpan data...',
                text: 'Harap tunggu sebentar',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });
            await axios.post('http://127.0.0.1:8000/api/admin/esg/lingkungan/deskripLingkungan', {
                deskripsi_halaman_id: deskripsi.deskripsi_halaman_id,
                deskripsi_halaman_en: deskripsi.deskripsi_halaman_en,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            setDeskripsiHalaman({ deskripsi_halaman_id: "", deskripsi_halaman_en: "" });
            await getDeskripData(false);
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
    };


    const addDokumentasi = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image_lingkungan', imgLing);

        try {
            Swal.fire({
                title: 'Menyimpan data...',
                text: 'Harap tunggu sebentar',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });
            await axios.post("http://127.0.0.1:8000/api/admin/esg/lingkungan/imgLingkungan", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setImgLing("");
            await getImgLingData();
            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'Data tata kelola berhasil ditambahkan.',
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
    };

    const deleteDeskripData = async (uuid) => {
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
            await axios.delete(`http://127.0.0.1:8000/api/admin/esg/lingkungan/deskripLingkungan/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            await getDeskripData(false);
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
    };

    const deleteDokumentasi = async (uuid) => {
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
            await axios.delete(`http://127.0.0.1:8000/api/admin/esg/lingkungan/imgLingkungan/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            await getImgLingData(false);
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
                                <div className="card p-3 text-white" style={{ backgroundColor: '#F16022' }}>
                                    <div className="mb-3">
                                        <h3>{t('esg_environment_page_title')}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card p-3 mt-5">
                                    <h4 className="text-success">{t('create_description_data_title')}</h4>
                                    <p>
                                        <span className="text-info">{t('notice_label')}</span>{' '}
                                        {t('single_description_entry_warning')}
                                    </p>
                                    <form onSubmit={addDeskData}>
                                        <div className="mb-3">
                                            <label className="form-label">{t('page_description_id_label')}</label>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={deskripsi.deskripsi_halaman_id}
                                                onChange={(event, editor) => {
                                                    const data = editor.getData();
                                                    setDeskripsiHalaman(prev => ({
                                                        ...prev,
                                                        deskripsi_halaman_id: data
                                                    }));
                                                }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">{t('page_description_en_label')}</label>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={deskripsi.deskripsi_halaman_en}
                                                onChange={(event, editor) => {
                                                    const data = editor.getData();
                                                    setDeskripsiHalaman(prev => ({
                                                        ...prev,
                                                        deskripsi_halaman_en: data
                                                    }));
                                                }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <button style={{ backgroundColor: '#115258' }} className="btn text-white p-2 btn-sm">{t('button_add_data')}</button>
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
                                    <h3>{t('page_description_data_title')}</h3>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>{t('page_description_id_label')}</th>
                                                    <th>{t('page_description_en_label')}</th>
                                                    <th>{t('action_label')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {deskripList.length > 0 ? (
                                                    deskripList.map((deskrLing) => (
                                                        <tr key={deskrLing.uuid}>
                                                            <td style={{ maxWidth: '300px' }}>
                                                                <div
                                                                    style={{
                                                                        whiteSpace: 'normal',
                                                                        maxHeight: '4.5em',
                                                                        overflow: 'hidden',
                                                                        textOverflow: 'ellipsis',
                                                                        display: '-webkit-box',
                                                                        WebkitLineClamp: 3,
                                                                        WebkitBoxOrient: 'vertical'
                                                                    }}
                                                                    dangerouslySetInnerHTML={{ __html: deskrLing.deskripsi_halaman_id }}
                                                                />
                                                            </td>
                                                            <td style={{ maxWidth: '300px' }}>
                                                                <div
                                                                    style={{
                                                                        whiteSpace: 'normal',
                                                                        maxHeight: '4.5em',
                                                                        overflow: 'hidden',
                                                                        textOverflow: 'ellipsis',
                                                                        display: '-webkit-box',
                                                                        WebkitLineClamp: 3,
                                                                        WebkitBoxOrient: 'vertical'
                                                                    }}
                                                                    dangerouslySetInnerHTML={{ __html: deskrLing.deskripsi_halaman_en }}
                                                                />
                                                            </td>
                                                            <td>
                                                                <div className="d-flex flex-column flex-md-row gap-1">
                                                                    <button
                                                                        onClick={() => openEditModal(deskrLing)}
                                                                        className="btn btn-warning btn-sm"
                                                                    >
                                                                        {t('button_edit')}
                                                                    </button>
                                                                    <button
                                                                        onClick={() => deleteDeskripData(deskrLing.uuid)}
                                                                        className="btn btn-danger btn-sm"
                                                                    >
                                                                        {t('button_delete')}
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="3" className="text-center text-muted py-3">
                                                            {typeof NoData === 'function' ? <NoData /> : 'Tidak ada data deskripsi halaman.'}
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
                    {editDeskripsiModal && (
                        <div className="modal show fade d-block" tabIndex="-1">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <form onSubmit={editDeskData}>
                                        <div className="modal-header">
                                            <h5 className="modal-title">{t('edit_description_modal_title')}</h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                onClick={() => setEditDeskripsiModal(false)}
                                            ></button>
                                        </div>

                                        <div className="modal-body">
                                            {/* Deskripsi Bahasa Indonesia */}
                                            <div className="mb-3">
                                                <label className="form-label">{t('page_description_id_label')}</label>
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={editDeskrId || ""}
                                                    onChange={(event, editor) => {
                                                        const data = editor.getData();
                                                        setEditDeskrId(data);
                                                    }}
                                                />
                                            </div>

                                            {/* Deskripsi Bahasa Inggris */}
                                            <div className="mb-3">
                                                <label className="form-label">{t('page_description_en_label')}</label>
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={editDeskrEn || ""}
                                                    onChange={(event, editor) => {
                                                        const data = editor.getData();
                                                        setEditDeskrEn(data);
                                                    }}
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <button
                                                    type="submit"
                                                    className="btn btn-sm text-white"
                                                    style={{ backgroundColor: "#F16022" }}
                                                >
                                                    {t('button_save_changes')}
                                                </button>
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
                                    <h3 className="text-success">{t('create_documentation_data_title')}</h3>
                                    <form onSubmit={addDokumentasi}>
                                        <div className="mb-3">
                                            <p>{t('documentation_label')}</p>
                                            <input type="file" className="form-control" onChange={handleFileChange} />
                                        </div>
                                        <div className="mb-3">
                                            <button style={{ backgroundColor: "#115258" }} className="btn btn-sm p-2 text-white">{t('button_add_data')}</button>
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
                                    <h3>{t('activity_documentation_data_title')}</h3>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>{t('documentation_label')}</th>
                                                    <th>{t('created_at_label')}</th>
                                                    <th>{t('updated_at_label')}</th>
                                                    <th>{t('action_label')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {imgList.length > 0 ? (
                                                    imgList.map((dok) => (
                                                        <tr key={dok.uuid}>
                                                            <td>
                                                                <img
                                                                    src={`http://localhost:8000/Lingkungan/${dok.image_lingkungan}`}
                                                                    alt={t('documentation_alt_text')}
                                                                    style={{ maxWidth: "100px", height: "auto", objectFit: "contain" }}
                                                                    className="img-fluid"
                                                                />
                                                            </td>
                                                            <td className="text-success text-nowrap fs-7 fs-md-6">{moment(dok.created_at).format('DD-MM-YYYY')}</td>
                                                            <td className="text-success text-nowrap fs-7 fs-md-6">{moment(dok.updated_at).format('DD-MM-YYYY')}</td>
                                                            <td>
                                                                <div className="d-flex flex-column flex-md-row gap-1">
                                                                    <button
                                                                        onClick={() => opendEditModal(dok)}
                                                                        className="btn btn-warning btn-sm"
                                                                    >
                                                                        {t('button_edit')}
                                                                    </button>
                                                                    <button
                                                                        onClick={() => deleteDokumentasi(dok.uuid)}
                                                                        className="btn btn-danger btn-sm"
                                                                    >
                                                                        {t('button_delete')}
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="4" className="text-center text-muted py-3">
                                                            {typeof NoData === 'function' ? <NoData /> : 'Tidak ada data dokumentasi.'}
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
                    {editDokumentasiModal && (
                        <div className="modal show fade d-block" tabIndex="-1">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <form onSubmit={editDokData}>
                                        <div className="modal-header">
                                            <h5 className="modal-title">{t('edit_documentation_modal_title')}</h5>
                                            <button type="button" onClick={() => setEditDokumentasiModal(false)} className="btn-close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="mb-3">
                                                <label className="form-label">{t('documentation_label')}</label>
                                                <input onChange={handleFileChange} type="file" className="form-control" />
                                            </div>
                                            <div className="mb-3">
                                                <button className="btn btn-sm btn-primary">{t('button_save_changes')}</button>
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