import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavSide from "./navSide";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import NoData from "../Error/NoData";
import handleUnauthorized from "./unouthorized";
import { useTranslation } from "react-i18next";


function Bisnis() {
    const [linkYt, setLinkYt] = useState("");
    const [deskrip_id, setDeskrip_id] = useState("");
    const [deskrip_en, setDeskrip_en] = useState("");
    const [bisnisList, setBisnisList] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const { t, i18n } = useTranslation();

    // modal
    const [editModal, setEditModal] = useState(false);
    const [editId, setEditId] = useState("");
    const [editLink, setEditLink] = useState("");
    const [editDeskrip_id, setEditDeskrip_id] = useState("");
    const [editDeskrip_en, setEditDeskrip_en] = useState("");


    const getBisnisData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/admin/bisnis', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setBisnisList(response.data.bisnis);
        } catch (error) {
            handleUnauthorized(error);
        }
    };

    useEffect(() => {
        getBisnisData();
    }, []);


    // tambahkan post page bisnis
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

    // edit area
    const openEditModal = (bisnis) => {
        setEditModal(true);
        setEditId(bisnis.uuid);
        setEditLink(bisnis.link_video);
        setEditDeskrip_id(bisnis.deskripsi_bisnis_id);
        setEditDeskrip_en(bisnis.deskripsi_bisnis_en);
    };


    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://127.0.0.1:8000/api/admin/bisnis/${editId}`, {
                link_video: editLink,
                deskripsi_bisnis_id: editDeskrip_id,
                deskripsi_bisnis_en: editDeskrip_en
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
                                            <textarea
                                                id="deskripsiHalaman_id"
                                                rows={10}
                                                className="form-control"
                                                value={deskrip_id}
                                                onChange={(e) => setDeskrip_id(e.target.value)}
                                                required
                                            ></textarea>
                                        </div>

                                        {/* Textarea Deskripsi Bahasa Inggris */}
                                        <div className="mb-3">
                                            <label htmlFor="deskripsiHalaman_en" className="form-label">
                                                {t('form_label_description_en')}
                                            </label>
                                            <textarea
                                                id="deskripsiHalaman_en"
                                                rows={10}
                                                className="form-control"
                                                value={deskrip_en}
                                                onChange={(e) => setDeskrip_en(e.target.value)}
                                                required
                                            ></textarea>
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
                                        bisnisList.map((bisnis, index) => (
                                            <tr key={bisnis.uuid}>
                                                <td className="fs-7 fs-md-5">{index + 1}</td>

                                                {/* Video Youtube Embed */}
                                                <td>
                                                    <div className="ratio ratio-16x9 mx-auto" style={{ maxWidth: '100px' }}>
                                                        <iframe
                                                            src={
                                                                bisnis.link_video
                                                                    ? bisnis.link_video.replace("watch?v=", "embed/")
                                                                    : ""
                                                            }
                                                            title="YouTube video"
                                                            frameBorder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                        ></iframe>
                                                    </div>
                                                </td>

                                                {/* Deskripsi Bahasa Aktif */}
                                                <td>
                                                    <p className="text-truncate-custom fs-7 fs-md-5 description-limit" style={{ whiteSpace: 'pre-line' }}>
                                                        {i18n.language === 'id'
                                                            ? bisnis.deskripsi_bisnis_id
                                                            : bisnis.deskripsi_bisnis_en}
                                                    </p>
                                                </td>

                                                {/* Tombol Aksi */}
                                                <td>
                                                    <div className="d-flex flex-column flex-md-row gap-1">
                                                        <button
                                                            className="btn btn-sm btn-warning d-flex align-items-center justify-content-center gap-1"
                                                            onClick={() => openEditModal(bisnis)}
                                                        >
                                                            <span className="d-none d-md-inline">{t('edit_button')}</span>
                                                            <FontAwesomeIcon icon={faPencilAlt} />
                                                        </button>

                                                        <button
                                                            className="btn btn-sm btn-danger d-flex align-items-center justify-content-center gap-1"
                                                            onClick={() => deleteBisnisData(bisnis.uuid)}
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
                            <div className="modal-dialog modal-dialog-centered">
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
                                                <label htmlFor="editDeskripsiId" className="form-label">
                                                    {t('form_label_description_id_short')}
                                                </label>
                                                <textarea
                                                    id="editDeskripsiId"
                                                    rows={5}
                                                    className="form-control"
                                                    value={editDeskrip_id}
                                                    onChange={(e) => setEditDeskrip_id(e.target.value)}
                                                    required
                                                ></textarea>
                                            </div>
                                            {/* Textarea Deskripsi Bahasa Inggris */}
                                            <div className="mb-3">
                                                <label htmlFor="editDeskripsiEn" className="form-label">
                                                    {t('form_label_description_en_short')}
                                                </label>
                                                <textarea
                                                    id="editDeskripsiEn"
                                                    rows={5}
                                                    className="form-control"
                                                    value={editDeskrip_en}
                                                    onChange={(e) => setEditDeskrip_en(e.target.value)}
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                onClick={() => setEditModal(false)}
                                            >
                                                {t('button_close')}
                                            </button>
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
        </div >
    )
}
export default Bisnis;