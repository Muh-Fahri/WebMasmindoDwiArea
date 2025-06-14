import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavSide from "./navSide";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import NoData from "../Error/NoData";
import handleUnauthorized from "./unouthorized";
import { useTranslation } from "react-i18next";
import DOMPurify from 'dompurify';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function Bisnis() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const { t, i18n } = useTranslation();
    const [linkYt, setLinkYt] = useState("");
    const [deskrip_id, setDeskrip_id] = useState("");
    const [deskrip_en, setDeskrip_en] = useState("");
    const [bisnisList, setBisnisList] = useState([]);
    const [displayedBisnis, setDisplayedBisnis] = useState(null);
    const [editModal, setEditModal] = useState(false);
    const [editId, setEditId] = useState("");
    const [editLink, setEditLink] = useState("");
    const [editDeskrip_id, setEditDeskrip_id] = useState("");
    const [editDeskrip_en, setEditDeskrip_en] = useState("");
    const [notification, setNotification] = useState({
        show: false,
        message: "",
        type: ""
    });
    const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const showNotification = (message, type) => {
        setNotification({ show: true, message, type });
        setTimeout(() => {
            setNotification({ show: false, message: "", type: "" });
        }, 3000);
    };
    const getBisnisData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/admin/bisnis', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setBisnisList(response.data.bisnis);
            if (response.data.bisnis && response.data.bisnis.length > 0) {
                setDisplayedBisnis(response.data.bisnis[0]);
            } else {
                setDisplayedBisnis(null);
            }
        } catch (error) {
            handleUnauthorized(error, navigate);
            showNotification('Gagal memuat data bisnis.', 'error');
        }
    };

    useEffect(() => {
        getBisnisData();
    }, []);
    const sanitizedDisplayedDescriptionId = displayedBisnis
        ? DOMPurify.sanitize(displayedBisnis.deskripsi_bisnis_id || '')
        : '';
    const sanitizedDisplayedDescriptionEn = displayedBisnis
        ? DOMPurify.sanitize(displayedBisnis.deskripsi_bisnis_en || '')
        : '';
    const addBisnisPage = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/admin/bisnis", {
                link_video: linkYt,
                deskripsi_bisnis_id: deskrip_id,
                deskripsi_bisnis_en: deskrip_en,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setLinkYt("");
            setDeskrip_id("");
            setDeskrip_en("");
            showNotification('Berhasil Menginput Data', 'success');
            getBisnisData();
        } catch (error) {
            showNotification('Gagal Menambahkan Data', 'error');
        }
    };

    const handleDeleteClick = (uuid) => {
        setItemToDelete(uuid);
        setConfirmDeleteModal(true);
    };

    const confirmDeleteAction = async () => {
        setConfirmDeleteModal(false);
        if (!itemToDelete) return;

        try {
            await axios.delete(`http://127.0.0.1:8000/api/admin/bisnis/${itemToDelete}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getBisnisData();
            showNotification('Berhasil Menghapus Data', 'success');
            setItemToDelete(null);
        } catch (error) {
            showNotification('Gagal Menghapus Data', 'error');
            console.error('Error deleting data:', error);
        }
    };
    const openEditModal = (bisnisItem) => {
        setEditModal(true);
        setEditId(bisnisItem.uuid);
        setEditLink(bisnisItem.link_video);
        setEditDeskrip_id(bisnisItem.deskripsi_bisnis_id || '');
        setEditDeskrip_en(bisnisItem.deskripsi_bisnis_en || '');
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://127.0.0.1:8000/api/admin/bisnis/${editId}`, {
                link_video: editLink,
                deskripsi_bisnis_id: editDeskrip_id,
                deskripsi_bisnis_en: editDeskrip_en,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setEditModal(false);
            getBisnisData();
            showNotification('Data berhasil diperbarui', 'success');
        } catch (error) {
            showNotification('Gagal mengedit data', 'error');
            console.error('Error editing data:', error);
        }
    };

    return (
        <div className="d-flex flex-column flex-md-row">
            <div style={{ width: '260px', flexShrink: 0 }} className="flex-grow-1 flex-md-grow-0">
                <NavSide />
            </div>
            <div className="flex-grow-1 content px-3 px-md-5 pt-5 mt-md-0" style={{ marginLeft: '0', overflowX: 'hidden' }}>
                <section>
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col">
                                <div className="card p-3" style={{ backgroundColor: '#F16022' }}>
                                    <h3 className="text-white">{t('bisnis_page_header_title')}</h3>
                                </div>
                                <div className="card mt-5 p-3 p-md-5">
                                    <h3>{t('create_bisnis_page_title')}</h3>
                                    <form onSubmit={addBisnisPage}>
                                        <div className="mb-3">
                                            <label htmlFor="linkYoutube" className="form-label">
                                                {t('form_label_youtube_link')}
                                            </label>
                                            <input
                                                type="text"
                                                id="linkYoutube"
                                                className="form-control"
                                                value={linkYt}
                                                onChange={(e) => setLinkYt(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="deskripsiHalaman_id" className="form-label">
                                                {t('form_label_description_id')}
                                            </label>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={deskrip_id}
                                                onChange={(event, editor) => {
                                                    const data = editor.getData();
                                                    setDeskrip_id(data);
                                                }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="deskripsiHalaman_en" className="form-label">
                                                {t('form_label_description_en')}
                                            </label>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={deskrip_en}
                                                onChange={(event, editor) => {
                                                    const data = editor.getData();
                                                    setDeskrip_en(data);
                                                }}
                                            />
                                        </div>

                                        <button style={{ backgroundColor: '#115258', color: 'white' }} type="submit" className="btn btn-sm p-2">
                                            {t('button_add_data')}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-5">
                    <div className="container-fluid p-0">

                        <div className="card p-3" style={{ backgroundColor: '#115258' }}>
                            <h3 className="text-white">{t('data_title')}</h3>
                        </div>
                        <div className="table-responsive">
                            <section>
                                <div className="card p-3">
                                    <h3 className="mb-3">Data</h3>
                                    {/* Tambahkan div dengan className="table-responsive" di sini */}
                                    <div className="table-responsive">
                                        <table className="table mt-5">
                                            {/* Thead seharusnya selalu ada, terlepas dari data */}
                                            <thead className="table-light"> {/* Tambahkan table-light untuk warna header */}
                                                <tr>
                                                    <th className="fs-7 fs-md-5">No</th> {/* t('table_no') */}
                                                    <th className="fs-7 fs-md-5">Link YouTube</th> {/* t('table_youtube_link') */}
                                                    <th className="fs-7 fs-md-5">Deskripsi Halaman</th> {/* t('table_page_description') */}
                                                    <th className="fs-7 fs-md-5">Aksi</th> {/* t('table_action') */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {bisnisList.length > 0 ? (
                                                    bisnisList.map((bisnisItem, index) => (
                                                        <tr key={bisnisItem.uuid}>
                                                            <td className="fs-7 fs-md-5">{index + 1}</td>
                                                            <td>
                                                                {/* Mempertahankan iframe dengan maxWidth yang kecil agar tidak terlalu memakan tempat */}
                                                                <div className="ratio ratio-16x9 mx-auto" style={{ maxWidth: '120px' }}> {/* Sedikit perbesar agar thumbnail video lebih jelas */}
                                                                    <iframe
                                                                        src={
                                                                            bisnisItem.link_video
                                                                                ? bisnisItem.link_video.replace("watch?v=", "embed/")
                                                                                : ""
                                                                        }
                                                                        title="YouTube video"
                                                                        frameBorder="0"
                                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                        allowFullScreen
                                                                    ></iframe>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                {/* Pastikan text-truncate-custom dan description-limit diatur di CSS Anda */}
                                                                <div
                                                                    className="text-truncate-custom fs-7 fs-md-5 description-limit"
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: i18n.language === 'id'
                                                                            ? DOMPurify.sanitize(bisnisItem.deskripsi_bisnis_id)
                                                                            : DOMPurify.sanitize(bisnisItem.deskripsi_bisnis_en)
                                                                    }}
                                                                />
                                                            </td>
                                                            <td>
                                                                {/* Tombol aksi akan menumpuk di layar kecil, itu sudah cukup baik */}
                                                                <div className="d-flex flex-column flex-md-row gap-1">
                                                                    <button
                                                                        className="btn btn-warning btn-sm d-flex align-items-center justify-content-center gap-1"
                                                                        onClick={() => openEditModal(bisnisItem)}
                                                                    >
                                                                        <span className="d-none d-md-inline">{t('edit_button')}</span>
                                                                        {/* Asumsi FontAwesomeIcon diimport */}
                                                                        {/* <FontAwesomeIcon icon={faPencilAlt} /> */}
                                                                        {/* Jika tidak ada FontAwesome, bisa pakai teks singkat atau ikon SVG */}
                                                                        <i className="fas fa-edit d-md-none"></i> {/* Contoh ikon untuk mobile */}
                                                                    </button>

                                                                    <button
                                                                        className="btn btn-danger btn-sm d-flex align-items-center justify-content-center gap-1"
                                                                        onClick={() => handleDeleteClick(bisnisItem.uuid)}
                                                                    >
                                                                        <span className="d-none d-md-inline">{t('delete_button')}</span>
                                                                        {/* Asumsi FontAwesomeIcon diimport */}
                                                                        {/* <FontAwesomeIcon icon={faTrash} /> */}
                                                                        <i className="fas fa-trash d-md-none"></i> {/* Contoh ikon untuk mobile */}
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        {/* colSpan harus sesuai dengan jumlah kolom di thead (saat ini 4) */}
                                                        <td colSpan="4" className="text-center text-muted py-3">
                                                            <NoData /> {/* Asumsi NoData adalah komponen */}
                                                            {`Tidak ada data bisnis. `} {/* Tambahkan fallback text */}
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>

                <section>
                    {editModal && (
                        <div className="modal show fade d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <div className="modal-dialog modal-dialog-centered modal-lg"> {/* Menambahkan modal-lg untuk ukuran yang lebih besar */}
                                <div className="modal-content">
                                    <form onSubmit={handleEditSubmit}>
                                        <div className="modal-header">
                                            <h5 className="modal-title">{t('edit_modal_title')}</h5>
                                            <button type="button" className="btn-close" onClick={() => setEditModal(false)}></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="mb-3">
                                                <label htmlFor="editLinkYoutube" className="form-label">
                                                    {t('form_label_youtube_link')}
                                                </label>
                                                <input
                                                    type="text"
                                                    id="editLinkYoutube"
                                                    className="form-control"
                                                    value={editLink}
                                                    onChange={(e) => setEditLink(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="editDeskripsiId" className="form-label">Deskripsi (ID)</label>
                                                <div className="custom-editor">
                                                    <CKEditor
                                                        editor={ClassicEditor}
                                                        data={editDeskrip_id}
                                                        onChange={(event, editor) => {
                                                            const data = editor.getData();
                                                            setEditDeskrip_id(data);
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="editDeskripsiEn" className="form-label">
                                                    {t('form_label_description_en')}
                                                </label>
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={editDeskrip_en}
                                                    onChange={(event, editor) => {
                                                        const data = editor.getData();
                                                        setEditDeskrip_en(data);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                onClick={() => setEditModal(false)}
                                            >
                                                {t('admin_close_button')}
                                            </button>
                                            <button style={{ backgroundColor: "#5C522A", color: 'white' }} type="submit" className="btn">
                                                {t('admin_save_changes_button')}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
                {confirmDeleteModal && (
                    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{t('confirm_delete_title')}</h5>
                                    <button type="button" className="btn-close" onClick={() => setConfirmDeleteModal(false)} aria-label="Close">
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>{t('confirm_delete_message')}</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setConfirmDeleteModal(false)}>
                                        {t('admin_cancel_button')}
                                    </button>
                                    <button type="button" className="btn btn-danger" onClick={confirmDeleteAction}>
                                        {t('admin_delete_button')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}
export default Bisnis;
