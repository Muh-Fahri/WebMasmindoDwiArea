import React, { useEffect, useState } from "react";
import NavSide from "./navSide";
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useTranslation } from "react-i18next";

function Galeri() {

    const [deskripsi_id, set_deskripsi_id] = useState("");
    const [deskripsi_en, set_deskripsi_en] = useState("");
    const [img_galeri, set_img_galeri] = useState("");
    const [galeriList, setGaleriList] = useState([]);
    const token = localStorage.getItem('token');
    const [t, i18n] = useTranslation();


    const [editModal, setEditModal] = useState(false);
    const [editId, setEditId] = useState('');
    const [editDeskrip, setEditDeskrip] = useState({
        deskripsi_id: '',
        deskripsi_en: ''
    });
    const [edit_img_galeri, set_edit_img_galeri] = useState(null);


    const getGaleriData = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/admin/dokumentasi', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setGaleriList(res.data.galeri);
            getGaleriData();
        } catch (error) {
            alert('Opps Server Problem');
        }
    }


    const addGaleriData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('deskrip_id', deskripsi_id);
        formData.append('deskrip_en', deskripsi_en);
        formData.append('foto_galeri', img_galeri);

        try {
            await axios.post('http://127.0.0.1:8000/api/admin/dokumentasi', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            set_deskripsi_en("");
            set_deskripsi_id("");
        } catch (error) {
            alert("Gagal Menambahkan Data");
        }
    }


    const editGaleriData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('deskrip_id', editDeskrip.deskripsi_id);
        formData.append('deskrip_en', editDeskrip.deskripsi_en);
        if (edit_img_galeri) {
            formData.append('foto_galeri', edit_img_galeri);
        }

        try {
            await axios.post(`http://127.0.0.1:8000/api/admin/dokumentasi/${editId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            set_edit_img_galeri(null);
            setEditDeskrip({ deskripsi_id: '', deskripsi_en: '' });
            setEditModal(false);
            getGaleriData();
        } catch (error) {
            alert('Gagal mengubah data');
        }
    }

    const opendEditModal = (gal) => {
        setEditModal(true);
        setEditId(gal.uuid);
        set_edit_img_galeri(null);
        setEditDeskrip({
            deskripsi_id: gal.deskrip_id || '',
            deskripsi_en: gal.deskrip_en || '',
        });
    }

    const deleteGaleri = async (uuid) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/admin/dokumentasi/delete/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getGaleriData();
        } catch (error) {
            alert(error);
        }
    }




    const handleFileChange = (e) => {
        const file = e.target.files[0];
        set_img_galeri(file);
    };

    useState(() => {
        getGaleriData();
    }, []);



    return (
        <div>
            <NavSide />
            <section>
                <div className="flex-grow-1 p-3">
                    <div className="container">
                        <section>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="card p-3 text-white" style={{ backgroundColor: '#F16022' }}>
                                            <h3>{t("sectionTitle")}</h3>
                                        </div>
                                        <div className="card p-5 mt-5" style={{ backgroundColor: '#115258' }}>
                                            <p className="text-white m-0 p-0">{t("maxLengthInfo")}</p>
                                        </div>
                                        <div className="card mt-5 p-3">
                                            <h5>{t("createDataTitle")}</h5>
                                            <form onSubmit={addGaleriData} encType="multipart/form-data">
                                                <div className="p-2">
                                                    <p>{t("descFotoIdLabel")}</p>
                                                    <div className="custom-editor">
                                                        <CKEditor
                                                            editor={ClassicEditor}
                                                            data={deskripsi_id}
                                                            onChange={(event, editor) => {
                                                                const data = editor.getData();
                                                                set_deskripsi_id(data)
                                                            }}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-2">
                                                    <p>{t("descFotoEnLabel")}</p>
                                                    <div className="custom-editor">
                                                        <CKEditor
                                                            editor={ClassicEditor}
                                                            data={deskripsi_en}
                                                            onChange={(event, editor) => {
                                                                const data = editor.getData();
                                                                set_deskripsi_en(data);
                                                            }}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-2">
                                                    <p>{t("uploadFotoLabel")}</p>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        onChange={handleFileChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="p-2">
                                                    <button className="btn btn-sm text-white" style={{ backgroundColor: '#115258' }}>{t("addDataButton")}</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="row">
                                <div className="col">
                                    <div className="card mt-5 p-3 text-white" style={{ backgroundColor: '#115258' }}>
                                        <div className="row">
                                            <div className="col">
                                                <h3>{t("tableDataTitle")}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>{t("tableHeaderNo")}</th>
                                                    <th>{t("tableHeaderDescId")}</th>
                                                    <th>{t("tableHeaderDescEn")}</th>
                                                    <th>{t("tableHeaderFoto")}</th>
                                                    <th>{t("tableHeaderAksi")}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {galeriList.length > 0 ? (
                                                    galeriList.map((gal, index) => (
                                                        <tr key={gal.uuid}>
                                                            <td>{index + 1}</td>
                                                            <td style={{ maxWidth: '200px' }}>
                                                                <div className="text-truncate" dangerouslySetInnerHTML={{ __html: gal.deskrip_id }} />
                                                            </td>
                                                            <td style={{ maxWidth: '200px' }}>
                                                                <div className="text-truncate" dangerouslySetInnerHTML={{ __html: gal.deskrip_en }} />
                                                            </td>
                                                            <td className="text-center">
                                                                <img
                                                                    src={`http://localhost:8000/Galeri/${encodeURIComponent(gal.foto_galeri)}`}
                                                                    alt={`Galeri ${gal.deskrip_id}`}
                                                                    style={{ width: '80px', height: 'auto', objectFit: 'cover', borderRadius: '4px' }}
                                                                    className="img-fluid"
                                                                />
                                                            </td>
                                                            <td>
                                                                <div className="d-flex flex-column flex-md-row gap-1">
                                                                    <button className="btn btn-sm btn-warning d-flex align-items-center justify-content-center gap-1" onClick={() => opendEditModal(gal)}>
                                                                        <span className="d-none d-md-inline">{t("tableActionEdit")}</span>
                                                                        <i className="fas fa-edit d-md-none"></i>
                                                                    </button>
                                                                    <button className="btn btn-sm btn-danger d-flex align-items-center justify-content-center gap-1" onClick={() => deleteGaleri(gal.uuid)}>
                                                                        <span className="d-none d-md-inline">{t("tableActionDelete")}</span>
                                                                        <i className="fas fa-trash d-md-none"></i>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="5" className="text-center text-muted py-3">
                                                            {t("noDataMessage")}
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <section>
                {editModal && (
                    <div className="modal show fade d-block" tabIndex="-1">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <form onSubmit={editGaleriData}>
                                    <div className="modal-header">
                                        <h5 className="modal-title">{t("editModalTitle")}</h5>
                                        <button
                                            type="button"
                                            onClick={() => setEditModal(false)}
                                            className="btn-close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <p>{t("editDescIdLabel")}</p>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={editDeskrip.deskripsi_id || ''}
                                                onChange={(event, editor) => {
                                                    const data = editor.getData();
                                                    setEditDeskrip((prev) => ({
                                                        ...prev,
                                                        deskripsi_id: data,
                                                    }));
                                                }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <p>{t("editDescEnLabel")}</p>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={editDeskrip.deskripsi_en || ""}
                                                onChange={(event, editor) => {
                                                    const data = editor.getData();
                                                    setEditDeskrip((prev) => ({
                                                        ...prev,
                                                        deskripsi_en: data,
                                                    }));
                                                }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <p>{t("uploadNewFotoOptional")}</p>
                                            <input
                                                type="file"
                                                className="form-control"
                                                onChange={(e) => set_edit_img_galeri(e.target.files[0])}
                                            />
                                        </div>
                                        <div className="mt-3">
                                            <button className="btn btn-sm btn-primary">{t("saveChangesButton")}</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </section>

        </div>
    )
}

export default Galeri;