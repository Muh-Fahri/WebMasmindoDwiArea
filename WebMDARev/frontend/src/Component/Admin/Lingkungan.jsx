import React, { useState, useEffect } from "react";
import NavSide from "./navSide";
import axios from "axios";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import NoData from "../Error/NoData";
import handleUnauthorized from "./unouthorized";
import { useTranslation } from "react-i18next";
import DOMPurify from 'dompurify';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



function Lingkungan() {
    useEffect(() => {
        getDeskripData();
    }, []);

    useEffect(() => {
        getImgLingData();
    }, []);

    // var untuk membuat data
    const [deskripsi, setDeskripsiHalaman] = useState({
        deskripsi_halaman_id: "",
        deskripsi_halaman_en: ""
    });
    const handleUnauthorized = () => {
        window.location.href = '/Login-admin-123'
    };


    // untuk mengambil data
    const [deskripList, setDeskripList] = useState([]);
    const [imgList, setImgList] = useState([]);
    const token = localStorage.getItem('token');
    const { t, i18n } = useTranslation();


    // modal edit form
    const [editDeskripsiModal, setEditDeskripsiModal] = useState(false);
    const [editDokumentasiModal, setEditDokumentasiModal] = useState(false);
    const [editId, setEditId] = useState("");
    const [imgLing, setImgLing] = useState("");
    const [editDeskrId, setEditDeskrId] = useState("");
    const [editDeskrEn, setEditDeskrEn] = useState("");


    const getDeskripData = async () => {
        try {
            const desLing = await axios.get("http://127.0.0.1:8000/api/admin/esg/lingkungan/deskripLingkungan/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            // console.log(desLing.data);
            setDeskripList(desLing.data.deskrip);
        } catch (error) {
            handleUnauthorized(error);
        }
    }


    const getImgLingData = async () => {
        try {
            const imgLing = await axios.get("http://127.0.0.1:8000/api/admin/esg/lingkungan/imgLingkungan/", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // console.log(imgLing.data);
            setImgList(imgLing.data.imgLing);
        } catch (error) {
            handleUnauthorized(error);
        }
    }

    const editDokData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image_lingkungan', imgLing); // gunakan nama yang sama seperti yang Laravel harapkan

        try {
            await axios.post(`http://127.0.0.1:8000/api/admin/esg/lingkungan/imgLingkungan/${editId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            setImgLing(null);
            alert('Data Dokumentasi Berhasil diubah');
            setEditDokumentasiModal(false);
            getImgLingData();
        } catch (error) {
            console.error(error.response?.data || error.message);
            alert('Gagal mengubah data');
        }
    };

    const opendEditModal = (dok) => {
        setEditDokumentasiModal(true);
        setEditId(dok.uuid);
    }

    // handle img
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
            await axios.put(`http://127.0.0.1:8000/api/admin/esg/lingkungan/deskripLingkungan/${editId}`, {
                deskripsi_halaman_id: editDeskrId,
                deskripsi_halaman_en: editDeskrEn
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setEditDeskripsiModal(false);
            getDeskripData();
            alert('Data Berhasil Diperbarui');
        } catch (error) {
            alert('Gagal Mengedit Data');
        }
    };

    const addDeskData = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/admin/esg/lingkungan/deskripLingkungan', {
                deskripsi_halaman_id: deskripsi.deskripsi_halaman_id,
                deskripsi_halaman_en: deskripsi.deskripsi_halaman_en,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            setDeskripsiHalaman({ deskripsi_halaman_id: "", deskripsi_halaman_en: "" });
            alert('Berhasil Menginput Data');
            getDeskripData();
        } catch (error) {
            alert('Gagal Menginput Data');
        }
    };


    const addDokumentasi = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image_lingkungan', imgLing);

        try {
            await axios.post("http://127.0.0.1:8000/api/admin/esg/lingkungan/imgLingkungan", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setImgLing("");
            alert('Berhasil Menambahkan Data');
            getImgLingData();
        } catch (error) {
            alert('Gagal Menambahkan Data');
        }
    };

    const deleteDeskripData = async (uuid) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/admin/esg/lingkungan/deskripLingkungan/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getDeskripData();
            alert('Berhasil Menghapus Data');
        } catch (error) {
            alert('Gagal Menghapus  Data');
        }
    };

    const deleteDokumentasi = async (uuid) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/admin/esg/lingkungan/imgLingkungan/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getImgLingData();
            alert('Berhasil Menghapus Data');
        } catch (error) {
            alert('Gagal Menghapus Data')
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
                                    <div className="table-responsive"> {/* Tambahkan wrapper table-responsive di sini */}
                                        <table className="table">
                                            {/* Thead seharusnya selalu ada untuk struktur tabel yang valid */}
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
                                                            {/* Kolom Deskripsi ID */}
                                                            <td style={{ maxWidth: '300px' }}> {/* Atur maxWidth agar kolom tidak terlalu lebar */}
                                                                <div
                                                                    style={{
                                                                        whiteSpace: 'normal', /* Biarkan teks membungkus */
                                                                        maxHeight: '4.5em', /* Contoh batasan tinggi (misal 3 baris dengan line-height 1.5) */
                                                                        overflow: 'hidden', /* Sembunyikan overflow */
                                                                        textOverflow: 'ellipsis', /* Tambahkan elipsis jika terpotong */
                                                                        display: '-webkit-box',
                                                                        WebkitLineClamp: 3, /* Batasi jumlah baris (untuk browser Webkit) */
                                                                        WebkitBoxOrient: 'vertical'
                                                                    }}
                                                                    dangerouslySetInnerHTML={{ __html: deskrLing.deskripsi_halaman_id }}
                                                                />
                                                            </td>
                                                            {/* Kolom Deskripsi EN */}
                                                            <td style={{ maxWidth: '300px' }}> {/* Atur maxWidth agar kolom tidak terlalu lebar */}
                                                                <div
                                                                    style={{
                                                                        whiteSpace: 'normal', /* Biarkan teks membungkus */
                                                                        maxHeight: '4.5em', /* Contoh batasan tinggi */
                                                                        overflow: 'hidden', /* Sembunyikan overflow */
                                                                        textOverflow: 'ellipsis', /* Tambahkan elipsis jika terpotong */
                                                                        display: '-webkit-box',
                                                                        WebkitLineClamp: 3, /* Batasi jumlah baris */
                                                                        WebkitBoxOrient: 'vertical'
                                                                    }}
                                                                    dangerouslySetInnerHTML={{ __html: deskrLing.deskripsi_halaman_en }}
                                                                />
                                                            </td>
                                                            <td>
                                                                {/* Tombol aksi akan menumpuk di layar kecil */}
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
                                                        {/* colSpan harus sesuai dengan jumlah kolom di thead (saat ini 3) */}
                                                        <td colSpan="3" className="text-center text-muted py-3">
                                                            {/* Menampilkan komponen NoData atau teks fallback */}
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

                {/* modal edit deskripsi */}
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
                                            <div className="mb-3">
                                                <label className="form-label">{t('page_description_id_label')}</label>
                                                <textarea
                                                    className="form-control"
                                                    value={editDeskrId}
                                                    onChange={(e) => setEditDeskrId(e.target.value)}
                                                    rows="6"
                                                ></textarea>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">{t('page_description_en_label')}</label>
                                                <textarea
                                                    className="form-control"
                                                    value={editDeskrEn}
                                                    onChange={(e) => setEditDeskrEn(e.target.value)}
                                                    rows="6"
                                                ></textarea>
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
                                    <div className="table-responsive"> {/* Tambahkan wrapper table-responsive di sini */}
                                        <table className="table">
                                            {/* Thead seharusnya selalu ada untuk struktur tabel yang valid */}
                                            <thead className="table-light"> {/* Opsional: tambahkan table-light untuk styling header */}
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
                                                                    style={{ maxWidth: "100px", height: "auto", objectFit: "contain" }} /* Sesuaikan ukuran gambar */
                                                                    className="img-fluid" /* Pastikan gambar responsif dalam kolom */
                                                                />
                                                            </td>
                                                            {/* Gunakan nowrap agar tanggal tidak putus baris jika terlalu panjang, dan tambahkan class untuk ukuran font responsif */}
                                                            <td className="text-success text-nowrap fs-7 fs-md-6">{moment(dok.created_at).format('DD-MM-YYYY')}</td>
                                                            <td className="text-success text-nowrap fs-7 fs-md-6">{moment(dok.updated_at).format('DD-MM-YYYY')}</td>
                                                            <td>
                                                                {/* Tombol aksi akan menumpuk di layar kecil */}
                                                                <div className="d-flex flex-column flex-md-row gap-1">
                                                                    <button
                                                                        onClick={() => opendEditModal(dok)}
                                                                        className="btn btn-warning btn-sm"
                                                                    >
                                                                        {t('button_edit')}
                                                                        {/* Opsional: Tambahkan ikon untuk layar kecil jika t('button_edit') terlalu panjang */}
                                                                        {/* <span className="d-none d-md-inline">{t('button_edit')}</span>
                                    <i className="fas fa-edit d-md-none"></i> */}
                                                                    </button>
                                                                    <button
                                                                        onClick={() => deleteDokumentasi(dok.uuid)}
                                                                        className="btn btn-danger btn-sm"
                                                                    >
                                                                        {t('button_delete')}
                                                                        {/* Opsional: Tambahkan ikon untuk layar kecil jika t('button_delete') terlalu panjang */}
                                                                        {/* <span className="d-none d-md-inline">{t('button_delete')}</span>
                                    <i className="fas fa-trash d-md-none"></i> */}
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        {/* colSpan harus sesuai dengan jumlah kolom di thead (saat ini 4) */}
                                                        <td colSpan="4" className="text-center text-muted py-3">
                                                            {/* Menampilkan komponen NoData atau teks fallback */}
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