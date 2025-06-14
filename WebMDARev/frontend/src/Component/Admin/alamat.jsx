import React from "react";
import NavSide from "./navSide";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify"
import { useTranslation } from "react-i18next";
import { event } from "jquery";



function Alamat() {

    const [namaAlamat_id, setNamaAlamat_Id] = useState("");
    const [namaAlamat_en, setNamaAlamat_en] = useState("");
    const [linkAlamat, setLinkAlamat] = useState("");
    const [alamatList, setAlamatList] = useState([]);
    const token = localStorage.getItem('token');
    const { t, i18n } = useTranslation();


    // modal
    const [editModal, setEditModal] = useState(false);
    const [editId, setEditId] = useState("");
    const [editLinkAlamat, setEditLinkAlamat] = useState("");
    const [editNamaAlamat, setEditNamaAlamat] = useState({
        nama_alamat_id: "",
        nama_alamat_en: ""
    });




    const getAlamatData = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/admin/maps', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setAlamatList(res.data.maps);
            getAlamatData();
        } catch (error) {
            alert(error);
        }
    }


    const createAlamat = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/admin/maps', {
                nama_alamat_id: namaAlamat_id,
                nama_alamat_en: namaAlamat_en,
                link_alamat: linkAlamat,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setNamaAlamat_Id("");
            setNamaAlamat_en("");
            setLinkAlamat("");
            alert('Success');
        } catch (error) {
            alert(error);
        }
    }

    const updateAlamat = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://127.0.0.1:8000/api/admin/maps/${editId}`, {
                link_alamat: editLinkAlamat,
                nama_alamat_id: editNamaAlamat.nama_alamat_id, // ambil dari CKEditor
                nama_alamat_en: editNamaAlamat.nama_alamat_en,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setEditModal(false);
            getAlamatData();
            alert('Success');
        } catch (error) {
            alert(error);
        }
    }

    const openEditAlamatModal = (item) => {
        setEditModal(true);
        setEditId(item.uuid);
        setEditLinkAlamat(item.link_alamat);

        // penting: pastikan struktur item benar dan sesuai API
        setEditNamaAlamat({
            nama_alamat_id: item.nama_alamat_id || '',
            nama_alamat_en: item.nama_alamat_en || '',
        });
    };


    const deleteAlamat = async (uuid) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/admin/maps/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getAlamatData();
        } catch (error) {
            alert(error);
        }
    }




    useEffect(() => {
        getAlamatData();
    }, []);

    return (
        <div>
            <NavSide />
            <div className="flex-grow-1 p-3">
                <div className="container">
                    <section>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="card p-3" style={{ backgroundColor: "#F16022" }}>
                                    <h3 className="p-0 m-0 text-white">{t('address_page_title')}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="card p-3 mb-3" style={{ backgroundColor: "#115258" }}>
                                    <h3 className="p-0 m-0 text-white">{t('input_data_title')}</h3>
                                </div>
                                <div className="card p-3">
                                    <form onSubmit={createAlamat}>
                                        <div className="mb-3">
                                            <p>{t('input_url_label')}</p>
                                            <input type="text" className="form-control" value={linkAlamat} onChange={(e) => setLinkAlamat(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <p>{t('input_address_id_label')}</p>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={namaAlamat_id}
                                                onChange={(event, editor) => {
                                                    const data = editor.getData();
                                                    setNamaAlamat_Id(data);
                                                }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <p>{t('input_address_en_label')}</p>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={namaAlamat_en}
                                                onChange={(event, editor) => {
                                                    const data = editor.getData();
                                                    setNamaAlamat_en(data);
                                                }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <button type="submit" className="btn-sm btn text-white p-2" style={{ backgroundColor: "#115258" }}>{t('add_data_button')}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="row">
                            <div className="col">
                                <div className="card p-3" style={{ backgroundColor: "#F16022" }}>
                                    <h3 className="p-0 m-0 text-white">{t('data_title')}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped">
                                        <thead className="table-light">
                                            <tr>
                                                <th>{t('table_address_name_id')}</th>
                                                <th>{t('table_address_name_en')}</th>
                                                <th>{t('table_address_url')}</th>
                                                <th>{t('table_action')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {alamatList.length > 0 ? (
                                                alamatList.map((item) => (
                                                    <tr key={item.uuid}>
                                                        <td>
                                                            <div className="text-truncate" style={{ maxWidth: '250px' }}
                                                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.nama_alamat_id) }}
                                                            />
                                                        </td>
                                                        <td>
                                                            <div className="text-truncate" style={{ maxWidth: '250px' }}
                                                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.nama_alamat_en) }}
                                                            />
                                                        </td>
                                                        <td>
                                                            <a href={item.link_alamat} target="_blank" rel="noopener noreferrer" className="text-truncate d-inline-block" style={{ maxWidth: '200px' }}>
                                                                {item.link_alamat}
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex flex-column flex-md-row gap-2">
                                                                <button
                                                                    className="btn btn-sm btn-warning d-flex align-items-center justify-content-center gap-1"
                                                                    onClick={() => openEditAlamatModal(item)}
                                                                >
                                                                    <span className="d-none d-md-inline">{t('edit_button')}</span>
                                                                    <i className="fas fa-edit d-md-none"></i> {/* Contoh icon FontAwesome */}
                                                                </button>
                                                                <button
                                                                    className="btn btn-sm btn-danger d-flex align-items-center justify-content-center gap-1"
                                                                    onClick={() => deleteAlamat(item.uuid)}
                                                                >
                                                                    <span className="d-none d-md-inline">{t('delete_button')}</span>
                                                                    <i className="fas fa-trash-alt d-md-none"></i> {/* Contoh icon FontAwesome */}
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="4" className="text-center text-muted py-3">
                                                        {t('no_address_data')}
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>

                    {editModal && (
                        <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                <div className="modal-content">
                                    <form onSubmit={updateAlamat}>
                                        <div className="modal-header">
                                            <h5 className="modal-title">{t('edit_address_modal_title')}</h5>
                                            <button type="button" className="btn-close" aria-label="Close" onClick={() => setEditModal(false)}></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="mb-3">
                                                <p>{t('edit_url_label')}</p>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={editLinkAlamat}
                                                    onChange={(e) => setEditLinkAlamat(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <p>{t('edit_address_id_label')}</p>
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={editNamaAlamat.nama_alamat_id || ''}
                                                    onChange={(event, editor) => {
                                                        const data = editor.getData();
                                                        setEditNamaAlamat((prev) => ({
                                                            ...prev,
                                                            nama_alamat_id: data,
                                                        }));
                                                    }}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <p>{t('edit_address_en_label')}</p>
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={editNamaAlamat.nama_alamat_en || ''}
                                                    onChange={(event, editor) => {
                                                        const data = editor.getData();
                                                        setEditNamaAlamat((prev) => ({
                                                            ...prev,
                                                            nama_alamat_en: data,
                                                        }));
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={() => setEditModal(false)}>
                                                {t('close_button')}
                                            </button>
                                            <button type="submit" className="btn text-white" style={{ backgroundColor: "#F16022" }}>
                                                {t('save_changes_button')}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Alamat;