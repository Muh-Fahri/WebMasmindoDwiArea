import React, { useEffect, useState } from "react";
import NavSide from "./navSide";
import { Button, Modal, Form } from 'react-bootstrap';
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { error } from "jquery";

function AdminKarir() {
    const [karirList, setKarirList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [currentUuid, setCurrentUuid] = useState(null);
    const [formData, setFormData] = useState({
        category: "",
        posisi_id: "",
        posisi_en: "",
        lokasi_id: "",
        lokasi_en: "",
        nama_perusahaan: "",
        deadline: "",
        deskripsi_id: "",
        deskripsi_en: "",
        syarat_id: "",
        syarat_en: "",
    });


    const token = localStorage.getItem('token');

    useEffect(() => {
        fetchKarir();
    }, []);

    const fetchKarir = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/admin/karir", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setKarirList(res.data.karir);
        } catch (err) {
            alert(error);
        }
    };

    const handleShowModal = (item = null) => {
        if (item) {
            setEditMode(true);
            setCurrentUuid(item.uuid);
            setFormData({ ...item });
        } else {
            setEditMode(false);
            setFormData({
                category: '',
                posisi: '',
                lokasi: '',
                syarat: '',
                nama_perusahaan: '',
                deadline: '',
                deskripsi: ''
            });
        }
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            if (editMode) {
                await axios.post(`http://127.0.0.1:8000/api/admin/karir/${currentUuid}`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            } else {
                await axios.post("http://127.0.0.1:8000/api/admin/karir", formData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }
            fetchKarir();
            handleCloseModal();
        } catch (err) {
            alert(error);
        }
    };

    const handleDelete = async (uuid) => {
        if (!window.confirm("Yakin ingin menghapus data ini?")) return;
        try {
            await axios.delete(`http://127.0.0.1:8000/api/admin/karir/delete/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchKarir();
        } catch (err) {
            alert(error);
        }
    };

    return (
        <div className="d-flex flex-column flex-md-row">
            <div style={{ width: '260px', flexShrink: 0 }} className="flex-grow-1 flex-md-grow-0">
                <NavSide />
            </div>
            <div className="flex-grow-1 content px-3 px-md-5 pt-5 mt-md-0" style={{ marginLeft: '0', overflowX: 'hidden' }}>
                <div className="container-fluid p-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h3 className="text-primary">Kelola Karir</h3>
                        <Button variant="success" onClick={() => handleShowModal()}>Tambah Karir</Button>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead className="table-primary">
                                <tr>
                                    <th>Category</th>
                                    <th>Posisi (ID)</th>
                                    <th>Lokasi (ID)</th>
                                    <th>Perusahaan</th>
                                    <th>Deadline</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {karirList.map(item => (
                                    <tr key={item.uuid}>
                                        <td>{item.category}</td>
                                        <td>{item.posisi_id}</td>
                                        <td>{item.lokasi_id}</td>
                                        <td>{item.nama_perusahaan}</td>
                                        <td>{item.deadline}</td>
                                        <td>
                                            <Button variant="warning" size="sm" className="me-2" onClick={() => handleShowModal(item)}>Edit</Button>
                                            <Button variant="danger" size="sm" onClick={() => handleDelete(item.uuid)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Modal show={showModal} onHide={handleCloseModal} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>{editMode ? 'Edit Karir' : 'Tambah Karir'}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Deskripsi (ID)</Form.Label>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={formData.deskripsi_id}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setFormData(prev => ({ ...prev, deskripsi_id: data }));
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Deskripsi (EN)</Form.Label>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={formData.deskripsi_en}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setFormData(prev => ({ ...prev, deskripsi_en: data }));
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Syarat (ID)</Form.Label>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={formData.syarat_id}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setFormData(prev => ({ ...prev, syarat_id: data }));
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Syarat (EN)</Form.Label>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={formData.syarat_en}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setFormData(prev => ({ ...prev, syarat_en: data }));
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select name="category" value={formData.category} onChange={handleChange}>
                                        <option value="">Pilih Kategori</option>
                                        <option value="profesional">Profesional</option>
                                        <option value="magang">Magang</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Posisi (ID)</Form.Label>
                                    <Form.Control type="text" name="posisi_id" value={formData.posisi_id} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Posisi (EN)</Form.Label>
                                    <Form.Control type="text" name="posisi_en" value={formData.posisi_en} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Lokasi (ID)</Form.Label>
                                    <Form.Control type="text" name="lokasi_id" value={formData.lokasi_id} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Lokasi (EN)</Form.Label>
                                    <Form.Control type="text" name="lokasi_en" value={formData.lokasi_en} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Nama Perusahaan</Form.Label>
                                    <Form.Control type="text" name="nama_perusahaan" value={formData.nama_perusahaan} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Deadline</Form.Label>
                                    <Form.Control type="date" name="deadline" value={formData.deadline} onChange={handleChange} />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>Batal</Button>
                            <Button variant="primary" onClick={handleSubmit}>Simpan</Button>
                        </Modal.Footer>
                    </Modal>


                </div>
            </div>

        </div>
    );
}

export default AdminKarir;
