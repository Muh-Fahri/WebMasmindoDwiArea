import React, { useState, useEffect } from "react";
import NavSide from "./navSide";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import NoData from "../Error/NoData";
import handleUnauthorized from "./unouthorized";
import { useTranslation } from "react-i18next";



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
    const [editJudul, setEditJudul] = useState("");
    const [editDeskrip, setEditDeskrip] = useState("");
    const [editImg, setEditImg] = useState(null); // file object



    const getBeritaData = async () => {


        try {
            const response = await axios.get('http://127.0.0.1:8000/api/admin/berita/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            // console.log(response.data);
            setBeritaList(response.data.berita);
        } catch (error) {
            handleUnauthorized(error);
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
            await axios.post("http://127.0.0.1:8000/api/admin/berita", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Reset form
            setJudulBerita("");
            setJudulBeritaEn("");
            setDeskripBerita("");
            setDeskripBeritaEn("");
            setImgBerita("");

            getBeritaData();
            alert("Berhasil Menambahkan Data");
        } catch (error) {
            alert("Gagal Menambahkan Data");
        }
    };



    const editBeritaData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('judul_berita', editJudul);
        formData.append('deskripsi_berita', editDeskrip);
        if (editImg) {
            formData.append('image_berita', editImg);
        }

        try {
            await axios.post(`http://127.0.0.1:8000/api/admin/berita/${editId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Reset form dan tutup modal
            setEditJudul("");
            setEditDeskrip("");
            setEditImg(null);
            setEditModal(false);
            getBeritaData();
            alert('Berita berhasil diubah');
        } catch (error) {
            console.error(error);
            alert('Gagal mengubah data');
        }
    };


    const deleteBeritaData = async (uuid) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/admin/berita/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getBeritaData();
            alert('Berhasil Menghapus Data');
        } catch (error) {
            alert('Gagal Menghapus Data');
        }
    }


    const openEditModal = (berita) => {
        setEditModal(true);
        setEditId(berita.uuid);
        setEditJudul({
            judul_berita_id: berita.judul_berita_id || '',
            judul_berita_en: berita.judul_berita_en || '',
        });
        setEditDeskrip({
            deskripsi_berita_id: berita.deskripsi_berita_id || '',
            deskripsi_berita_en: berita.deskripsi_berita_en || '',
        });
        setEditImg(null);
    };



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
                        <div className="card bg-info p-3 text-white">
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
                                    <textarea
                                        rows={10}
                                        className="form-control"
                                        value={deskipBerita}
                                        onChange={(e) => setDeskripBerita(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className="p-2">
                                    <p>{t('berita_description_en_label')}</p>
                                    <textarea
                                        rows={10}
                                        className="form-control"
                                        value={deskipBeritaEn}
                                        onChange={(e) => setDeskripBeritaEn(e.target.value)}
                                    ></textarea>
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
                                <div className="card mt-5 p-3 bg-info">
                                    <div className="row">
                                        <div className="col text-white">
                                            <h3>{t('berita_data_header_title')}</h3> {/* Terjemahan untuk "Data" */}
                                        </div>
                                    </div>
                                </div>
                                <table className="table">
                                    {beritaList.length > 0 && (
                                        <thead>
                                            <tr>
                                                <th>{t('table_no')}</th> {/* Menggunakan kunci yang sudah ada */}
                                                <th>{t('table_berita_title_id')}</th>
                                                <th>{t('table_berita_title_en')}</th>
                                                <th>{t('table_berita_content_id')}</th>
                                                <th>{t('table_berita_content_en')}</th>
                                                <th>{t('table_berita_photo')}</th>
                                                <th>{t('table_action')}</th> {/* Menggunakan kunci yang sudah ada */}
                                            </tr>
                                        </thead>
                                    )}
                                    <tbody>
                                        {beritaList.length > 0 ? (
                                            beritaList.map((berita, index) => (
                                                <tr key={berita.uuid}>
                                                    <td>{index + 1}</td>
                                                    <td>{berita.judul_berita_id}</td>
                                                    <td>{berita.judul_berita_en}</td>
                                                    <td>
                                                        <p style={{ whiteSpace: 'pre-line' }}>{berita.deskripsi_berita_id}</p>
                                                    </td>
                                                    <td>
                                                        <p style={{ whiteSpace: 'pre-line' }}>{berita.deskripsi_berita_en}</p>
                                                    </td>
                                                    <td>
                                                        <img
                                                            src={`http://localhost:8000/Berita/${encodeURIComponent(berita.image_berita)}`}
                                                            alt={t('alt_text_news_image')}
                                                            style={{ width: "100px" }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <div className="row">
                                                            <div className="col d-flex gap-2">
                                                                <button className="btn btn-sm btn-warning" onClick={() => openEditModal(berita)}>
                                                                    {t('edit_button')} <FontAwesomeIcon icon={faPencilAlt} />
                                                                </button>
                                                                <button className="btn btn-sm btn-danger" onClick={() => deleteBeritaData(berita.uuid)}>
                                                                    {t('delete_button')} <FontAwesomeIcon icon={faTrash} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="7" className="text-center">
                                                    <NoData /> {/* Asumsi NoData adalah komponen yang menampilkan pesan "Tidak ada data" */}
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
                            <div className="modal show fade d-block" tabIndex="-1">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <form onSubmit={editBeritaData}>
                                            <div className="modal-header">
                                                <h5 className="modal-title">{t('edit_news_modal_title')}</h5>
                                                <button type="button" onClick={() => setEditModal(false)} className="btn-close"></button>
                                            </div>
                                            <div className="modal-body">
                                                {/* Judul Bahasa Indonesia */}
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

                                                {/* Judul Bahasa Inggris */}
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

                                                {/* Deskripsi Bahasa Indonesia */}
                                                <div className="mb-3">
                                                    <label className="form-label">{t('news_description_id_label')}</label>
                                                    <textarea
                                                        value={editDeskrip.deskripsi_berita_id}
                                                        onChange={(e) => setEditDeskrip(prev => ({ ...prev, deskripsi_berita_id: e.target.value }))}
                                                        className="form-control"
                                                        rows={5}
                                                        required
                                                    />
                                                </div>

                                                {/* Deskripsi Bahasa Inggris */}
                                                <div className="mb-3">
                                                    <label className="form-label">{t('news_description_en_label')}</label>
                                                    <textarea
                                                        value={editDeskrip.deskripsi_berita_en}
                                                        onChange={(e) => setEditDeskrip(prev => ({ ...prev, deskripsi_berita_en: e.target.value }))}
                                                        className="form-control"
                                                        rows={5}
                                                        required
                                                    />
                                                </div>

                                                {/* Upload Foto Baru (optional) */}
                                                <div className="mb-3">
                                                    <label className="form-label">{t('news_image_label_edit')}</label>
                                                    <input
                                                        type="file"
                                                        onChange={(e) => setEditImg(e.target.files[0])}
                                                        className="form-control"
                                                    />
                                                </div>

                                                <button type="submit" className="btn btn-primary">{t('button_save_changes')}</button>
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