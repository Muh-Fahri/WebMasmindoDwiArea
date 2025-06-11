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
                                    <h3 className="p-0 m-0 text-white">Halaman Alamat</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="card p-3 mb-3" style={{ backgroundColor: "#115258" }}>
                                    <h3 className="p-0 m-0 text-white">Masukkan Data</h3>
                                </div>
                                <div className="card p-3">
                                    <form onSubmit={createAlamat}>
                                        <div className="mb-3">
                                            <p>Masukkan Url</p>
                                            <input type="text" className="form-control" value={linkAlamat} onChange={(e) => setLinkAlamat(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <p>Masukkan Alamat (Id)</p>
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
                                            <p>Masukkan Alamat (En)</p>
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
                                            <button className="btn-sm btn text-white p-2" style={{ backgroundColor: "#115258" }}>Masukkan Data</button>
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
                                    <h3 className="p-0 m-0 text-white">Data</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Nama Alamat (Id)</th>
                                            <th>Nama Alamat (En)</th>
                                            <th>Url Alamat</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    {alamatList.length > 0 ? (
                                        alamatList.map((item) => (
                                            <tbody>
                                                <tr key={item.uuid}>
                                                    <td>
                                                        <p
                                                            dangerouslySetInnerHTML={{
                                                                __html: DOMPurify.sanitize(item.nama_alamat_id)
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <p
                                                            dangerouslySetInnerHTML={{
                                                                __html: DOMPurify.sanitize(item.nama_alamat_en)
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <a href={item.link_alamat} target="_blank" rel="noopener noreferrer">
                                                            {item.link_alamat}
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <button className="btn btn-sm btn-warning" onClick={() => openEditAlamatModal(item)}>Edit</button>
                                                            <button className="btn btn-sm btn-danger" onClick={() => deleteAlamat(item.uuid)}>Delete</button>
                                                        </div>
                                                    </td>

                                                </tr>
                                            </tbody>
                                        ))
                                    ) : (
                                        <p>No data</p>
                                    )}
                                </table>
                            </div>
                        </div>
                    </section>
                    <section>
                        {editModal && (
                            <div className="modal show fade d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                <div className="modal-dialog modal-dialog-centered modal-lg">
                                    <div className="modal-content">
                                        <form onSubmit={updateAlamat}>
                                            <div className="modal-header">
                                                <h5 className="modal-title">Edit Data Alamat</h5>
                                                <button type="button" className="btn-close" onClick={() => setEditModal(false)}></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="mb-3">
                                                    <p>Nama Alamat (Id)</p>
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
                                                    <p>Nama Alamat (En)</p>
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
                                                <div className="mb-3">
                                                    <button className="btn btn-sm text-white p-2" style={{ backgroundColor: "#F16022" }}>Edit Data</button>
                                                </div>
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
    )
}

export default Alamat;