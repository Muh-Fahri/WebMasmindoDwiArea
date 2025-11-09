import React, { useEffect, useRef, useState } from "react";
import NavSide from "./navSide";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import Swal from 'sweetalert2';



function AdminTataKelola() {
    const Token = localStorage.getItem('token');
    const [tataKelolaList, setTataKelola] = useState([]);
    const [desKebijakan, setDesKebijakan] = useState('');
    const [imgTataKelola, setImgTataKelola] = useState('');
    const [filePdf, setFilePdf] = useState('');
    const [kategory, setKategory] = useState('');
    const fileInputPdf = useRef(null);

    // modal
    const [editModal, setEditModal] = useState(false);
    const [editId, setEditid] = useState("");
    const [editDesKebijakan, setEditDesKeb] = useState({ deskripKebijakan: '' });
    const [editImgTakel, setEditImgTakel] = useState(null);
    const [editCategory, setEditCategory] = useState({ category: '' });
    const [editFilePdf, setEditPdf] = useState(null);
    const [editFileName, setEditFileName] = useState(""); // untuk tampilkan nama file PDF lama
    const [editOldImage, setEditOldImage] = useState(""); // untuk gambar lama



    const getTataKelolaData = async () => {
        // Tampilkan loading
        Swal.fire({
            title: 'Memuat data...',
            text: 'Harap tunggu sebentar',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        try {
            const res = await axios.get('http://127.0.0.1:8000/api/admin/tataKelola', {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });
            Swal.close();
            setTataKelola(res.data.tataKelola);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal memuat data',
                text: error.response?.data?.message || error.message,
            });
        }
    };


    const createTataKelola = async (e) => {
        e.preventDefault();

        const file = fileInputPdf.current.files[0];
        const formData = new FormData();
        formData.append('deskripKebijakan', desKebijakan);
        formData.append('fotoSampul', imgTataKelola);
        formData.append('category', kategory);
        formData.append('pdf', file);

        try {
            // tampilkan loading sementara request berlangsung
            Swal.fire({
                title: 'Menyimpan data...',
                text: 'Harap tunggu sebentar',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });

            await axios.post('http://127.0.0.1:8000/api/admin/tataKelola', formData, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                }
            });

            // reset form
            setDesKebijakan('');
            setImgTataKelola('');
            setFilePdf('');
            setKategory('');

            // ambil ulang data
            getTataKelolaData();

            // tampilkan notifikasi sukses
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

    const handleUpdateTataKelola = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("deskripKebijakan", editDesKebijakan.deskripKebijakan);
        formData.append("category", editCategory.category);
        if (editFilePdf) formData.append("pdf", editFilePdf);
        if (editImgTakel) formData.append("fotoSampul", editImgTakel);

        try {

            Swal.fire({
                title: 'Menyimpan data...',
                text: 'Harap tunggu sebentar',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });

            await axios.post(
                `http://127.0.0.1:8000/api/admin/tataKelola/${editId}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'Data berhasil diperbarui.',
                showConfirmButton: false,
                timer: 2000
            });

            setEditModal(false);
            getTataKelolaData();
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'Terjadi kesalahan saat memperbarui data.',
            });
        }
    };

    const deleteTakel = async (uuid) => {
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
            await axios.delete(`http://127.0.0.1:8000/api/admin/tataKelola/delete/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${Token}`
                }
            });
            await getTataKelolaData(false);
            Swal.close();
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


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImgTataKelola(file)
    }

    const handleEditFileChange = (e) => {
        const file = e.target.files[0];
        setEditImgTakel(file);
    };

    useEffect(() => {
        getTataKelolaData();
    }, []);

    function openEditModal(data) {
        setEditid(data.uuid);
        setEditDesKeb({ deskripKebijakan: data.deskripKebijakan });
        setEditCategory({ category: data.category });
        setEditImgTakel(null);
        setEditPdf(null);
        setEditFileName(data.pdf); // untuk tampilkan nama file lama
        setEditOldImage(data.fotoSampul); // untuk tampilkan gambar lama
        setEditModal(true);
    }


    return (
        <div>
            <div className="d-flex flex-column flex-md-row">
                <NavSide />
            </div>
            <div className="container py-4">
                <section>
                    <div className="row">
                        <div className="col pt-3 mb-3">
                            <div className="card border-0 shadow-none" style={{ backgroundColor: '#F16022' }}>
                                <div className="card-body text-center text-md-start">
                                    <h1 className="text-white fs-3 fs-md-1">Tata Kelola</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card p-3 mb-3" style={{ backgroundColor: '#115258' }}>
                                <h3 className="text-white">Masukkan Data</h3>
                            </div>
                            <div className="card p-3">
                                <form onSubmit={createTataKelola} encType="multipart/form-data">
                                    <div className="mb-3">
                                        <p>Masukkan Deskripsi</p>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={desKebijakan}  // ✅ ubah ini
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                setDesKebijakan(data); // ✅ tetap ini
                                            }}
                                        />
                                    </div>

                                    <select
                                        className="form-control"
                                        value={kategory}
                                        onChange={(e) => setKategory(e.target.value)}
                                    >
                                        <option value="">--Silahkan Pilih Kategori--</option>
                                        <option value="kodeEtik">Kode Etik</option>
                                        <option value="kebijakanPelapor">Kebijakan Pelapor</option>
                                        <option value="kebijakanKeberagaman">Kebijakan Keberagaman</option>
                                        <option value="antiSuap">Kebijakan Anti Suap dan Anti Korupsi</option>
                                    </select>

                                    <div className="mb-3">
                                        <p>Masukkan file PDF (Jika ada)</p>
                                        <input type="file" className="form-control" ref={fileInputPdf} accept=".pdf" />
                                    </div>

                                    <div className="mb-3">
                                        <p>Masukkan Gambar Sampul</p>
                                        <input type="file" className="form-control" onChange={handleFileChange} />
                                    </div>

                                    <button className="btn btn-secondary">Tambahkan Data</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </section>
                {/* modal edit */}
                <section>
                    {editModal && (
                        <div className="modal show fade d-block" tabIndex="-1">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <form
                                        encType="multipart/form-data"
                                        onSubmit={handleUpdateTataKelola}
                                    >
                                        <div className="modal-header">
                                            <h5 className="modal-title">Edit Data Tata Kelola</h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                onClick={() => setEditModal(false)}
                                            ></button>
                                        </div>

                                        <div className="modal-body">
                                            {/* DESKRIPSI */}
                                            <div className="mb-3">
                                                <p>Masukkan Deskripsi</p>
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={editDesKebijakan.deskripKebijakan}
                                                    onChange={(event, editor) => {
                                                        const data = editor.getData();
                                                        setEditDesKeb({ deskripKebijakan: data });
                                                    }}
                                                />
                                            </div>

                                            {/* KATEGORI */}
                                            <div className="mb-3">
                                                <p>Pilih Kategori</p>
                                                <select
                                                    className="form-control"
                                                    value={editCategory.category}
                                                    onChange={(e) =>
                                                        setEditCategory({ category: e.target.value })
                                                    }
                                                >
                                                    <option value="">--Silahkan Pilih Kategori--</option>
                                                    <option value="kodeEtik">Kode Etik</option>
                                                    <option value="kebijakanPelapor">Kebijakan Pelapor</option>
                                                    <option value="kebijakanKeberagaman">Kebijakan Keberagaman</option>
                                                    <option value="antiSuap">Kebijakan Anti Suap dan Anti Korupsi</option>
                                                </select>
                                            </div>

                                            {/* FILE PDF */}
                                            <div className="mb-3">
                                                <p>File PDF (opsional jika ingin ubah)</p>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    accept=".pdf"
                                                    onChange={(e) => setEditPdf(e.target.files[0])}
                                                />
                                                {editFileName && (
                                                    <small className="text-muted">
                                                        File lama: <strong>{editFileName}</strong>
                                                    </small>
                                                )}
                                            </div>

                                            {/* GAMBAR SAMPUL */}
                                            <div className="mb-3">
                                                <p>Gambar Sampul (opsional jika ingin ubah)</p>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    accept="image/*"
                                                    onChange={handleEditFileChange}
                                                />

                                                {/* Preview gambar lama */}
                                                {!editImgTakel && editOldImage && (
                                                    <div className="mt-3 text-center">
                                                        <p className="text-muted mb-1">Gambar saat ini:</p>
                                                        <img
                                                            src={`http://127.0.0.1:8000/TataKelola/image/${editOldImage}`}
                                                            alt="Gambar Lama"
                                                            style={{
                                                                width: "200px",
                                                                borderRadius: "10px",
                                                                objectFit: "cover",
                                                            }}
                                                        />
                                                    </div>
                                                )}

                                                {/* Preview gambar baru */}
                                                {editImgTakel && (
                                                    <div className="mt-3 text-center">
                                                        <p className="text-muted mb-1">Gambar baru:</p>
                                                        <img
                                                            src={URL.createObjectURL(editImgTakel)}
                                                            alt="Preview Baru"
                                                            style={{
                                                                width: "200px",
                                                                borderRadius: "10px",
                                                                objectFit: "cover",
                                                            }}
                                                        />
                                                        <p className="text-muted mt-1">{editImgTakel.name}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                onClick={() => setEditModal(false)}
                                            >
                                                Batal
                                            </button>
                                            <button type="submit" className="btn btn-primary">
                                                Simpan Perubahan
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}

                </section>
                <section>
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped">
                                        <thead className="table-light">
                                            <tr>
                                                <th>No</th>
                                                <th>Deskripsi</th>
                                                <th>Kategori</th>
                                                <th>PDF</th>
                                                <th>Foto Sampul</th>
                                                <th>Opsi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tataKelolaList.length > 0 ? (
                                                tataKelolaList.map((data, index) => (
                                                    <tr key={data.uuid}>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <div
                                                                className="text-truncate"
                                                                style={{
                                                                    display: '-webkit-box',
                                                                    WebkitLineClamp: 3,
                                                                    WebkitBoxOrient: 'vertical',
                                                                    overflow: 'hidden',
                                                                }}
                                                            >
                                                                <div dangerouslySetInnerHTML={{ __html: data.deskripKebijakan }} />
                                                            </div>
                                                        </td>
                                                        <td>{data.category}</td>
                                                        <td>{data.pdf}</td>
                                                        <td>
                                                            <div
                                                                style={{
                                                                    width: "80px",
                                                                    height: "80px",
                                                                    overflow: "hidden",
                                                                    borderRadius: "8px",
                                                                }}
                                                            >
                                                                <img
                                                                    src={`http://127.0.0.1:8000/TataKelola/image/${data.fotoSampul}`}
                                                                    alt="Preview"
                                                                    style={{
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        objectFit: "cover",
                                                                    }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="row">
                                                                <div className="col d-flex gap-3">
                                                                    <button className="btn btn-warning" onClick={() => openEditModal(data)}>Edit</button>
                                                                    <button className="btn btn-danger btn-sm" onClick={() => deleteTakel(data.uuid)}>Delete</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td>

                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AdminTataKelola;