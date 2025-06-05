import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavSide from "./navSide";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import NoData from "../Error/NoData";
import handleUnauthorized from "./unouthorized";


function Bisnis() {
    const [linkYt, setLinkYt] = useState("");
    const [deskrip, setDeskrip] = useState("");
    const [bisnisList, setBisnisList] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    // modal
    const [editModal, setEditModal] = useState(false);
    const [editId, setEditId] = useState("");
    const [editLink, setEditLink] = useState("");
    const [editDeskrip, setEditDeskrip] = useState("");



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



    const addBisnisPage = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/admin/bisnis", {
                link_video: linkYt,
                deskripsi_bisnis: deskrip,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }

            });
            setLinkYt("");
            setDeskrip("");
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


    const openEditModal = (bisnis) => {
        setEditModal(true);
        setEditId(bisnis.uuid);
        setEditLink(bisnis.link_video);
        setEditDeskrip(bisnis.deskripsi_bisnis);
    };


    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/admin/bisnis/${editId}`, {
                link_video: editLink,
                deskripsi_bisnis: editDeskrip,
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
            {/* NavSide: Akan mengambil lebar 100% di mobile dan 260px di desktop */}
            {/* Hapus style width dari sini, biarkan NavSide yang mengelola ukurannya di mobile jika dia navbar */}
            {/* Jika NavSide adalah sidebar tetap di desktop, gunakan d-none d-md-block untuk pembungkusnya dan atur width 260px */}
            {/* Opsi 1: NavSide adalah navbar di mobile, sidebar di desktop (paling umum) */}
            <div style={{ width: '260px', flexShrink: 0 }} className="flex-grow-1 flex-md-grow-0">
                <NavSide />
            </div>
            {/* Jika NavSide berubah jadi hamburger menu di mobile yang terlepas dari layout utama,
                Anda mungkin perlu memasukkan <NavSide /> di luar div d-flex atau mengelola
                tampilannya di dalam NavSide itu sendiri.
                Namun untuk menyembunyikan div 260px di mobile, `d-none d-md-block` adalah kuncinya.
            */}
            {/* Opsi 2: NavSide adalah navbar di mobile (di atas) dan sidebar di desktop.
               Untuk kasus ini, NavSide *sendiri* yang harus punya breakpoint untuk mengubah dirinya dari
               navbar 100% lebar di mobile menjadi sidebar 260px di desktop.
               Akan tetapi, untuk layout ini, kita fokus pada konten.
               Jika NavSide adalah sidebar *tetap* di mobile (misalnya sticky di kiri), maka Anda perlu
               mengubah `d-flex` utama menjadi `d-flex` saja tanpa `flex-column flex-md-row`
               dan NavSide harus mengelola lebar sendiri.
               Untuk contoh ini, saya akan asumsikan NavSide tersembunyi di mobile dan muncul di desktop sebagai sidebar.
            */}


            {/* Konten Utama */}
            {/* px-3 px-md-5 untuk padding horizontal responsif */}
            {/* pt-5 mt-5 untuk memberi ruang di atas konten, menghindari tumpang tindih dengan fixed navbar atau NavSide di mobile */}
            <div className="flex-grow-1 content px-3 px-md-5 pt-5 mt-md-0" style={{ marginLeft: '0', overflowX: 'hidden' }}>
                {/* Judul Halaman di Mobile bisa diberi padding-top agar tidak terlalu mepet dengan NavSide jika NavSide ada di atas */}
                <section>
                    <div className="container-fluid p-0"> {/* Hapus padding di container-fluid karena sudah ada di content */}
                        <div className="row">
                            <div className="col">
                                <div className="card bg-info p-3">
                                    <h3 className="text-white">Bisnis Page</h3>
                                </div>
                                <div className="card mt-5 p-3 p-md-5"> {/* Kurangi padding di mobile, p-5 di desktop */}
                                    <h3>Create Bisnis Page</h3>
                                    <form onSubmit={addBisnisPage}>
                                        <div className="mb-3"> {/* Gunakan mb-3 untuk margin bawah pada form group */}
                                            <label htmlFor="linkYoutube" className="form-label">Link Youtube</label>
                                            <input type="text" id="linkYoutube" className="form-control" value={linkYt} onChange={(e) => setLinkYt(e.target.value)} required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="deskripsiHalaman" className="form-label">Deskripsi Halaman</label>
                                            <textarea id="deskripsiHalaman" className="form-control" value={deskrip} onChange={(e) => setDeskrip(e.target.value)} required></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-sm">Add Data</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-5">
                    <div className="p-0 container-fluid">
                        <div className="card bg-info p-3">
                            <h3 className="text-white">Data</h3>
                        </div>
                        <div className="table-responsive">
                            <table className="table mt-5">
                                {bisnisList.length > 0 && (
                                    <thead>
                                        <tr>
                                            {/* Header Tabel: fs-7 di mobile, fs-5 di md ke atas */}
                                            <th className="fs-7 fs-md-5">No</th>
                                            <th className="fs-7 fs-md-5">Link Youtube</th>
                                            <th className="fs-7 fs-md-5">Deskripsi Halaman</th>
                                            <th className="fs-7 fs-md-5">Aksi</th>
                                        </tr>
                                    </thead>
                                )}
                                <tbody>
                                    {bisnisList.length > 0 ? (
                                        bisnisList.map((bisnis, index) => (
                                            <tr key={bisnis.uuid}>
                                                {/* Nomor Baris: fs-7 di mobile, fs-5 di md ke atas */}
                                                <td className="fs-7 fs-md-5">{index + 1}</td>
                                                <td>
                                                    {/* Iframe: Sangat kecil di mobile (max-width: 100px), normal di desktop */}
                                                    <div className="ratio ratio-16x9 mx-auto" style={{ maxWidth: '100px' }}> {/* Lebih dikecilkan */}
                                                        <iframe
                                                            src={bisnis.link_video.replace("watch?v=", "embed/")}
                                                            title="YouTube video"
                                                            frameBorder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                        ></iframe>
                                                    </div>
                                                </td>
                                                <td>
                                                    {/* Deskripsi: fs-7 di mobile, fs-5 di md ke atas. Batasi 2 baris di mobile. */}
                                                    <p className="text-truncate-custom fs-7 fs-md-5 description-limit" style={{ whiteSpace: 'pre-line' }}>{bisnis.deskripsi_bisnis}</p>
                                                </td>
                                                <td>
                                                    {/* Tombol Aksi: Flex kolom di mobile, flex row di desktop */}
                                                    {/* Ukuran tombol: tetap btn-sm */}
                                                    {/* Teks tombol: hanya ikon di mobile, teks + ikon di desktop */}
                                                    <div className="d-flex flex-column flex-md-row gap-1"> {/* Kurangi gap agar lebih rapat */}
                                                        <button className="btn btn-sm btn-warning d-flex align-items-center justify-content-center gap-1" onClick={() => openEditModal(bisnis)}>
                                                            <span className="d-none d-md-inline">Edit </span> {/* Teks hanya di desktop */}
                                                            <FontAwesomeIcon icon={faPencilAlt} />
                                                        </button>
                                                        <button className="btn btn-sm d-flex align-items-center justify-content-center gap-1 btn-danger" onClick={() => deleteBisnisData(bisnis.uuid)}>
                                                            <span className="d-none d-md-inline">Delete </span> {/* Teks hanya di desktop */}
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <NoData />
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    {editModal && (
                        <div className="modal show fade d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}> {/* Tambah background overlay */}
                            <div className="modal-dialog modal-dialog-centered"> {/* Tengah modal secara vertikal */}
                                <div className="modal-content">
                                    <form onSubmit={handleEditSubmit}>
                                        <div className="modal-header">
                                            <h5 className="modal-title">Edit Data Bisnis</h5>
                                            <button type="button" className="btn-close" onClick={() => setEditModal(false)}></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="mb-3">
                                                <label htmlFor="editLinkYoutube" className="form-label">Link Youtube</label>
                                                <input type="text" id="editLinkYoutube" className="form-control" value={editLink} onChange={(e) => setEditLink(e.target.value)} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="editDeskripsi" className="form-label">Deskripsi</label>
                                                {/* Kurangi rows di mobile atau gunakan style max-height */}
                                                <textarea rows={5} className="form-control" value={editDeskrip} onChange={(e) => setEditDeskrip(e.target.value)}></textarea>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={() => setEditModal(false)}>Tutup</button>
                                            <button type="submit" className="btn btn-primary">Simpan Perubahan</button>
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