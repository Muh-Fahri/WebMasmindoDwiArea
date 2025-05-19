import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import NavSide from "./navSide";
import handleUnauthorized from "./unouthorized";

function PDF() {
    const [pdfList, setPdfList] = useState([]);
    const token = localStorage.getItem('token');

    const [tahunList, setTahunList] = useState("");
    const fileInputRef = useRef(null);


    useEffect(() => {
        getPdfData();
    }, []);

    const getPdfData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/admin/pdf/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setPdfList(res.data.pdf);
        } catch (error) {
            handleUnauthorized(error);
        }
    }

    const downloadPdf = async (storedName) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/admin/pdf/download_pdf/${encodeURIComponent(storedName)}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                responseType: 'blob',
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', storedName);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Download error:', error);
        }
    };

    const createPdfData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const fileInput = document.querySelector("#pdf-upload");
        formData.append('tahun', tahunList);
        const file = fileInput.files[0];

        if (!file) {
            alert("Pdf Belum dipilih");
            return;
        }
        formData.append('pdf', file);

        try {
            await axios.post("http://127.0.0.1:8000/api/admin/pdf", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            getPdfData();
            setTahunList("");
            fileInputRef.current.value = "";
            alert('Upload Berhasil');
        } catch (error) {
            alert("Gagal Upload Data");
        }
    }

    // Perbaikan: Terima uuid sebagai parameter
    const deletePdfData = async (uuid) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/admin/pdf/delete/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getPdfData();
            alert("Berhasil Hapus Data");
        } catch (error) {
            alert('Gagal menghapus data');
        }
    }

    return (
        <div>
            <NavSide />
            <div className="flex-grow-p3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card p-3 bg-info text-white">
                                <div className="mb-3">
                                    <h3>Laporan Keberlanjutan</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card p-3 mt-5">
                                <h4>Add PDF</h4>
                                <form onSubmit={createPdfData}>
                                    <div className="mb-3">
                                        <p>PDF</p>
                                        <input
                                            type="file"
                                            id="pdf-upload"
                                            className="form-control"
                                            ref={fileInputRef}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <p>Tahun</p>
                                        <input
                                            value={tahunList}
                                            onChange={(e) => setTahunList(e.target.value)}
                                            type="number"
                                            className="form-control"
                                            placeholder="Masukkan tahun (mis. 2025)"
                                            required
                                            min="1900"
                                            max={new Date().getFullYear()}
                                        />


                                    </div>
                                    <div className="mb-3">
                                        <button className="btn btn-sm btn-primary">Tambahkan</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card p-3 mt-5">
                                <h4 className="text-success">Data</h4>
                                <table className="table mt-5">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Nama File</th>
                                            <th>Dibuat Pada</th>
                                            <th>Tahun</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            pdfList.length > 0 ? (
                                                pdfList.map((pdf, index) => (
                                                    // Pastikan pdf.uuid ada, jika tidak ada ganti ke pdf.id sesuai response API
                                                    <tr key={pdf.uuid}>
                                                        <td>{index + 1}</td>
                                                        <td>{pdf.original_name}</td>
                                                        <td>{pdf.created_at}</td>
                                                        <td>{pdf.tahun}</td>
                                                        <td>
                                                            <div className="row d-flex">
                                                                <div className="col-auto">
                                                                    <button onClick={() => downloadPdf(pdf.stored_name)} className="btn btn-sm btn-primary">
                                                                        Download
                                                                    </button>
                                                                </div>
                                                                <div className="col-auto">
                                                                    <button className="btn btn-sm btn-danger" onClick={() => deletePdfData(pdf.uuid)}>Delete</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="4" className="text-center">Loading...</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PDF;
