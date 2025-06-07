import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavSide from "./navSide"; // Asumsi path ini benar, pastikan file navSide.js ada di lokasi yang sama
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import NoData from "../Error/NoData"; // Asumsi path ini benar, pastikan file NoData.js ada di path relatif ini
import handleUnauthorized from "./unouthorized"; // Asumsi path ini benar, pastikan file unouthorized.js ada di lokasi yang sama
import { useTranslation } from "react-i18next";
import DOMPurify from 'dompurify';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function Bisnis() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const { t, i18n } = useTranslation();

    // State untuk data input formulir "Tambah Bisnis Baru"
    const [linkYt, setLinkYt] = useState("");
    const [deskrip_id, setDeskrip_id] = useState("");
    const [deskrip_en, setDeskrip_en] = useState("");

    // State untuk daftar bisnis yang diambil dari API
    const [bisnisList, setBisnisList] = useState([]);
    // State untuk item bisnis yang sedang ditampilkan (misal: yang pertama di daftar)
    const [displayedBisnis, setDisplayedBisnis] = useState(null);

    // State untuk Modal Edit
    const [editModal, setEditModal] = useState(false);
    const [editId, setEditId] = useState("");
    const [editLink, setEditLink] = useState("");
    const [editDeskrip_id, setEditDeskrip_id] = useState(""); // Untuk CKEditor di modal edit
    const [editDeskrip_en, setEditDeskrip_en] = useState(""); // Untuk CKEditor di modal edit

    // State untuk pesan notifikasi (alert kustom)
    const [notification, setNotification] = useState({
        show: false,
        message: "",
        type: "" // 'success' atau 'error'
    });

    // State untuk modal konfirmasi penghapusan kustom
    const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null); // Menyimpan UUID item yang akan dihapus

    // Fungsi untuk menampilkan notifikasi kustom
    const showNotification = (message, type) => {
        setNotification({ show: true, message, type });
        setTimeout(() => {
            setNotification({ show: false, message: "", type: "" });
        }, 3000); // Notifikasi akan hilang setelah 3 detik
    };

    // --- Fetch Data Bisnis ---
    const getBisnisData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/admin/bisnis', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setBisnisList(response.data.bisnis);
            // Set displayedBisnis ke item pertama jika ada
            if (response.data.bisnis && response.data.bisnis.length > 0) {
                setDisplayedBisnis(response.data.bisnis[0]);
            } else {
                setDisplayedBisnis(null); // Tidak ada data
            }
        } catch (error) {
            handleUnauthorized(error, navigate); // Pastikan navigate dilewatkan jika diperlukan
            showNotification('Gagal memuat data bisnis.', 'error');
        }
    };

    useEffect(() => {
        getBisnisData();
    }, []);

    // --- Sanitasi Deskripsi untuk Tampilan ---
    // Variabel ini didefinisikan setelah state, dan hanya akan dievaluasi setelah
    // displayedBisnis memiliki nilai.
    const sanitizedDisplayedDescriptionId = displayedBisnis
        ? DOMPurify.sanitize(displayedBisnis.deskripsi_bisnis_id || '')
        : '';
    const sanitizedDisplayedDescriptionEn = displayedBisnis
        ? DOMPurify.sanitize(displayedBisnis.deskripsi_bisnis_en || '')
        : '';

    // --- Tambah Bisnis Baru ---
    const addBisnisPage = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/admin/bisnis", {
                link_video: linkYt,
                deskripsi_bisnis_id: deskrip_id, // Konten HTML dari CKEditor
                deskripsi_bisnis_en: deskrip_en, // Konten HTML dari CKEditor
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setLinkYt("");
            setDeskrip_id(""); // Reset CKEditor input
            setDeskrip_en(""); // Reset CKEditor input
            showNotification('Berhasil Menginput Data', 'success');
            getBisnisData(); // Refresh data
        } catch (error) {
            showNotification('Gagal Menambahkan Data', 'error');
            console.error('Error adding data:', error);
        }
    };

    // --- Hapus Data Bisnis (Menggunakan Modal Konfirmasi Kustom) ---
    const handleDeleteClick = (uuid) => {
        setItemToDelete(uuid);
        setConfirmDeleteModal(true);
    };

    const confirmDeleteAction = async () => {
        setConfirmDeleteModal(false); // Tutup modal konfirmasi
        if (!itemToDelete) return;

        try {
            await axios.delete(`http://127.0.0.1:8000/api/admin/bisnis/${itemToDelete}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getBisnisData();
            showNotification('Berhasil Menghapus Data', 'success');
            setItemToDelete(null); // Reset item yang akan dihapus
        } catch (error) {
            showNotification('Gagal Menghapus Data', 'error');
            console.error('Error deleting data:', error);
        }
    };

    // --- Modal Edit ---
    const openEditModal = (bisnisItem) => {
        setEditModal(true);
        setEditId(bisnisItem.uuid);
        setEditLink(bisnisItem.link_video);
        setEditDeskrip_id(bisnisItem.deskripsi_bisnis_id || ''); // Pastikan default string kosong
        setEditDeskrip_en(bisnisItem.deskripsi_bisnis_en || ''); // Pastikan default string kosong
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://127.0.0.1:8000/api/admin/bisnis/${editId}`, {
                link_video: editLink,
                deskripsi_bisnis_id: editDeskrip_id, // Konten HTML dari CKEditor
                deskripsi_bisnis_en: editDeskrip_en, // Konten HTML dari CKEditor
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
                                {/* Header Card */}
                                <div className="card bg-info p-3">
                                    <h3 className="text-white">{t('bisnis_page_header_title')}</h3>
                                </div>

                                {/* Form Card */}
                                <div className="card mt-5 p-3 p-md-5">
                                    <h3>{t('create_bisnis_page_title')}</h3>
                                    <form onSubmit={addBisnisPage}>
                                        {/* Input Link YouTube */}
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

                                        {/* Textarea Deskripsi Bahasa Indonesia */}
                                        <div className="mb-3">
                                            <label htmlFor="deskripsiHalaman_id" className="form-label">
                                                {t('form_label_description_id')}
                                            </label>
                                            {/* Ganti textarea ini dengan CKEditor */}
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={deskrip_id} // Mengikat nilai state deskrip_id ke editor
                                                onChange={(event, editor) => {
                                                    const data = editor.getData(); // Ambil data HTML dari editor
                                                    setDeskrip_id(data); // Perbarui state dengan data HTML
                                                }}
                                            // Anda bisa menambahkan konfigurasi lain di sini jika diperlukan, contoh:
                                            // config={{
                                            //      toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
                                            //      // ... konfigurasi lainnya
                                            // }}
                                            />
                                            {/* Catatan: Untuk CKEditor, atribut 'id' pada label 'for' tidak langsung relevan untuk inputnya
                                                karena CKEditor membuat struktur DOM sendiri. Namun, `htmlFor` pada label tetap baik
                                                untuk semantik dan aksesibilitas.
                                            */}
                                        </div>

                                        {/* Textarea Deskripsi Bahasa Inggris */}
                                        <div className="mb-3">
                                            <label htmlFor="deskripsiHalaman_en" className="form-label">
                                                {t('form_label_description_en')}
                                            </label>
                                            <CKEditor // Mengganti textarea dengan CKEditor
                                                editor={ClassicEditor}
                                                data={deskrip_en}
                                                onChange={(event, editor) => {
                                                    const data = editor.getData();
                                                    setDeskrip_en(data);
                                                }}
                                            />
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-sm">
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
                        {/* Header */}
                        <div className="card bg-info p-3">
                            <h3 className="text-white">{t('data_title')}</h3>
                        </div>

                        {/* Tabel Responsif */}
                        <div className="table-responsive">
                            <table className="table mt-5">
                                {bisnisList.length > 0 && (
                                    <thead>
                                        <tr>
                                            <th className="fs-7 fs-md-5">{t('table_no')}</th>
                                            <th className="fs-7 fs-md-5">{t('table_youtube_link')}</th>
                                            <th className="fs-7 fs-md-5">{t('table_page_description')}</th>
                                            <th className="fs-7 fs-md-5">{t('table_action')}</th>
                                        </tr>
                                    </thead>
                                )}

                                <tbody>
                                    {bisnisList.length > 0 ? (
                                        bisnisList.map((bisnisItem, index) => (
                                            <tr key={bisnisItem.uuid}>
                                                <td className="fs-7 fs-md-5">{index + 1}</td>
                                                <td>
                                                    <div className="ratio ratio-16x9 mx-auto" style={{ maxWidth: '100px' }}>
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
                                                    <div
                                                        className="text-truncate-custom fs-7 fs-md-5 description-limit"
                                                    >
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html: i18n.language === 'id'
                                                                    ? DOMPurify.sanitize(bisnisItem.deskripsi_bisnis_id)
                                                                    : DOMPurify.sanitize(bisnisItem.deskripsi_bisnis_en)
                                                            }}
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex flex-column flex-md-row gap-1">
                                                        <button
                                                            className="btn btn-sm btn-warning d-flex align-items-center justify-content-center gap-1"
                                                            onClick={() => openEditModal(bisnisItem)}
                                                        >
                                                            <span className="d-none d-md-inline">{t('edit_button')}</span>
                                                            <FontAwesomeIcon icon={faPencilAlt} />
                                                        </button>

                                                        <button
                                                            className="btn btn-sm btn-danger d-flex align-items-center justify-content-center gap-1"
                                                            onClick={() => handleDeleteClick(bisnisItem.uuid)}
                                                        >
                                                            <span className="d-none d-md-inline">{t('delete_button')}</span>
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4">
                                                <NoData />
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
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
                                            {/* Judul Modal */}
                                            <h5 className="modal-title">{t('edit_modal_title')}</h5>
                                            <button type="button" className="btn-close" onClick={() => setEditModal(false)}></button>
                                        </div>
                                        <div className="modal-body">
                                            {/* Input Link YouTube */}
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
                                            {/* Textarea Deskripsi Bahasa Indonesia */}
                                            <div className="mb-3">
                                                <label htmlFor="editDeskripsiId" className="form-label">Deskripsi (ID)</label>
                                                {/* Ganti textarea dengan CKEditor */}
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={editDeskrip_id} // Mengikat data CKEditor ke state
                                                    onChange={(event, editor) => {
                                                        const data = editor.getData(); // Mendapatkan konten HTML dari editor
                                                        setEditDeskrip_id(data); // Memperbarui state
                                                    }}
                                                // Anda juga bisa menambahkan konfigurasi lain jika diperlukan, contoh:
                                                // config={{
                                                //      toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
                                                //      // ...konfigurasi lainnya
                                                // }}
                                                />
                                            </div>
                                            {/* Textarea Deskripsi Bahasa Inggris */}
                                            <div className="mb-3">
                                                <label htmlFor="editDeskripsiEn" className="form-label">
                                                    {t('form_label_description_en')}
                                                </label>
                                                <CKEditor // Mengganti textarea dengan CKEditor
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
                                            <button type="submit" className="btn btn-primary">
                                                {t('admin_save_changes_button')}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                {/* Modal Konfirmasi Hapus Kustom */}
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
