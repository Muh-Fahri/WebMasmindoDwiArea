import React, { useEffect, useState, useRef, } from "react";
import Navbar from "../Component/navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { MapContainer, TileLayer, CircleMarker, useMap, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Footer from "./fotter";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";
import DOMPurify from 'dompurify';
import Swal from "sweetalert2";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function DisableScrollZoom() {
    const map = useMap();

    useEffect(() => {
        map.scrollWheelZoom.disable();
    }, [map]);

    return null;
}




function InfoCard({ position, visible }) {
    const map = useMap();
    const [point, setPoint] = useState(map.latLngToContainerPoint(position));
    const cardRef = useRef();
    const { t, i18n } = useTranslation();
    useMapEvent('move', () => {
        setPoint(map.latLngToContainerPoint(position));
    });
    useMapEvent('zoom', () => {
        setPoint(map.latLngToContainerPoint(position));
    });

    if (!visible) return null;

    return (
        <div
            ref={cardRef}
            style={{
                position: 'absolute',
                left: point.x,
                top: point.y - 70,
                transform: 'translate(-50%, -100%)',
                zIndex: 1000,
                backgroundColor: ' rgba(0, 0, 0, 0)',
                padding: '10px',
                borderRadius: '8px',
                pointerEvents: 'auto',
            }}
        >
            <h1 className="fw-bold" style={{ color: "#F16022" }}>{t('awak_mas_project_title')}</h1>
            <h3 className="fw-bold">{t('awak_mas_project_area')}</h3>
            <div className="row">
                <div className="col-md-6">
                    <p className="fs-4">
                        {t('awak_mas_project_location_part1')}
                        {t('awak_mas_project_location_part2')}
                        {t('awak_mas_project_location_part3')}
                    </p>
                </div>
            </div>
        </div>
    );
}


function Home() {
    const [bisnisList, setBisnisList] = useState([]);
    const [beritaList, setBeritaList] = useState([]);
    const [imageCarList, setImgCarList] = useState([]);

    const position = [-3.4717, 120.1994];
    const [showCard, setShowCard] = useState(false);
    const { t, i18n } = useTranslation();
    const [showInfo, setShowInfo] = useState(true);

    const handleMarkerClick = () => {
        setShowCard((prevState) => !prevState);
    };

    useEffect(() => {
        getAllData();
        AOS.init({
            duration: 1000,
        });


        const timer = setTimeout(() => {
            setShowInfo(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);


    const getAllData = async () => {
        Swal.fire({
            title: 'Memuat data...',
            text: 'Harap tunggu sebentar, sedang mengambil semua informasi.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        try {
            // Jalankan semua request API secara paralel
            const [bisnisRes, beritaRes, carouselRes] = await Promise.all([
                axios.get("http://127.0.0.1:8000/api/user/bisnis"),
                axios.get("http://127.0.0.1:8000/api/user/berita"),
                axios.get("http://127.0.0.1:8000/api/user/carousel")
            ]);

            // Simpan ke state
            setBisnisList(bisnisRes.data.bisnisUser);
            setBeritaList(beritaRes.data.berita);
            setImgCarList(carouselRes.data.carousel);

            // Tutup loading
            Swal.close();

            // Tampilkan notifikasi sukses
            Swal.fire({
                icon: 'success',
                title: 'Data berhasil dimuat!',
                text: `Berhasil memuat ${beritaRes.data.berita.length} berita dan ${bisnisRes.data.bisnisUser.length} bisnis.`,
                showConfirmButton: false,
                timer: 1500,
            });

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal memuat data',
                text: error.message,
            });

            // Kalau error, kosongkan datanya supaya UI tetap aman
            setBisnisList([]);
            setBeritaList([]);
            setImgCarList([]);
        }
    };

    return (
        <div>
            <Navbar />
            <section>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {imageCarList.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={index}
                                className={index === 0 ? "active" : ""}
                                aria-current={index === 0 ? "true" : undefined}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                    <div className="carousel-inner">
                        {imageCarList.map((item, index) => (
                            <div key={item.uuid} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                <div
                                    className="d-flex align-items-center"
                                    style={{
                                        backgroundImage: `url(http://localhost:8000/Carousel/${encodeURIComponent(item.image_carousel)})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "100vh",
                                    }}
                                >
                                    <div className="container">
                                        <div className="row" data-aos="fade-right">
                                            <div className="col-md-8">
                                                <h1 className="display-1 fw-bold m-0 p-0" style={{ color: '#F16022' }}>
                                                    {i18n.language === 'id' ? item.text_carousel_id : item.text_carousel_en}
                                                </h1>
                                                <p className="display-1 m-0 p-0" style={{ color: '#115258' }}>
                                                    {i18n.language === 'id' ? item.body_text_id : item.body_text_en}
                                                </p>
                                                <div className="row mt-4">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="p-4 p-md-5">
                <div className="container-fluid p-3 p-md-5">
                    <div className="row mb-3" data-aos="fade-right">
                        <div className="col-12">
                            <h4 className="text-uppercase fw-semibold text-secondary">{t('tentang_kami_th_1')}</h4>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="fw-bold m-0 fs-3 fs-md-2">
                                        {t('tentang_kami_tb_1')} <span style={{ color: "#F16022" }}>{t('tentang_kami_tb_4')}</span>
                                    </h2>
                                </div>
                                <div className="col-12">
                                    <h2 className="fw-bold m-0 fs-3 fs-md-2">{t('tentang_kami_tb_2')}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-down">
                            <p className="fs-5 fs-md-4 fw-medium">
                                {t('tentang_kami_tb_3')}
                            </p>
                            <Link to={'tentang'} className="text-decoration-none text-secondary fs-5 fw-bold">
                                {t('tentang_kami_button')}<FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-halBisnis" style={{ backgroundColor: "#115258" }}>
                    <div className="container-fluid p-4 p-md-5">
                        <div className="row">
                            <div className="col">
                                <h3 style={{ color: '#F16022' }} className="text-uppercase text-center fw-bold fs-4 fs-md-3">
                                    {t('bisnis_kami_th_1')}
                                </h3>
                            </div>
                        </div>
                        <div className="row mt-3" data-aos="fade-right">
                            <div className="col">
                                {bisnisList.length > 0 ? (
                                    <>
                                        {bisnisList.map((bisnis) => (
                                            <div className="" key={bisnis.uuid}>
                                                <p
                                                    className="text-white"
                                                    dangerouslySetInnerHTML={{
                                                        __html: i18n.language === 'id'
                                                            ? DOMPurify.sanitize(bisnis.deskripsi_bisnis_id.split(' ').slice(0, 100).join(' ') + '...')
                                                            : DOMPurify.sanitize(bisnis.deskripsi_bisnis_en.split(' ').slice(0, 100).join(' ') + '...')
                                                    }} />
                                            </div>
                                        ))}
                                        <Link to={'/bisnis'} style={{ color: '#F16022' }} className="text-decoration-none fs-4 fs-md-3 fw-bold">
                                            {t('bisnis_kami_btn')} <FontAwesomeIcon icon={faArrowRight} />
                                        </Link>
                                    </>
                                ) : (
                                    <div className="text-center text-white">
                                        <h5 className="text-secondary">{t('data_empty')}</h5>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="container mt-5">
                            <div className="row mt-4" data-aos="zoom-in">
                                {bisnisList.length > 0 ? (
                                    <div className="col m-0 p-0">
                                        {bisnisList.map((bisnis) => (
                                            bisnis.link_video ? (
                                                <div key={bisnis.uuid} className="responsive-iframe-container mb-4">
                                                    <iframe
                                                        className="rounded-5 w-100"
                                                        style={{ aspectRatio: "16 / 9" }}
                                                        src={bisnis.link_video}
                                                        title="YouTube video player"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            ) : null
                                        ))}
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div data-aos="fade-right" style={{ position: 'relative' }}>
                    <MapContainer
                        center={position}
                        zoom={5}
                        zoomControl={true}
                        attributionControl={false}
                        style={{ height: '60vh', width: '100%' }}
                    >
                        <DisableScrollZoom />
                        <TileLayer
                            attribution='&copy; <a href="https://carto.com/">Carto</a>'
                            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        />
                        <CircleMarker
                            center={position}
                            radius={15}
                            pathOptions={{
                                color: "#F16022",
                                fillColor: "#F16022",
                                fillOpacity: 1
                            }}
                            eventHandlers={{
                                click: handleMarkerClick,
                            }}
                        />
                        <InfoCard position={position} visible={showCard} />
                    </MapContainer>

                </div>
            </section>
            <section>
                <div className="position-relative pt-5">
                    {beritaList.length > 0 ? (
                        <>
                            <button
                                className="btn btn-light position-absolute start-0 top-50 translate-middle-y z-3"
                                style={{ zIndex: 10 }}
                                onClick={() => {
                                    document.getElementById("beritaSlider").scrollBy({ left: -300, behavior: 'smooth' });
                                }}
                            >
                                &#10094;
                            </button>
                            <div
                                id="beritaSlider"
                                className="row flex-nowrap overflow-auto px-2 justify-content-center"
                                style={{ scrollBehavior: 'smooth', maxWidth: '100%' }}
                            >
                                {beritaList.map((berita) => (
                                    <div key={berita.uuid} className="col-10 col-sm-6 col-md-4 col-lg-3 me-3">
                                        <div className="card rounded-3 border-0 shadow-sm" style={{ height: '100%' }}>
                                            <div className="card-body p-0">
                                                <img
                                                    src={`http://localhost:8000/Berita/${encodeURIComponent(berita.image_berita)}`}
                                                    alt="foto"
                                                    className="img-fluid rounded-3 w-100"
                                                    style={{
                                                        objectFit: 'cover',
                                                        height: '200px',
                                                        width: '100%',
                                                    }}
                                                />
                                            </div>
                                            <div className="px-3 pt-3">
                                                <h5 className="fw-bold text-center" style={{ color: '#013233' }}>
                                                    {i18n.language === 'id' ? berita.judul_berita_id : berita.judul_berita_en}
                                                </h5>
                                            </div>
                                            <div className="px-3 py-2">
                                                <p
                                                    className="text-secondary"
                                                    style={{ fontSize: '0.9rem' }}
                                                    dangerouslySetInnerHTML={{
                                                        __html: i18n.language === 'id'
                                                            ? DOMPurify.sanitize(berita.deskripsi_berita_id.split(' ').slice(0, 30).join(' ') + '...')
                                                            : DOMPurify.sanitize(berita.deskripsi_berita_en.split(' ').slice(0, 30).join(' ') + '...')
                                                    }}
                                                />
                                            </div>
                                            <div className="pb-4 text-center">
                                                <Link
                                                    to={`/berita/selengkapnya/${berita.uuid}`}
                                                    className="text-secondary fw-bold text-decoration-none"
                                                >
                                                    Lebih Lanjut
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button
                                className="btn btn-light position-absolute end-0 top-50 translate-middle-y z-3"
                                style={{ zIndex: 10 }}
                                onClick={() => {
                                    document.getElementById("beritaSlider").scrollBy({ left: 300, behavior: 'smooth' });
                                }}
                            >
                                &#10095;
                            </button>
                        </>
                    ) : (
                        <div></div>
                    )}
                </div>
            </section>
            <section>
                <div className="container-fluid p-5 px-md-5 px-3">
                    <div className="row">
                        <div className="col p-3" data-aos="fade-right">
                            <h3 style={{ color: '#F16022' }} className="text-center fw-bold">
                                {t('esg_title')}
                            </h3>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center gap-4 flex-wrap" data-aos="fade-down">
                        <div style={{ flex: '1 1 30%', maxWidth: '500px' }}>
                            <div
                                className="card"
                                style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                }}
                            >
                                <div className="card-body m-0 p-0">
                                    <div
                                        style={{
                                            backgroundImage: `linear-gradient(to right, rgba(85, 38, 16, 0.75), rgba(85, 38, 16, 0.75)), url('/Image/Background/3e700277-fee4-4224-a980-9ea0cddc693a (1).jpg')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            height: '50vh',
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            paddingBottom: '30px',
                                        }}
                                    >
                                        <div className="text-center p-5">
                                            <h1 className="text-white fw-bold fs-4 fs-md-2">
                                                {t('environment_title')}
                                            </h1>
                                            <Link to="/ESG" className="text-decoration-none">
                                                <h4 className="text-secondary fw-light text-white fs-6 fs-md-5">
                                                    {t('read_more')}
                                                </h4>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ flex: '1 1 30%', maxWidth: '500px' }}>
                            <div
                                className="card"
                                style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                }}
                            >
                                <div className="card-body m-0 p-0">
                                    <div
                                        style={{
                                            backgroundImage: `linear-gradient(to right, rgba(114, 91, 0, 0.61),rgba(114, 91, 0, 0.61)), url('/Image/Background/3e700277-fee4-4224-a980-9ea0cddc693a (1).jpg')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            height: '50vh',
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            paddingBottom: '30px',
                                        }}
                                    >
                                        <div className="text-center p-5">
                                            <h1 className="text-white fw-bold fs-4 fs-md-2">
                                                {t('social_title')}
                                            </h1>
                                            <Link className="text-decoration-none" to={'/ESG/sosial'}>
                                                <h4 className="text-secondary fw-light text-white fs-6 fs-md-5">
                                                    {t('read_more')}
                                                </h4>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ flex: '1 1 30%', maxWidth: '500px' }}>
                            <div
                                className="card"
                                style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                }}
                            >
                                <div className="card-body m-0 p-0">
                                    <div
                                        style={{
                                            backgroundImage: `linear-gradient(to right, rgba(17, 82, 88, 0.84), rgba(17,86,88,0.84)), url('/Image/Background/3e700277-fee4-4224-a980-9ea0cddc693a (1).jpg')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            height: '50vh',
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            paddingBottom: '30px',
                                        }}
                                    >
                                        <div className="text-center p-5">
                                            <h1 className="text-white fw-bold fs-4 fs-md-2">
                                                {t('governance_title')}
                                            </h1>
                                            <Link className="text-decoration-none">
                                                <h4 className="text-secondary fw-light text-white fs-6 fs-md-5">
                                                    {t('read_more')}
                                                </h4>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-bawah d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
                    <div className="container text-center" data-aos="zoom-in-up">
                        <div className="row">
                            <div className="col">
                                <h1 className="text-white fw-bold">
                                    {t('professional_inspirational_title')}
                                </h1>
                                <p className="fs-6 text-white">
                                    {t('professional_inspirational_desc')}
                                </p>
                                <a href="/karir">
                                    <button
                                        className="btn rounded-5 fw-bold shadow-none fs-6 fs-md-3 mt-4 px-4 py-2 text-white"
                                        style={{ backgroundColor: "#F16022" }}
                                    >
                                        {t('career_button')}
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div >

    );
}

export default Home;
