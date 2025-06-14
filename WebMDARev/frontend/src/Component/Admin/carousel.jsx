import React, { useState, useEffect } from "react";
import NavSide from "./navSide";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { event } from "jquery";
import DOMPurify from 'dompurify';




function Carousel() {
    const [imageCarousel, setImageCarousel] = useState(null);
    const [imageCarouselList, setImageCarouselList] = useState([]);
    const [judulId, setJudulId] = useState("");
    const [bodyId, setBodyId] = useState("");
    const [judulEn, setJudulEn] = useState("");
    const [bodyEn, setBodyEn] = useState("");

    const token = localStorage.getItem('token');
    const { t, i18n } = useTranslation();

    // modal
    const [editModal, setEditModal] = useState(false);
    const [editText, setEditText] = useState({ text_carousel_id: '', text_carousel_en: '' });
    const [editId, setEditId] = useState("");
    const [editImg, setEditImg] = useState(null);



    const formatTanggal = (tanggal) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(tanggal).toLocaleDateString('id-ID', options);
    };




    const getCarouselData = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/admin/carousel/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setImageCarouselList(res.data.carousel);

        } catch (error) {
            alert(error);
        }
    }


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImageCarousel(file);
    }


    const createCarouselData = async (e) => {
        e.preventDefault();

        if (!imageCarousel) {
            alert("Pilih file terlebih dahulu");
            return;
        }

        const formData = new FormData();
        formData.append("text_carousel_id", judulId);     // GANTI INI
        formData.append("body_text_id", bodyId);
        formData.append("text_carousel_en", judulEn);     // GANTI INI
        formData.append("body_text_en", bodyEn);
        formData.append("image_carousel", imageCarousel);

        try {
            await axios.post("http://127.0.0.1:8000/api/admin/carousel", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Reset form
            setImageCarousel(null);
            setJudulId("");
            setBodyId("");
            setJudulEn("");
            setBodyEn("");
            alert('Success');
            getCarouselData();
        } catch (error) {
            alert(error);
        }
    };

    const deleteCarouselData = async (uuid) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/admin/carousel/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getCarouselData();
            alert('Success')
        } catch (error) {
            if (error.response && error.response.data) {
                console.log(error.response.data.errors); // Menampilkan detail error validasi
                alert(JSON.stringify(error.response.data.errors));
            } else {
                alert("Terjadi kesalahan lain");
            }
        }
    }

    const editCarouselData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("text_carousel_id", editText.text_carousel_id);
        formData.append("text_carousel_en", editText.text_carousel_en);
        formData.append("body_text_id", editText.body_text_id); // WAJIB
        formData.append("body_text_en", editText.body_text_en); // WAJIB
        if (editImg) {
            formData.append("image_carousel", editImg); // WAJIB sesuai validasi
        }

        try {
            await axios.post(`http://127.0.0.1:8000/api/admin/carousel/${editId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            setEditImg(null);
            setEditText({ text_carousel_id: '', body_text_id: '', text_carousel_en: '', body_text_en: '' });
            setEditModal(false);
            getCarouselData();
            alert('Success');
        } catch (error) {
            if (error.response && error.response.data) {
                console.error(error.response.data);
                alert(JSON.stringify(error.response.data));
            } else {
                alert("Terjadi kesalahan saat mengedit");
            }
        }
    }

    function opendEditModal(carousel) {
        setEditId(carousel.uuid);
        setEditText({
            text_carousel_id: carousel.text_carousel_id,
            body_text_id: carousel.body_text_id,
            text_carousel_en: carousel.text_carousel_en,
            body_text_en: carousel.body_text_en,
        });
        setEditModal(true);
        setEditImg(null);
    }


    useEffect(() => {
        getCarouselData();
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
                                    <h3 className="p-0 m-0 text-white">{t('carousel_page_title')}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="card p-3 mb-3" style={{ backgroundColor: "#115258" }}>
                                    <h3 className="p-0 m-0 text-white">{t('input_data_title')}</h3>
                                </div>
                                <div className="card p-3">
                                    <form onSubmit={createCarouselData}>
                                        <div className="mb-3">
                                            <p>{t('carousel_title_id_label')}</p>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={judulId}
                                                onChange={(e) => setJudulId(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <p>{t('carousel_description_id_label')}</p>
                                            <textarea
                                                className="form-control"
                                                rows="3"
                                                value={bodyId}
                                                onChange={(e) => setBodyId(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <p>{t('carousel_title_en_label')}</p>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={judulEn}
                                                onChange={(e) => setJudulEn(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <p>{t('carousel_description_en_label')}</p>
                                            <textarea
                                                className="form-control"
                                                rows="3"
                                                value={bodyEn}
                                                onChange={(e) => setBodyEn(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <p>{t('input_carousel_image_label')}</p>
                                            <input
                                                type="file"
                                                className="form-control"
                                                onChange={handleFileChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <button
                                                type="submit"
                                                className="btn btn-sm text-white p-2"
                                                style={{ backgroundColor: '#115258' }}
                                            >
                                                {t('add_data_button')}
                                            </button>
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
                                                <th>{t('table_no')}</th>
                                                <th>{t('table_image')}</th>
                                                <th>{t('table_head_id')}</th>
                                                <th>{t('table_body_id')}</th>
                                                <th>{t('table_head_en')}</th>
                                                <th>{t('table_body_en')}</th>
                                                <th>{t('table_created_at')}</th>
                                                <th>{t('table_updated_at')}</th>
                                                <th>{t('table_action')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {imageCarouselList.length > 0 ? (
                                                imageCarouselList.map((carousel, index) => (
                                                    <tr key={carousel.uuid}>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <img
                                                                src={`http://localhost:8000/Carousel/${encodeURIComponent(carousel.image_carousel)}`}
                                                                alt={`Carousel Image ${index + 1}`}
                                                                style={{ width: '100px', height: 'auto', objectFit: 'cover' }}
                                                            />
                                                        </td>
                                                        <td><div className="text-truncate" style={{ maxWidth: '200px' }}>{carousel.text_carousel_id}</div></td>
                                                        <td><div className="text-truncate" style={{ maxWidth: '200px' }}>{carousel.body_text_id}</div></td>
                                                        <td><div className="text-truncate" style={{ maxWidth: '200px' }}>{carousel.text_carousel_en}</div></td>
                                                        <td><div className="text-truncate" style={{ maxWidth: '200px' }}>{carousel.body_text_en}</div></td>
                                                        <td>{formatTanggal(carousel.created_at)}</td>
                                                        <td>{formatTanggal(carousel.updated_at)}</td>
                                                        <td>
                                                            <div className="d-flex flex-column flex-md-row gap-2">
                                                                <button
                                                                    className="btn btn-sm btn-warning d-flex align-items-center justify-content-center gap-1"
                                                                    onClick={() => opendEditModal(carousel)}
                                                                >
                                                                    <span className="d-none d-md-inline">{t('edit_button')}</span>
                                                                    <i className="fas fa-edit d-md-none"></i> {/* Contoh icon FontAwesome */}
                                                                </button>
                                                                <button
                                                                    className="btn btn-sm btn-danger d-flex align-items-center justify-content-center gap-1"
                                                                    onClick={() => deleteCarouselData(carousel.uuid)}
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
                                                    <td colSpan="9" className="text-center text-muted py-3">
                                                        {t('no_carousel_data')}
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
                                    <form onSubmit={editCarouselData} encType="multipart/form-data">
                                        <div className="modal-header">
                                            <h5 className="modal-title">{t('edit_carousel_modal_title')}</h5>
                                            <button type="button" className="btn-close" aria-label="Close" onClick={() => setEditModal(false)}></button>
                                        </div>
                                        <div className="modal-body">
                                            {/* Judul ID */}
                                            <div className="mb-3">
                                                <label>{t('edit_head_id_label')}</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={editText.text_carousel_id}
                                                    onChange={(e) => setEditText(prev => ({ ...prev, text_carousel_id: e.target.value }))}
                                                />
                                            </div>
                                            {/* Deskripsi ID */}
                                            <div className="mb-3">
                                                <label>{t('edit_body_id_label')}</label>
                                                <textarea
                                                    className="form-control"
                                                    rows="3"
                                                    value={editText.body_text_id || ""}
                                                    onChange={(e) => setEditText(prev => ({ ...prev, body_text_id: e.target.value }))}
                                                ></textarea>
                                            </div>
                                            {/* Judul EN */}
                                            <div className="mb-3">
                                                <label>{t('edit_head_en_label')}</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={editText.text_carousel_en}
                                                    onChange={(e) => setEditText(prev => ({ ...prev, text_carousel_en: e.target.value }))}
                                                />
                                            </div>
                                            {/* Deskripsi EN */}
                                            <div className="mb-3">
                                                <label>{t('edit_body_en_label')}</label>
                                                <textarea
                                                    className="form-control"
                                                    rows="3"
                                                    value={editText.body_text_en || ""}
                                                    onChange={(e) => setEditText(prev => ({
                                                        ...prev,
                                                        body_text_en: e.target.value
                                                    }))}
                                                ></textarea>
                                            </div>

                                            {/* Gambar */}
                                            <div className="mb-3">
                                                <label>{t('change_image_optional_label')}</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    onChange={(e) => setEditImg(e.target.files[0])}
                                                />
                                                {editText.image_carousel && !editImg && (
                                                    <small className="form-text text-muted mt-2 d-block">
                                                        Current image: {editText.image_carousel}
                                                        <br />
                                                        <img
                                                            src={`http://localhost:8000/Carousel/${encodeURIComponent(editText.image_carousel)}`}
                                                            alt="Current Carousel"
                                                            style={{ width: '80px', height: 'auto', objectFit: 'cover', marginTop: '5px' }}
                                                        />
                                                    </small>
                                                )}
                                                {editImg && (
                                                    <small className="form-text text-muted mt-2 d-block">
                                                        New image selected: {editImg.name}
                                                    </small>
                                                )}
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

export default Carousel;