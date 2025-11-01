import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavbarHijau from "../Component/navbarHijau";
import { useTranslation } from "react-i18next";
import DOMPurify from "dompurify";
import Swal from "sweetalert2";

function BeritaSelengkapnya() {
    const { uuid } = useParams();
    const [berita, setBerita] = useState(null);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        getSelengkapnyaData();
    }, []);

    const getSelengkapnyaData = async () => {
        Swal.fire({
            title: "Memuat data...",
            text: "Harap tunggu sebentar",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        try {
            const res = await axios.get(
                `http://127.0.0.1:8000/api/user/berita/selengkapnya/${uuid}`
            );
            setBerita(res.data.selengkapnya);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Gagal memuat data",
                text: error.message,
            });
        }
    };

    // Fungsi untuk format tanggal
    const formatTanggal = (tanggalString) => {
        const tanggal = new Date(tanggalString);
        const options = {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        };
        return tanggal.toLocaleDateString("id-ID", options);
    };

    // Ketika gambar selesai dimuat
    const handleImageLoad = () => {
        Swal.close();
    };

    // Jika terjadi error saat load gambar
    const handleImageError = () => {
        Swal.close();
        Swal.fire({
            icon: "error",
            title: "Gagal memuat gambar",
            text: "Coba muat ulang halaman",
        });
    };

    return (
        <div>
            <NavbarHijau />
            {berita ? (
                <div className="container-fluid pt-5 mt-5">
                    <div className="row pt-5 mt-5">
                        <div className="col p-5">
                            <h2 className="text-uppercase fw-bold" style={{ color: "#115258" }}>
                                Berita
                            </h2>
                        </div>
                    </div>

                    <div className="row p-5">
                        {/* Sidebar kiri */}
                        <div className="col-auto d-none d-sm-block">
                            <div className="garis-berita"></div>
                        </div>

                        {/* Judul dan tanggal */}
                        <div className="col-md-4 d-flex flex-column justify-content-between">
                            <div>
                                <ul className="list-unstyled">
                                    <li>
                                        <a
                                            href="/berita"
                                            className="fs-1 text-decoration-none berita-active"
                                        >
                                            {t("news_in_masmindo")}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/instagram"
                                            className="fs-1 text-black text-decoration-none"
                                        >
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/youtube"
                                            className="fs-1 text-black text-decoration-none"
                                        >
                                            Youtube
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/dokumentasi"
                                            className="fs-1 text-black text-decoration-none"
                                        >
                                            {t("documentation_title")}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-auto pt-4">
                                <p className="mb-1">
                                    {formatTanggal(berita.created_at)}
                                </p>
                                <h3
                                    className="fw-bold display-6"
                                    style={{ color: "#013233" }}
                                >
                                    {i18n.language === "id"
                                        ? berita.judul_berita_id
                                        : berita.judul_berita_en}
                                </h3>
                            </div>
                        </div>

                        {/* Gambar utama */}
                        <div className="col-md-7">
                            <div
                                className="card rounded-5 overflow-hidden responsive-image-container"
                                style={{ height: "100vh" }}
                            >
                                <img
                                    src={`http://localhost:8000/Berita/${encodeURIComponent(
                                        berita.image_berita
                                    )}`}
                                    alt="Image"
                                    className="img-fluid object-fit-cover rounded-5"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    onLoad={handleImageLoad}
                                    onError={handleImageError}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Deskripsi */}
                    <div className="row p-5 d-flex justify-content-center">
                        <div className="col-12 col-md-8">
                            <h4
                                className="fw-light"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        i18n.language === "id"
                                            ? DOMPurify.sanitize(berita.deskripsi_berita_id)
                                            : DOMPurify.sanitize(berita.deskripsi_berita_en),
                                }}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <h1 className="text-center my-5"></h1>
            )}
        </div>
    );
}

export default BeritaSelengkapnya;
