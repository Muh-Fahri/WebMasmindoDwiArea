import React, { useEffect, useRef, useState } from "react";
import NavSide from "./navSide";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { event } from "jquery";


function AdminTataKelola() {
    const Token = localStorage.getItem('Token');
    const [setTataKelola, tataKelolaList] = useState([]);

    const [desKebijakan, setDesKebijakan] = useState('');
    const [imgTataKelola, setImgTataKelola] = useState('');
    const [filePdf, setFilePdf] = useState('');
    const [kategory, setKategory] = useState('');
    const fileInputPdf = useRef(null);


    const getTataKelolaData = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/admin/tataKelola', {
                headers: {
                    Authorization: `Bearer ${Token}`
                }
            });
            setTataKelola(res.data.tataKelola);
        } catch (error) {

        }
    }

    const createTataKelola = async (e) => {
        e.preventDefault();
        const file = fileInputPdf.current.files[0];

        if (!file) {
            alert('Silahkan Masukkan PDF anda');
            return;
        }
        const formData = new FormData();
        formData.append('deskripKebijakan', desKebijakan);
        formData.append('fotoSampul', imgTataKelola);
        formData.append('category', kategory);
        try {
            await axios.post('http://127.0.0.1:8000/api/admin/tataKelola', formData, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            setDesKebijakan('');
            setImgTataKelola('');
            setFilePdf('');
            setKategory('');
            getTataKelolaData();
        } catch (error) {
            alert(error);

        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImgTataKelola(file)
    }

    useEffect(() => {
        getTataKelolaData();
    }, []);

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
                                <form action="">
                                    <div className="mb-3">
                                        <p>Masukkan Deskripsi</p>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={desKebijakan}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                setDesKebijakan(data);
                                            }}


                                        />
                                    </div>
                                    <div className="mb-3">
                                        <select name="" id="" className="form-control">
                                            <option value="">--Silahkan Pilih Kategori--</option>
                                            <option value="">Kode Etik</option>
                                            <option value="">Kebijakan Pelapor</option>
                                            <option value="">Kebijakan Keberagaman</option>
                                            <option value="">Kebijakan Anti Suap dan Anti Korupsi</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <p>Masukkan file PDF (Jika ada)</p>
                                        <input type="file" className="form-control" ref={fileInputPdf} accept=".pdf" required />
                                    </div>
                                    <div className="mb-3">
                                        <p>Masukkan Gambar Ssampul</p>
                                        <input type="file" className="form-control" onChange={handleFileChange} />
                                    </div>
                                    <button className="btn btn-secondary">Tambahkan Data</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped">
                                        <thead className="table-light">
                                            <th>No</th>
                                            <th>Deskripsi</th>
                                            <th>Kategori</th>
                                            <th>PDF</th>
                                            <th>Foto Sampul</th>
                                            <th>Opsi</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Sequi ad aut quam ratione exercitationem illum cupiditate
                                                    iusto voluptatum repellendus quibusdam!
                                                </td>
                                                <td>Kode Etik</td>
                                                <td>wkwkwkwkwkwkwk</td>
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
                                                            src="/Image/Background/profesional.webp"
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
                                                            <a href="" className="btn btn-sm btn-warning">Edit</a>
                                                            <a href="" className="btn btn-sm btn-danger">Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
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